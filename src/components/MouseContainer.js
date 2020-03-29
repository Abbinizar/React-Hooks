import React ,{useState} from "react"
import Mouse from "./HooksMouse"

const MouseContainer = () => {

    const [display, setDisplay] = useState(true)
    return(
        <div>
            <button onClick={() => setDisplay(!display)}>Toogle display</button>
            {display && <Mouse></Mouse>}
        </div>
    )
}

export default MouseContainer