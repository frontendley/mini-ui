import { useDrop } from "react-dnd"
import { classNames } from "../../../../../../packages/ui/src/utils"

export function Canvas() {

  const [ {canDrop}, dropRef] = useDrop(() => ({
    accept: [ 'text' ],
    drop: (item: { type: string }) => {
      alert("yes, it's" + item.type)
    },
    collect(monitor) {
      return {
        canDrop: monitor.canDrop()
      }
    },
  }))

  return (
    <div
      ref={dropRef}
      className={classNames('grow', {
        ['border-2 border-b-cyan-900']: canDrop
      })}
    >
      
    </div>
  )
}
