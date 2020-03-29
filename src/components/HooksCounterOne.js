import React, { useState, useEffect } from "react"

const CounterOne = () => {
    const [ count, setCount ] = useState(0)
    const [ name, setName ] = useState('')

    useEffect(() => {
        console.log('render')
        document.title = `you click ${count}`
    }, [count])

    return(
        <>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
        <button onClick={() => setCount(count+1)}>Click {count}</button>
        </>
    )
}

export default CounterOne