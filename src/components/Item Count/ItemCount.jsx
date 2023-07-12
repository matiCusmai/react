
import "./ItemCount.css"


const ItemCount = ({ max, cantidad, setCantidad, handleAgregar }) => {


    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div className="cont__cont">
            <h3>Cantidad</h3>
            <div>
                <button onClick={handleRestar} className="btn__cont">-</button>
                <span className="cont">{cantidad}</span>
                <button onClick={handleSumar} className="btn__cont">+</button>
            </div>
            <button onClick={handleAgregar} className="inf__prod__btn">AGREGAR AL CARRITO</button>

        </div>
    )
}

export default ItemCount