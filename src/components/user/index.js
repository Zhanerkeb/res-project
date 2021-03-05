import React from 'react'
import {Card} from 'antd'
import {Link} from 'react-router-dom'

function User({title, desc, id}) {
    return(
        <Link to={`/users/${id}`}> 
            <Card title={title} extra={<a href="#">More</a>} style={{ width: 300 }}>
               {desc}
            </Card>
        </Link>
    )
}

export default User;