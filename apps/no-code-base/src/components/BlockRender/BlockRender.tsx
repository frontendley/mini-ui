import { ReactNode } from "react";
import { TextBlock } from "../../blocks/TextBlock/TextBlock";
import { BlocksTree, useBlockStore } from "../../stores/useBlockStore";

export const BlockRender = (props: BlocksTree) => {
  // props
  const { id, type } = props
  
  // store
  const data = useBlockStore((state) => state.blocks[id])

  // 派生数据
  let component:ReactNode = null;

  switch(type) {
    case "text":
      component = <TextBlock data={data} />
      break
  }
  return (
    <div>
      { component }
    </div>
  )
}
