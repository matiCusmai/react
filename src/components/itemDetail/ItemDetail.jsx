import { useContext, useState } from "react"
import ItemCount from "../Item Count/ItemCount"
import { Link } from "react-router-dom"
import "./ItemDetail.css"
import SelectTalle from "../SelectTalle/SelectTalle"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../Context/CartContext"


const talles = [
    {
        value: 'S',
        label: "Small"
    },
    {
        value: 'M',
        label: "Medium"
    },
    {
        value: 'L',
        label: "Large"
    }
]

const ItemDetail = ({ id, nombre, descripcion, precio, img, category, stock }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()
    const [talle, setTalle] = useState(null)

    const handleAgregar = () => {
        const item = {
            id, nombre, descripcion, precio, img, category, stock, cantidad, talle
        }
        agregarAlCarrito(item)
    }

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div >
            <div className="detail__container" >

                <img src={img} alt={nombre} />

                <div className="cont__data__detail">
                    <h2>{nombre}</h2>
                    <p>{descripcion}</p>
                    <span>Categoria: {category}</span>
                    <h4>Precio: ${precio}</h4>

                    {
                        isInCart(id)
                            ? <div className="flex__btn">
                                <button onClick={handleVolver} className="volver__btn">VOLVER</button>
                                <Link className="inf__prod__btn" to="/cart">CONTINUAR CON LA COMPRA</Link>
                            </div>
                            : <div>
                                <h3>Talle</h3>
                                <SelectTalle
                                    setSelect={setTalle}
                                    opciones={talles}
                                />
                                <ItemCount
                                    max={stock}
                                    cantidad={cantidad}
                                    setCantidad={setCantidad}
                                    handleAgregar={handleAgregar}
                                />
                    <button onClick={handleVolver} className="volver__btn">VOLVER</button>

                            </div>
                    }
                </div>

            </div>
            <hr />
        </div>
    )
}

export default ItemDetail