import { Space, Switch } from "@mini-ui/ui";
import { IconClose, IconCheck } from "@mini-ui/icons";

export default function App() {
  return (
    <Space size='large'>
      <Switch checkedIcon={<IconCheck />} uncheckedIcon={<IconClose />} defaultChecked />
      <Switch
        type='round'
        checkedIcon={<IconCheck />}
        uncheckedIcon={<IconClose />}
        defaultChecked
      />
      <Switch
        type='line'
        checkedIcon={<IconCheck />}
        uncheckedIcon={<IconClose />}
        defaultChecked
      />
    </Space>
  );
};
