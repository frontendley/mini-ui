import { Button } from "@mini-ui/ui";

export default function App () {
  return (
    <div style={{display: "flex", gap: "20px"}}>
      <Button type="primary" shape="square">square</Button>
      <Button type="primary" shape="round">round</Button>
      <Button type="primary" shape="circle">+</Button>
  </div>
  )
}