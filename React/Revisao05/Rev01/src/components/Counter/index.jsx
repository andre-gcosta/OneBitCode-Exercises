import { useEffect, useState } from "react"

//função de limpeza do useEffect (eliminar pendências do elemento afetado)
export default function Counter() {
    const [counter5, setCounter5] = useState(0)
    
    useEffect(() => {
        alert("Chamando a api")
        return () => {
            alert("Chamada cancelada")
        }
    }, [])
  
    return (
      <button onClick={() => setCounter5(counter => counter + 1)}>Contador: {counter5}</button>
    )
  }