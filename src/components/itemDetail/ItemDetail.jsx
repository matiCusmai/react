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
    console.log(isInCart(id))
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
                    <button onClick={handleVolver} className="volver__btn">VOLVER</button>
                    <h2>{nombre}</h2>
                    <p>{descripcion}</p>
                    <span>Categoria: {category}</span>
                    <h4>Precio: ${precio}</h4>
                    <h3>Talle</h3>
                    <SelectTalle
                        setSelect={setTalle}
                        opciones={talles}
                    />

                    {
                        isInCart(id)
                            ? <Link className="inf__prod__btn" to="/cart">FINALIZAR COMPRA</Link>
                            : <ItemCount
                                max={stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                handleAgregar={handleAgregar}
                            />
                    }

                </div>

            </div>
            <hr />
        </div>
    )
}

export default ItemDetail