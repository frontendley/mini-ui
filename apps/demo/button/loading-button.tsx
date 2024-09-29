import { Button } from "@mini-ui/ui"
import { useState } from "react"
export default function App () {
  const [loading, setLoading] = useState<boolean>(false)

  function onClick () {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }
  return (
    <Button 
      loading={loading} 
      type="primary" 
      onClick={() => onClick()} 
    > 
      {loading}click loading
    </Button>
  )
}