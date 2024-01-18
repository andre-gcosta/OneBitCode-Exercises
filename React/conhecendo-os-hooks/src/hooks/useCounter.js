import { useState } from "react";

export default function useCounter() {
    function getInitialValue() {
        return 1 + 1
    }

    const [count, setCount] = useState(() => getInitialValue())//passa a função inteira

    const increment = () => {
        setCount((currentState) => currentState + 1)
        setCount((currentState) => currentState + 1)
        // setCount(count + 1) bug
        // setCount(count + 1) bug
    }

    return {count, increment}
}