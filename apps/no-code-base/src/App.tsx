import Editor from "./views/Editor"
import "./App.css"
import { Header } from "./components/Header/Header"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import "@mini-ui/ui/dist/index.css"

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-[100vw] h-[100vh] flex flex-col">
        <Header />
        <Editor />
      </div>
    </DndProvider>
  )
}

export default App
