import { Button } from "@mini-ui/ui/src";
import { SpaceSize } from "@mini-ui/ui/src/components/Space/interface";
import Space from "@mini-ui/ui/src/components/Space/Space";
import { useState } from "react";

export default function App() {

  const [size, setSize] = useState<SpaceSize>('mini')

  const SIZE_LIST: Exclude<SpaceSize, number>[] = ["mini", "small", "middle", "large"]
  const isChecked = (_size: SpaceSize) => {
    return _size === size
  }
  return (
    <Space direction="vertical">
      <Space>
        {
          SIZE_LIST.map(item => {
            return (
              <label key={item} htmlFor={item}>
                <input type="radio" name="size" value={item} checked={isChecked(item)} onChange={e=>setSize(e.target.value as SpaceSize)} />
                {item}
              </label>
            )
          })
        }


      </Space>
      <Space size={size}>
        <Button type="primary">item1</Button>
        <Button type="primary">item2</Button>
        <Button type="primary">item2</Button>
      </Space>
    </Space>
  )
}