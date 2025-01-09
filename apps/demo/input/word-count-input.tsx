import {Input} from "@mini-ui/ui";

export default function App() {
  return (
      <div style={{display: 'flex', flexDirection: 'column', gap: "20px"}}>
        <Input showWordLimit maxLength={20}/>
        <Input showWordLimit maxLength={{
          length: 10,
          errorOnly: true
        }}/>
      </div>
  )
}