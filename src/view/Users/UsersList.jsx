import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '../../services/UsersService'
import './UserList.scss'


const UserList = () => {
    const [users, setUsersList] = useState([])

    useEffect(() => {
        getUsers()
         .then(users => {
             setUsersList(users)
             console.log(users)
            })
    },[])

    return (
        <div className='UsersList'>
            {users.map(user => {
                return(
                    <Link to={`/users/${user.id}`} key={user.id} className='user-card'>
                        <div className='user-picture'></div>
                        <div className='body-text'>
                            <p >{user.username}</p>
                            <small >{user.email}</small>
                        </div>
                    </Link>
                ) 
            })}
        </div>
    )
}

export default UserList