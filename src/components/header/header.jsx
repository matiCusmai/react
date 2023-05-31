import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">TIENDA</h1>
                <nav className="header__nav">
                    <a className="header__link" href="#">Nosotros</a>
                    <a className="header__link" href="#">Productos</a>
                    <a className="header__link" href="#">Contacto</a>
                </nav>
                <div className="cont__bag">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-cart">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <div className="count-products">
					<span className="contador-productos">0</span>
				</div>
                </div>
            </div>
        </header>
    )
}

export default Header