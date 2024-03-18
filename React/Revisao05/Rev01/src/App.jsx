import { useEffect, useRef, useState } from "react"
import { Subtitle } from "./Subtitle"
import { NewComponent } from "./components/NewComponent"
import { ColoredStatus } from "./components/ColoredStatus"
import styles from "./App.module.css"
import { Card } from "./components/Card"
import { RestParams } from "./components/RestParams"
import { useCounter2, useCounter } from "./hooks/useCounters"
import InputWithState from "./components/InputWithState"
import Counter from "./components/Counter"

const games = [
  {
    "id": 1,
    "coverImage": "https://i.pinimg.com/originals/d0/8b/bd/d08bbd23315fa7a430d2d6ff2575339e.jpg",
    "title": "Super Mario Bros",
    "releaseYear": 1985,
    "description": "A classic platformer game."
  },
  {
    "id": 2,
    "coverImage": "https://cdn.mobygames.com/covers/4857336-the-legend-of-zelda-nes-front-cover.jpg",
    "title": "The Legend of Zelda",
    "releaseYear": 1986,
    "description": "A top-down adventure game."
  },
  {
    "id": 3,
    "coverImage": "https://www.hellandheavennet.com/files/final-fantasy/box-nes-us-1.jpg",
    "title": "Final Fantasy",
    "releaseYear": 1987,
    "description": "A classic role-playing game."
  },
  {
    "id": 4,
    "coverImage": "https://gamefaqs.gamespot.com/a/box/0/3/4/3034_front.jpg",
    "title": "Doom",
    "releaseYear": 1993,
    "description": "A first-person shooter game."
  },
  {
    "id": 5,
    "coverImage": "https://cdn.mobygames.com/covers/4056006-warcraft-orcs-humans-dos-front-cover.jpg",
    "title": "Warcraft",
    "releaseYear": 1994,
    "description": "A real-time strategy game."
  },
  {
    "id": 6,
    "coverImage": "https://cdn.mobygames.com/covers/5346152-starcraft-windows-front-cover.jpg",
    "title": "Starcraft",
    "releaseYear": 1998,
    "description": "A military science fiction game."
  },
  {
    "id": 7,
    "coverImage": "https://i.pinimg.com/originals/a0/d0/9c/a0d09c9cd3eb770f8f83e23744da72fc.jpg",
    "title": "Half-Life",
    "releaseYear": 1998,
    "description": "A first-person shooter game."
  },
  {
    "id": 8,
    "coverImage": "http://media.ign.com/games/image/object/002/002226/Gran-Turismo-1_PS1_US_BOX.jpg",
    "title": "Gran Turismo",
    "releaseYear": 1998,
    "description": "A driving/racing simulator game."
  },
  {
    "id": 9,
    "coverImage": "https://cdn.mobygames.com/covers/3966925-halo-combat-evolved-xbox-front-cover.jpg",
    "title": "Halo",
    "releaseYear": 2001,
    "description": "A military science fiction shooter game."
  },
  {
    "id": 10,
    "coverImage": "http://s.emuparadise.org/fup/up/150757-Kingdom_Hearts_(USA)-1.jpg",
    "title": "Kingdom Hearts",
    "releaseYear": 2002,
    "description": "An action-based role-playing game with Disney and Final Fantasy characters."
  }
]

let gameComponents = []
games.forEach(game => gameComponents.push(<h2>{game.title}</h2>))


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

//requisições http com useEffect:
async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
  const data = await response.json()
  return data.results
}

export default function App() {
  const tech='react'
  // const state = useState("Follow")
  const [followText, setFollowText] = useState("Follow")
  
  function handleFollow(ev) {
    // state[1]("Following")
    setFollowText("Following")
  }

  // const {count, increment} = useCounter()
  const counter = useCounter() //so declarar hooks aqui, no top level do componente
  const counter2 = useCounter2() //so declarar hooks aqui, no top level do componente

  const [passwordSize, setPasswordSize] = useState(12)

  const [showInput, setShowInput] = useState(false)


  //conhecendo o useRef
  let variable = 0
  const [state, setState] = useState(0) //tupla com uma variavel do valor atual e uma funcao de modificar
  const ref = useRef(0) //um objeto com a propriedade current (atual)

  const showValues = () => {
    alert(`Variável: ${variable}
    State: ${state}
    Ref: ${ref.current}
    `)
  }
  const inputRef = useRef(null)
  const handleClick2 = () => { inputRef.current.focus() }

  //conhecendo o useEffect
  const [counter3, setCounter3] = useState(0)
  const [counter4, setCounter4] = useState(0)

  //só chama a função, sem retorno.
  useEffect(() => {
    alert('O efeito colateral foi ativado')
  }, [counter3]) // para executar em todas as renderizações, apagar a lista
  //para executar na atualização da página, lista vazia

  //dois parâmetros:
  // - callback de efeito;
  // - lista de dependências (valores observando);

  //exemplo da limpeza:
  const [show, setShow] = useState(false)


  //requisições http com useEffect:
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {//executa o código uma vez apenas quando o componente for montado
    fetchPokemon().then(results => {
      console.log("Requisição realizada.")
      console.log(results)
      setPokemon(results)
    })
  }, [])

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
      <div id="state">
        <button onClick={handleFollow}>{followText}</button>
      </div>
      <div id="hooks">
        <button onClick={counter.increment}>{counter.count}</button>
      </div>

      <div id="useState">
        <button onClick={counter2.increment}>asdfasdf{counter2.count}</button>
        {/* O React.StrictMode em main, roda a aplicação 2 vezes (em desenvolvimento) para identificar bugs (modo restrito) */}
      </div>

      <div id="controlando-inputs-com-state">
          <input
            type="number"
            id="passwordSize"
            min="1"
            value={passwordSize} /*fixo*/
            // onChange={setPasswordSize} /*renderiza varias vezes entrando em loop*/
            onChange={(ev) => setPasswordSize(ev.target.value)} /*captura o evento e renderiza o value do evento atraves da função*/
          ></input>
          <p>{passwordSize}</p>
          {/* <button onClick={setPasswordSize(99)}>mudar estado do password para 99</button> /*causa loop infinito*/}
          <button onClick={() => setPasswordSize(99)}>mudar estado do password para 99</button>
      </div>

      <div id="estado-entre-componentes">
        {/* npm install prop-types */}
        {/* import PropTypes from 'prop-types - nao precisa ficar desabilitando o eslint - da pra usar os tipos sem typescript*/}
        <InputWithState passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
      </div>

      <div id="renderizacao-condicional">
        <label htmlFor="showInput">Customizar elemento:</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
        ></input>
        {showInput ? (
          <p>mostrando elementos</p>
        ) :
          null
        }
      </div>

      <div id="renderizacao-listas">
        <h1>Meus Jogos</h1>
        {/* {games} -- causa erro porque o React só aceita dentro de um componente: componente react ou um texto, numero (que converte pra string), e esse é um array de objetos*/}
        {gameComponents} {/*array de -strings- de titulos de jogos construido por ForEach (mas não prático)*/} 

        <h1>Meus Jogos</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem" }}> {/*estilização*/}
          {/* {games.map(game => <h2>{game.title}</h2>)} prático, pois retorna o array em um array novo, em apenas um método */}

          {games.map(game => { return (
            <div key={game.id}> {/*elementos em formato de lista precisam de um identificador único (key) - para o react otimizar a lista*/}
              <img src={game.coverImage} style={{height: "30rem", width: "20rem", objectFit: "cover"}} alt=""/>
              <h2>{game.title}</h2>
              <p>{game.description}</p>
            </div>
          )} )}
        </div>
      </div>

      <div id="conhecendo-o-useRef-(persistindo-valores)">
        {/* não atualiza a interface (em um componente grande onde é custoso renderizar)*/}

        <h2>Conhecendo o useRef</h2>
        <hr/>
        <h3>Exibindo valores na tela:</h3>
        <p>Variável: {variable}</p>
        <button onClick={() => variable ++ }>Aumentar Variável</button>
        <p>State: {state}</p>
        <button onClick={() => setState(state => state + 1) }>Aumentar State</button>
        <p>Ref: {ref.current}</p>
        <button onClick={() => ref.current ++ }>Aumentar Ref</button>
        <hr/>
        <button onClick={showValues}>Exibir valores na -- memória --</button>

        {/*o useRef não atualiza a tela na mudança de valor, mas junto com a mudança do useState (pois ocorreu uma renderização na tela)*/}
        {/* já a variável, não atualiza, e zera na renderização. */}
        {/* (ambos Variável e Ref mudam por causa da chamada da função showValues executando denovo) */}


        {/* Outro exemplo: */}
        <h2>Exemplo de useRef com DOM</h2>
        <input ref={inputRef} type="text"></input> {/*associa o elemento input (DOM nativo) ao Ref 
        - o que permite chamar qualquer método ou prop nativa do input -*/}

        <button onClick={handleClick2}>Focar no Input</button>
      </div>

      <div id="conhecendo-o-useEffect-(sincronizar-com-sistemas-externos--efeitos-colaterais)">
        {/* segundo hook mais utilizado depois do useState. Usado com websockets por exemplo */}
        {/* (poderia não ser usado chamando executando na própria função, mas é util quando
        ocorrem alterações em diversos lugares, como ocorre em eventos externos ao navegador (chats)) */}

        <h1>Conhecendo o useEffect</h1>
        <button onClick={() => setCounter3(count => count + 1)}>Contador: {counter3}</button>
        <button onClick={() => setCounter4(count => count + 1)}>Contador: {counter4}</button>
        <hr/>

        {/* exemplo usando a limpeza e o retorno da função: */}
        <div>
          <input
            type="checkbox"
            id="show"
            value={show}
            onChange={() => setShow((show) => !show)}
          ></input>
          <label htmlFor="show">Exibir</label>
        </div>
        {
          show ? <Counter/> : null
        }
        <hr/>
      </div>

      <div id="requisicoes-http-com-useEffect">
        <div>
          <h2>Pokémon</h2>
          {/* {JSON.stringify(pokemon)} */}
          <ul className="pokemon">
            {pokemon.map(mon => (
              <li key={mon.name}>
                <span>{mon.name}</span>
                <button>
                  Ver detalhes
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </>
  )
}