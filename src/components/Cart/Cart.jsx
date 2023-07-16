import { useContext } from "react"
import "./Cart.css"
import { CartContext } from "../Context/CartContext"
import { VscTrash } from "react-icons/vsc"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarProducto } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="cont__cart">
                <h3>TU CARRITO ESTA VACIO</h3>
                <hr />
                <Link className="inf__prod__btn" to="/">Volver a la tienda</Link>
            </div>
        )
    }

    return (
        <div className="cont__cart">
            <h4>Compra:</h4>
            <hr />
            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h3>{prod.nombre}</h3>
                        <img src={prod.img} alt={prod.nombre} />
                        <p>Precio: ${prod.precio}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <button onClick={() => eliminarProducto(prod.id)} className="inf__prod__btn"><VscTrash /></button>
                        <hr />
                    </div>
                ))
            }
            <div>
                <h5>TOTAL: ${totalCompra()}</h5>
                <hr />
                <button onClick={vaciarCarrito} className="inf__prod__btn">VACIAR CARRITO</button>
            </div>

        </div>
    )
}

export default Cart