import "@mini-ui/ui/dist/index.css"
import "./App.css"
import Suberscriber from "./components/Subscriber"
import { ZustandDemo1, ZustandDemo2 } from "./components/ZustandDemo"

// react组件
function App() {

  return (
    <div className="app">
      <Suberscriber />
      <ZustandDemo1 />
      <ZustandDemo2 />
    </div>
  )
}

export default App
