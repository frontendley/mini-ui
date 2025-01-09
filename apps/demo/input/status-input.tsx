import { Input } from "@mini-ui/ui";

export default function App () {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
      <Input status='warning'/>
      <Input status="error" />
    </div>
  )
}