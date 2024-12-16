import {Input} from "@mini-ui/ui";

export default function App() {
  return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Input showWordLimit maxLength={20}/>
        <Input showWordLimit maxLength={{
          length: 10,
          errorOnly: true
        }}/>
      </div>
  )
}