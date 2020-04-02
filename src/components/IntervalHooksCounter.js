import React, {useEffect, useState} from "react"

const IntervalCounter = () => {
    const [counter, setCounter] = useState(0)

    const tick = () => {
        setCounter(prevCount => prevCount + 1)
    }

    useEffect(()=>{
        const interval = setInterval(tick, 1000)
        return() => {clearInterval(interval)}
    },[])
    return(
        <div>
            {counter}
        </div>
    )
}
export default IntervalCounter