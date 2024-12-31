import { Button } from "@mini-ui/ui"
import { useCount } from "../store"

export function ZustandDemo1() {
  const count = useCount(state => state.count)
  return (
    <div>
      {count}
    </div>
  )
}

export function ZustandDemo2() {
  const inc = useCount(state => state.inc)
  return (
    <div>
      <Button onClick={inc}>
        点击增加
      </Button>
    </div>
  )
}