import { useState } from "react"
import { Subtitle } from "./Subtitle"
import { NewComponent } from "./components/NewComponent"
import { ColoredStatus } from "./components/ColoredStatus"
import styles from "./App.module.css"
import { Card } from "./components/Card"
import { RestParams } from "./components/RestParams"


function Sum(a,b) {
  return a + b
}

function Title() {
  const tech2 = "Javascript"
  return <h1>{tech2} is awesome!</h1>
}

function handleClick(ev) {
  console.log(ev)
  alert("Função executada")
}

export default function App() {
  const [count, setCount] = useState(0)
  const tech='react'

  return (
    <>
      <div id='dados-dinamicos'>
        <h1>{tech} is awesome</h1> {/*dados dinâmicos*/}
        <h2>1 + 1 = {1+1}</h2>
        <h2>2 + 2 = {Sum(2, 2)}</h2>
      </div>
      <div id='novos-componentes'>
        <Title/>
        <Subtitle/>
        <NewComponent/>
      </div>
      <div id='estilizacao'
        // style={
        //   {
        //   backgroundColor: "#2c2c2d",
        //   display: "grid",
        //   minHeight: "10vh",
        //   placeContent: "center",
        //   textAlign: "center"
        //   }
        // }

        //sass pode ser utilizado, instalado no vite:
        className={styles.app}
      >
        <ColoredStatus/>
      </div>
      <>fragment</>

      <div id="reutilizar-componentes-e-props">
        <Card title="Card 1" texto="Card 1"/>
        <Card texto="Card 2"/>
        <Card texto="Card 3">Texto da props.children aqui</Card>
      </div>

      <RestParams id="props-rest-params"
        className={styles.link}
        data-test="some value" /* unicos atributos no jsx que não utilizam o CamelCase */
        aria-label="social links" /* unicos atributos no jsx que não utilizam o CamelCase */
      >
      </RestParams>

      <div id="javascript-events">
        <button onClick={handleClick}>Click</button>
      </div>
    </>
  )
}