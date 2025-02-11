import { Button } from "@mini-ui/ui"
import { ButtonBlockType } from "../../types/blocks"

interface ButtonBlockProps {
  data?: ButtonBlockType
}
export function ButtonBlock(props: ButtonBlockProps) {

  const { data } = props

  return(
    <Button {...data?.props}>
     
    </Button>
  )
}
