import {Button} from "@mini-ui/ui";
import "@mini-ui/ui/dist/components/Button/style/index.css"

export default function App () {
  return (
      <div style={{display: "flex", gap: "20px"}}>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Primary</Button>
        <Button type="outline">Primary</Button>
        <Button type="text">Primary</Button>
        <Button type="dashed">Primary</Button>
      </div>
  )
}