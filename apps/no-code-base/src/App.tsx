import Editor from "./views/Editor"
import "./App.css"
import { Header } from "./components/Header/Header"

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col">
      <Header />
      <Editor />
    </div>
  )
}

export default App
