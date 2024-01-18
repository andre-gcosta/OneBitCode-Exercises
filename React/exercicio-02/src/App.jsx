import Button from "./components/Button";
import Card from "./components/Card";
import swPosterImg from "./assets/sw-poster.jpg"
import esbPosterImg from "./assets/esb-poster.jpg"
import rotjPosterImg from "./assets/rotj-poster.jpg"

export default function App () {
  return (
    <div className="app">
      <Card title="Pôster: Star Wars (1987)" posterImage={swPosterImg}/>
      <Card title="Pôster: Empire Strikes Back (1980)" posterImage={esbPosterImg}/>
      <Card title="Pôster: Return of the Jedi (1993)" posterImage={rotjPosterImg}/>
      <Button />
    </div>

  )
}