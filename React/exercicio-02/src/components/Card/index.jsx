import Button from "../Button"
import styles from "./styles.module.css"

export default function Card(props) {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={props.posterImage} alt="" />
      <div>
        <h2>{props.title}</h2>
        <p>
          Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3.
          Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico
          pôster trará aventura, nostalgia e a magia de Star Wars para qualquere lugar que você
          decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!
        </p>
        <Button />
      </div>
    </div>
  )
}