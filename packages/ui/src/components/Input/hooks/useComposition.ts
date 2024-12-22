import type { CompositionEvent, ChangeEvent } from "react"
import { useRef, useState } from "react"
import { InputProps } from "../type"

export function useComposition({
  value,
  onChange
}: {
  value: string,
  onChange: InputProps['onChange']
}) {
  const isCompositionRef = useRef<boolean>(false)
  const [compositionValue, setCompositionValue] = useState<string>()

  const triggerChange: InputProps["onChange"] = (newValue, event) => {
      if (
        onChange
        && value !== newValue
        // && 
      ) {
        onChange(newValue, event)
      }
  }


  const handleComposition = (event: CompositionEvent<HTMLInputElement>) => {
    // composition结束时设定ref
    isCompositionRef.current = event.type !== "compositionend"

    if (!isCompositionRef.current) {
      setCompositionValue(undefined)
      // 处理composition输入结束后的value改变。
      triggerChange((event.target as HTMLInputElement).value, event)
    }
  }

  const valueChangeHandler = (event: CompositionEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement).value
    if (!isCompositionRef.current) {
      compositionValue && setCompositionValue(undefined)
      // 处理英文直接输入值改变
      triggerChange(newValue, event)
    } else {
      isCompositionRef.current = false
      setCompositionValue(newValue)
    }
  }

  return {
    compositionValue,
    handleComposition,
    valueChangeHandler
  }
}