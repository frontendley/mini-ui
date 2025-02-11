import { SettingPanel } from "./components/SettingPanel";
import { Canvas } from "./components/Canvas";
import { LeftPanel } from "./components/LeftPanel";

export default function Editor() {
  return (
    <div className="w-ful h-full flex grow">
      <LeftPanel /> 
      <Canvas />
      <SettingPanel />
    </div>
  )
} 
