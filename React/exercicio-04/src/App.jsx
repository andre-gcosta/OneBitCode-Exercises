import { useState } from "react"
import GeneratePassword from "./GenPassword"
import Input from "./components/input"

function App() {
  const [password, setPassword] = useState('')
  const [copyText, setCopyText] = useState('Copiar')
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8
  const handleGenerator = () => {
    setPassword(GeneratePassword(passwordSize))
    setCopyText('Copiar')

  }
  function CopyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText('Copiado!')
  }

  return (
    <div className = 'App'>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar tamanho</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>
      {showInput && (
        <div>
          <label htmlFor="passwordSize">Tamanho: </label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
        </div>
      )}
      <button onClick={handleGenerator}>Gerar senha de {passwordSize} caracteres! </button>
      <button onClick={CopyToClipboard}>{copyText}</button>
      <div>Senha: {password}</div>
    </div>
  )
}

export default App
