import { userDetail } from '../../services/UsersService'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'


const UserDetail  = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])
    
    return(
        <div>Hi! I'm a user detail view</div>
    )
}

export default UserDetail