import { BlockSetting } from "./components/BlockSetting";
import { Canvas } from "./components/Canvas";
import { LeftPanel } from "./components/LeftPanel";

export default function Editor() {
  return (
    <div className="w-ful h-full flex">
      <LeftPanel /> 
      <Canvas />
      <BlockSetting />
    </div>
  )
} 
