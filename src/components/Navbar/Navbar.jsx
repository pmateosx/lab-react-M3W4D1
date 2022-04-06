import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    return ( 
        <div className='Navbar'>
            <ul className='links-container'>
                <Link to="/">Home</Link>
                <Link to="/posts">Post</Link>
                <Link to="/users">Ussers</Link>
            </ul>
        </div>
    )
}

export default Navbar