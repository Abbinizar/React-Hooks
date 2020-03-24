import React, { useState } from "react"

const CounterFour = () => {
    const [count, setCount] = useState([]);

    const addItem = () => {
        setCount([...count, {
            id: count.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>add number</button>
            <ul>
                {count.map(item => (
                    <li key={item.key}>{item.value}</li>
                ))}
            </ul>
        </div>
    );
}

export default CounterFour