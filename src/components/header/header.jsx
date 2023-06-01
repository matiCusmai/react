import "./header.css"
import CartWidget from "../CartWidget/cartwidget"
import NavBar from "../NavBar/navbar"

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">TIENDA</h1>
                <NavBar />
                <CartWidget />
            </div>
        </header>
    )
}

export default Header