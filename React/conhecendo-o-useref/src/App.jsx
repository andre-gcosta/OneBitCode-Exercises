import { useState } from "react"
import { useRef } from "react"

export default function App() {
  let variable = 0
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const showValues = () => {
    alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `)
  }
  return (
    <div>
      <h2>Conhecendo o useRef</h2>
      <hr />
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button onClick={() => variable++}>Aumentar a variável</button>
      <button onClick={() => ref.current++}>Aumentar a ref</button>
      <button onClick={() => setState(state => state + 1)}>Aumentar o state</button>
      <button onClick={showValues}>Exibir valores</button>
    </div>
  )
}