import { useRef } from "react";

export function useCreate(fn: () => void) {
  const hasCreated = useRef(false)

  if(!hasCreated.current) {
    fn?.()
    hasCreated.current = true
  }
}
