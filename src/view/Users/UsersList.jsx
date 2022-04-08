import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '../../services/UsersService'
import './UserList.scss'
import { useTheme } from '../../contexts/ThemeContext'


const UserList = () => {
    const [users, setUsersList] = useState([])
    const { theme } = useTheme()

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
                    <Link to={`/users/${user.id}`} key={user.id} className={`user-card ${theme}`}>
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