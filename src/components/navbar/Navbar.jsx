import { Link } from 'react-router-dom'
import logo from '../../assets/logoRedVelt.jpg'
import './Navbar.css'

function Navbar() {
    return (
        <header className='menu'>
            <img src={logo} alt="Logo" className="logo"/>
            <nav className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/productos">Products</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contacto">Contact</Link></li>
            </nav>
        </header>
    )
}

export default Navbar
