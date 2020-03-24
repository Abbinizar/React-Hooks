import React, {useState} from "react"

const CounterTwo = () => {
    const initialState = 0
    const [count, setCount] = useState(initialState);

    const incrementFive = () => {
        for( let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            {count}
            <button onClick={()=> setCount(initialState)}>reset</button>
            <button onClick={()=> setCount(prevCount => prevCount - 1)}>decrement</button>
            <button onClick={()=> setCount(prevCount => prevCount + 1)}>increment</button>
            <button onClick={incrementFive}>increment Five</button>
        </div>
    );
}

export default CounterTwo