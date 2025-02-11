import { ReactNode } from "react";
import { TextBlock } from "../../blocks/TextBlock/TextBlock";
import { BlocksTree, useBlockStore } from "../../stores/useBlockStore";
import { ButtonBlock } from "../../blocks/ButtonBlock";

export const BlockRender = (props: BlocksTree) => {
  // props
  const { id } = props
  
  // store
  const data = useBlockStore((state) => state.blocks[id])
  const setActiveBlock = useBlockStore(state => state.setActiveBlock)

  // 派生数据
  let component:ReactNode = null;

  switch(data.type) {
    case "text":
      component = <TextBlock data={data} />
      break
    case "button":
      component = <ButtonBlock data={data} />
      break
    default: 
      component = null
      break
  }

  return (
    <div onClick={() => setActiveBlock(id)}>
      { component }
    </div>
  )
}
