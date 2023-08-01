import "./header.css"
import CartWidget from "../CartWidget/cartwidget"
import NavBar from "../NavBar/navbar"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { FaUserAlt } from "react-icons/fa"


const Header = () => {

    const { user, logout } = useContext(AuthContext)
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">TIENDA</h1>
                <NavBar /> 
                <div className="header__contain">
                    <p className="bienvenida">{user.email}</p>
                    <button title="Sign-Out" className="user__icon" onClick={logout}><FaUserAlt /></button>
                </div>
                <CartWidget />
            </div>

        </header>
    )
}

export default Header

FaUserAlt