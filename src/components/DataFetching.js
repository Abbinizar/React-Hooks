import React, {useEffect, useState} from "react"
import axios from "axios"

const DataFetching = () => {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [buttons, setButton] = useState()

    const handleButton = () => {
        setButton(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttons}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [buttons, id])
    return(
        <div>
            <input value={id} onChange={e=> setId(e.target.value)}></input>
            <button onClick={handleButton}>fetch</button>
            <p>{post.title}</p>
        </div>
    )
}

export default DataFetching;