import { Space, Switch } from "@mini-ui/ui";

export default function App() {
  return (
    <Space>
      <Switch />
      <Switch size='small' />
      <Switch type='round' />
      <Switch size='small' type='round' />
      <Switch type='line' />
      <Switch size='small' type='line' />
    </Space>
  )
}
