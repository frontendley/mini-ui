import { useMemo } from "react"
import { createForm, Form, onFormValuesChange } from "@formily/core"
import { FormProvider } from "@formily/react"
import { ButtonBlockForm } from "../../blocks/ButtonBlock"
import { TextBlockForm } from "../../blocks/TextBlock"
import { useBlockStore } from "../../stores/useBlockStore"


export function BlockSetting() {

  const activeBlock = useBlockStore(state => state.activeBlock)
  const updateBlocks = useBlockStore(state => state.updateBlocks)

  const form = useMemo(() => {
    return createForm({
      initialValues: activeBlock || {},
      effects(){
        onFormValuesChange((form: Form) => {
          updateBlocks(form.getFormState().values)
        })
      }
    })
  }, [activeBlock])

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
      <FormProvider form={form}>
        {component}
      </FormProvider>
    </div>
  )
}
