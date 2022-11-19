import { useState } from "react"

function ReactDemo() {
  const [ count, setCount ] = useState(0)

  function handleClick() {
    setCount((prevState) => prevState + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}

export default ReactDemo