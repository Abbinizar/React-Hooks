import React, { useState } from "react"

const CounterThree = () => {
    const [name, setName] = useState({firsname:'', lastname:''})
    return(
        <div>
            <form>
                <input type="text" value={name.firsname} onChange={e => setName({ ...name, firsname: e.target.value})}></input>
                <input type="text" value={name.lastname} onChange={e => setName({ ...name, lastname: e.target.value})}></input>
            </form>
            <h2>firsname : {name.firsname}</h2>
            <h2>lastname : {name.lastname}</h2>
            <h5>{JSON.stringify(name)}</h5>
        </div>
    );
}

export default CounterThree