import { Link } from 'react-router-dom'
import { useTheme } from "../../contexts/ThemeContext"
import './Navbar.scss'

const Navbar = () => {
    const { theme, toggleTheme } = useTheme()

    return ( 
        <div className={`Navbar ${theme}`}>
            <ul className='links-container'>
                <Link className={`${theme}`} to="/">Home</Link>
                <Link className={`${theme}`} to="/posts">Post</Link>
                <Link className={`${theme}`} to="/users">Ussers</Link>
                <a onClick={toggleTheme} alt={theme} >Theme: {theme}</a>
            </ul>
        </div>
    )
}

export default Navbar