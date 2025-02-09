import { Space, Switch } from "@mini-ui/ui";

export default function App () {
  return (
    <Space size="large">
      <Switch disabled />
      <Switch checked disabled />
      <Switch type='round' disabled />
      <Switch type='round' checked disabled />
      <Switch type='line' disabled />
      <Switch type='line' checked disabled />
    </Space>
  )
}
