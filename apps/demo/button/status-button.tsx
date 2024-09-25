import {Button} from "@mini-ui/ui";
import "@mini-ui/ui/dist/components/Button/style/index.css"

export default function App () {
  return (
      <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
        <div style={{display: "flex", gap: "20px"}}>
          <Button type="primary" status="default">Default</Button>
          <Button type="secondary" status="default">Default</Button>
          <Button type="outline" status="default">Default</Button>
          <Button type="text" status="default">Default</Button>
          <Button type="dashed" status="default">Default</Button>
        </div>
        <div style={{display: "flex", gap: "20px"}}>
          <Button type="primary" status="success">Success</Button>
          <Button type="secondary" status="success">Success</Button>
          <Button type="outline" status="success">Success</Button>
          <Button type="text" status="success">Success</Button>
          <Button type="dashed" status="success">Success</Button>
        </div>
        <div style={{display: "flex", gap: "20px"}}>
          <Button type="primary" status="warning">Warning</Button>
          <Button type="secondary" status="warning">Warning</Button>
          <Button type="outline" status="warning">Warning</Button>
          <Button type="text" status="warning">Warning</Button>
          <Button type="dashed" status="warning">Warning</Button>
        </div>
        <div style={{display: "flex", gap: "20px"}}>
          <Button type="primary" status="danger">Danger</Button>
          <Button type="secondary" status="danger">Danger</Button>
          <Button type="outline" status="danger">Danger</Button>
          <Button type="text" status="danger">Danger</Button>
          <Button type="dashed" status="danger">Danger</Button>
        </div>
      </div>
  )
}