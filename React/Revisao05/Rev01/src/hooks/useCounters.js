import { useState } from "react"

export function useCounter() {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    return {count, increment}
}

function getInitialValue(param) {
    console.log('obtendo valor inicial')
    return 1 + 1
}

export function useCounter2() {
    // const [count, setCount] = useState(getInitialValue())//fica repetindo
    let param = 0
    const [count, setCount] = useState(() => getInitialValue(param))//executa só a primeira vez: joga a função como retorno do useState, e dessa forma, é possível definir parâmetros também
    const increment = () => {
        // setCount(count + 1)//o react executa de forma assincrona, e não le a próxima função
        // setCount(count + 1)
        setCount((count) => count + 1)//forma correta: (se depende do valor anterior)
        setCount((count) => count + 1)//(utiliza o valor anterior do estado - é uma função que recebe um valor, e devolve um novo valor)
    }

    return {count, increment}
}
