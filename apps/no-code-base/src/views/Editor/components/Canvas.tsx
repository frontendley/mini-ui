import { useDrop } from "react-dnd"
import { classNames } from "../../../../../../packages/ui/src/utils"
import { BlocksTree, useBlockStore } from "../../../stores/useBlockStore"
import { BlockRender } from "../../../components/BlockRender/BlockRender"

export function Canvas() {

  const blocksTree: BlocksTree[] = useBlockStore(state => state.blocksTree)
  const insertBlock = useBlockStore(state => state.insertBlock)

  // handle drag and drop
  const [ {canDrop}, dropRef] = useDrop(() => ({
    accept: [ 'text' ],
    drop: (item: { type: string }) => {
      insertBlock(item.type)
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
      {
        blocksTree?.map(block => {
          return (
            <BlockRender key={block.id} {...block} />
          )
        })
      }
    </div>
  )
}
