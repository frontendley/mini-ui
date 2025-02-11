import { ButtonBlockForm } from "../../blocks/ButtonBlock"
import { TextBlockForm } from "../../blocks/TextBlock"
import { useBlockStore } from "../../stores/useBlockStore"

export function BlockSetting() {

  const activeBlock = useBlockStore(state => state.activeBlock)

  let component = null
  switch(activeBlock?.type) {
    case "text":
      component = <TextBlockForm />
      break
    case "button":
      component = <ButtonBlockForm />
      break
  }
  
  return(
    <div className="">
      {component}
    </div>
  )
}
