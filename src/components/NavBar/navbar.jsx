import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="header__nav">
            <Link className="header__link" to="/">Productos</Link>
            <Link className="header__link" to="/nosotros">Nosotros</Link>
            <Link className="header__link" to="/contacto">Contacto</Link>
        </nav>
    )
}

export default NavBar




