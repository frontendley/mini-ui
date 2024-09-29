import {Button} from "@mini-ui/ui";
import "@mini-ui/ui/dist/components/Button/style/index.css"
import "@mini-ui/ui/dist/components/Icon/style/index.css"

export default function App () {
  return (
      <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
        <div style={{display: "flex", gap: "20px"}}>
          <Button disabled type="primary" status="default">Default</Button>
          <Button disabled type="secondary" status="default">Default</Button>
          <Button disabled type="outline" status="default">Default</Button>
          <Button disabled type="text" status="default">Default</Button>
          <Button disabled type="dashed" status="default">Default</Button>
        </div>
        <div style={{display: "flex", gap: "20px"}}>
          <Button disabled type="primary" status="success">Success</Button>
          <Button disabled type="secondary" status="success">Success</Button>
          <Button disabled type="outline" status="success">Success</Button>
          <Button disabled type="text" status="success">Success</Button>
          <Button disabled type="dashed" status="success">Success</Button>
        </div>
        <div style={{display: "flex", gap: "20px"}}>
          <Button disabled type="primary" status="warning">Warning</Button>
          <Button disabled type="secondary" status="warning">Warning</Button>
          <Button disabled type="outline" status="warning">Warning</Button>
          <Button disabled type="text" status="warning">Warning</Button>
          <Button disabled type="dashed" status="warning">Warning</Button>
        </div>
        <div style={{display: "flex", gap: "20px"}}>
          <Button disabled type="primary" status="danger">Danger</Button>
          <Button disabled type="secondary" status="danger">Danger</Button>
          <Button disabled type="outline" status="danger">Danger</Button>
          <Button disabled type="text" status="danger">Danger</Button>
          <Button disabled type="dashed" status="danger">Danger</Button>
        </div>
      </div>
  )
}