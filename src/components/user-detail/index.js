import axios from 'axios'
import React, {useEffect, useState} from 'react'

function UserDetail(props) {
    console.log(props.match.params.id)
    const [post, setPost] = useState({})
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`).then(res => setPost(res.data))
    }, )
    return(<div>{post.title}</div>)
}

export default UserDetail