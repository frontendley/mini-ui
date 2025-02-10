import { TextBlockType } from "../../types/blocks"

interface TextBlockProps {
  data?: TextBlockType
}

export function TextBlock (props: TextBlockProps) {
  const { data } = props

  return (
    <div>
      { data?.props.text }      
    </div>
  )
}
