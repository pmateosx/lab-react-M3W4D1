import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    return ( 
        <div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/posts">Post</Link>
                <Link to="/users">Ussers</Link>
            </ul>
        </div>
    )
}

export default Navbar