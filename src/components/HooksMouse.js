import React, {useEffect, useState} from "react"

const Mouse = () => {
    const [x , setX] = useState(0)
    const [y, setY] = useState(0)

    const logMouse = e => {
        console.log('mouse event')
        setX(e.clientX) 
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('mouse move')
        window.addEventListener('mousemove', logMouse)

        return() => {
            console.log('component unmount')
            window.removeEventListener('mousemov', logMouse)
        }
    },[])

    return(
        <div>
            <p> Hooks X {x} Y {y}</p>
        </div>
    )
}

export default Mouse