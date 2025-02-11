import { BlockSetting } from "../../../components/SettingPanel/BlockSetting"
import { PageSetting } from "../../../components/SettingPanel/PageSetting"
import { useBlockStore } from "../../../stores/useBlockStore"

export function SettingPanel() {
  const activeBlock = useBlockStore(state => state.activeBlock)
  let component = <PageSetting />

  if (activeBlock) {
    component = <BlockSetting />
  }

  return (
    <div className="w-[25%] h-full border-l">
      { component }
    </div>
  )
}
