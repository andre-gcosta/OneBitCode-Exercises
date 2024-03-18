import { useState } from "react"
import { PropTypes } from "prop-types"

InputWithState.propTypes = {//todas as props do componente
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func
}

export default function InputWithState(props) { //passa props com o state do componente pai (solução simples)
    // const [passwordSize, setPasswordSize] = useState(12)
    return (
        <input
            type="number"
            id="passwordSize"
            min="1"
            value={props.passwordSize} /*fixo*/
            // onChange={setPasswordSize} /*renderiza varias vezes entrando em loop*/
            onChange={(ev) => props.setPasswordSize(ev.target.value)} /*captura o evento e renderiza o value do evento atraves da função*/
        ></input>
        )
}