import { Button } from "@mini-ui/ui";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <Button type="primary" size="mini">mini</Button>
      <Button type="primary" size="small">small</Button>
      <Button type="primary" size="default">default</Button>
      <Button type="primary" size="large">large</Button>
    </div>
  )
}