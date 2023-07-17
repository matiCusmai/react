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
            <h4>Detalle de la compra:</h4>
            <hr />
            {
                cart.map((prod) => (
                    <div className="cont__carrito" key={prod.id}>
                        <img src={prod.img} alt={prod.nombre} />

                       
                        <p className="item__carrito">{prod.nombre}</p>
                        <p className="item__carrito">Precio: ${prod.precio}</p>
                        <p className="item__carrito">Cantidad: {prod.cantidad}</p>
                        
                        <button onClick={() => eliminarProducto(prod.id)} ><VscTrash /></button>
                    </div>
                ))
            }
            <div className="precio__total">
                <h5>TOTAL: ${totalCompra()}</h5>
                <hr />
                <button onClick={vaciarCarrito} className="inf__prod__btn">VACIAR CARRITO</button>
            </div>

        </div>
    )
}

export default Cart