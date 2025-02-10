import { useDrag } from "react-dnd"

type BlockMenuItemType = {
  type: string;
  name: string;
}

const BLOCK_MENUS = [
  {
    type: "display",
    name: "展示组件",
    blocks: [
      {
        type: "text",
        name: "文本组件"
      }
    ]
  }
]

export function BlockMenu() {
  return (
    <div className="w-full h-full flex flex-wrap">
      {
        BLOCK_MENUS.map(group => {
          return (
            <div key={group.type} className="w-full">
              <h3 className="bold box-border pl-2 my-4 text-xl">{group.name}</h3>
              <div className="w-full flex flex-wrap justify-start gap-[1%] box-border px-2">
                {
                  group.blocks?.map(block => {
                        return <BlockMenuItem key={group.type + block.type} { ...block } />
                  })
                }
              </div>
            </div>
          )
        })
      } 
    </div>
  )
}

function BlockMenuItem(props: BlockMenuItemType) {
  const { type, name } = props

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, dragRef] = useDrag(
    () => ({
      type: type,
      item: {
        type,
        name
      }
    })
  )

  return (
    <div
      ref={dragRef}
      className="w-[32%] box-border py-1 text-center border"
    >
      { name }  
    </div>

  )
}
