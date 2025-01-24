import { Button, Space } from "@mini-ui/ui"
import type { SpaceProps } from "@mini-ui/ui"
import { useState } from "react"

export default function App(){
  const [align, setAlign] = useState<SpaceProps['align']>()

  const ALIGN_LIST: SpaceProps['align'][] = ['start', 'center', 'end', 'baseline']

  function isChecked(_align?: string) {
    return _align === align
  }
  return (
    <Space direction="vertical">
    <Space>
      {
        ALIGN_LIST.map(item => {
          return (
            <label key={item} htmlFor={item}>
              <input type="radio" name="align" value={item} checked={isChecked(item)} onChange={e=>setAlign(e.target.value as SpaceProps['align'])} />
              {item}
            </label>
          )
        })
      }
    </Space>
    <Space align={align}>
      item1
      <Button type="primary">item2</Button>
      <div style={{ padding: "0 20px", height: '60px', backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>item2</div>
    </Space>
  </Space>
  )
}