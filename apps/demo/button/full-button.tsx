import {Button} from "@mini-ui/ui/src";
import {CSSProperties} from "react";

export default function App () {
  const containerStyle: CSSProperties = {
    width: '300px',
    boxSizing: "border-box",
    padding: '20px',
    border: "1px solid #f0f1f3",
    display: 'flex',
    flexDirection: 'column',
    gap: "20px"
  }

  
  return (
      <div style={containerStyle}>
        <Button long type="primary" status="success">success</Button>
        <Button long type="primary" status="default">default</Button>
        <Button long type="primary" status="warning">warning</Button>
        <Button long type="primary" status="danger">danger</Button>
      </div>
  )
}