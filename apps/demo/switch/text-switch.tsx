import { Space, Switch } from "@mini-ui/ui";

export default function App (){
  return (
    <Space>
      <Switch checkedText='ON' uncheckedText='OFF' />
      <Switch checkedText='1' uncheckedText='0' type='round' defaultChecked />
    </Space>
  )
}
