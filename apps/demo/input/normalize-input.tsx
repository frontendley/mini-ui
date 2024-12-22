import { Input } from "@mini-ui/ui";

export default function app () {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
      <Input 
        normalize={value => value.toLocaleLowerCase()}
        normalizeTrigger={['onBlur']}
      />
    </div>
  )
}