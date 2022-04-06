import { getUserId } from '../../services/UsersService'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import './UserDetail.scss'


const UserDetail  = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        getUserId(id)
            .then((user) => {
                setUser(user)
            })
    }, [id])

    const {name, email, username, phone, website} = user;
    
    return (
        <div className='User-Detail'>
            <div className='user-picture'></div>
            <div className='body-text'>
                <h2>{name} |  <em>@{username}</em></h2>
                <small>{email}</small>
                <div>
                    <small>{phone} | { website}</small>
                </div>

            </div>
        </div>
    )
}

export default UserDetail