import {Input} from "@mini-ui/ui/src/components/Input/Input";
import "@mini-ui/ui/dist/components/Input/styles/index.css"
import {useState} from "react";

export default function App() {
  const [value, setValue] = useState("")
  const onChange = (value: string) => {
    setValue(value)
  }

  return (
      <div style={{display: "flex", flexDirection: 'column', gap: "20px"}}>
        <Input
            placeholder="请输入"
            defaultValue="string"
            // value= {value}
            // onChange={onChange}
        />
        <Input
            value={value}
            onChange={onChange}
        />
      </div>
  )
}