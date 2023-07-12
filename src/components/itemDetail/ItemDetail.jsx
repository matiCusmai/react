import { useState } from "react"
import ItemCount from "../Item Count/ItemCount"

import "./ItemDetail.css"
import SelectTalle from "../SelectTalle/SelectTalle"


const ItemDetail = ({ id, nombre, descripcion, precio, img, category, stock }) => {
    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState("M")

    const handleAgregar = () => {
        const item = {
            id,
            nombre,
            descripcion,
            precio,
            img,
            category,
            stock,
            cantidad,
            talle
        }
        console.log(item)
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
                    <h3>Talle</h3>
                    <SelectTalle setTalle={setTalle} />
                    <ItemCount
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        handleAgregar={handleAgregar}
                    />
                </div>

            </div>
            <hr />
        </div>
    )
}

export default ItemDetail