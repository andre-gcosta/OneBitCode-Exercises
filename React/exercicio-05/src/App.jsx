import { useState } from "react"

export default function App() {
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date()
    }
    setComments((stateCallback) => [newComment, ...stateCallback])
  }
  
  const [comments, setComments] = useState([])
  // const [author, setAuthor] = useState("")
  // const [content, setContent] = useState("")
  // const [comments, setComments] = useState([])

  // const handleSubmit = (ev) => {
  //   ev.preventDefault()

  //   const newComment = {
  //     id: Math.floor(Math.random() * 1000000),
  //     author: author,
  //     content: content,
  //     createdAt: new Date()
  //   }

  //   setComments((stateCallback) => [newComment, ...stateCallback])
  //   console.log(newComment)
  //   setAuthor("")
  //   setContent("")
  // }


  return (
    <div id="app">
      <h2>Seção de Comentários</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input type="email" required value={author} onChange={
          (ev) => setAuthor(ev.target.value)
        }></input>
        <label htmlFor="content">Comentário</label>
        <textarea id="content" rows="6" cols="30" required value={content} onChange={
          (ev) => setContent(ev.target.value)
        }></textarea>
        <button type="submit">Enviar comentário</button>
      </form>
      <hr />
      <section id="comments">
        {comments.length > 0 ? (comments.map((comment) => (
          <div id={comment.id}>
            <h3>{comment.author}</h3>
            <span>{comment.createdAt.toLocaleString()}</span>
            <p>{comment.content}</p>
          </div>
        )
        )) : <p>Seja o primeiro a comentar!</p>}
      </section>
    </div>

    // <div className="container">
    //   <h2>Seção de Comentários</h2>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="author">Email</label>
    //     <input 
    //       id="author"
    //       type="email"
    //       required
    //       value={author}
    //       onChange={(ev) => setAuthor(ev.target.value)}
    //     />
    //     <label htmlFor="content">Comentário</label>
    //     <textarea
    //       id="content"
    //       cols="30" rows="6"
    //       required
    //       value={content}
    //       onChange={(ev) => setContent(ev.target.value)}
    //     ></textarea>
    //     <button type="submit">Enviar comentário
    //     </button>
    //   </form>
    //   <hr />
    //   <section id="comments">
    //     <div>
    //       <h3>author@email.com</h3>
    //       <span>Em 01/01/2001</span>
    //       <p>Comentário de exemplo...</p>
    //     </div>
    //     {comments.length > 0 ?
    //       (comments.map((comment) => (
    //         <div key={comment.id}>
    //           <h3>{comment.author}</h3>
    //           <span>Em {comment.createdAt.toLocaleString()}</span>
    //           <p>{comment.content}</p>
    //         </div>
    //       ))
    //       ) : (
    //         <p>Seja o primeiro a comentar!</p>
    //     )}
    //   </section>
    // </div>
  )
}