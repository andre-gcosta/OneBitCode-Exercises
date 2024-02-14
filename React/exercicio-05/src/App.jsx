import { useState } from "react"

export default function App() {
  [comments, setComments] = useState("")

  return (
    <div className="container">
      <form>
        <h2>Seção de Comentários</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text"/>
        </div>
        <div>
          <label htmlFor="commentButton">Comentário</label>
          <input id="commentButton" type="text"/>
        </div>
        <button type="submit" onClick={setComments}>Enviar comentário</button>
      </form>
      <hr/>
      <div className="commentsContainer">
        <div>{comments}</div>
      </div>
    </div>
  )
}