import React , { useReducer }from "react"
import ComponentA from "./ComponentA"
import ComponentD from "./ComponentD"
import ComponentF from "./ComponentF"

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment' : 
            return state + 1
        case 'decrement' : 
            return state - 1
        case 'reset' : 
            return initialState
        default: 
            return state        
    }
}

const GlobalContext = () => {
    const[count, dispatch] = useReducer(reducer, initialState)
    return(
        <CountContext.Provider value={{ countState: count, countDispatch : dispatch  }}>
        <div>
            {count}
            <ComponentA></ComponentA>
            <ComponentD></ComponentD>
            <ComponentF></ComponentF>
        </div>
        </CountContext.Provider>
    )
}

export default GlobalContext