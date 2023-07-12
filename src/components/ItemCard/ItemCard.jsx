import { Link } from "react-router-dom"
import "./ItemCard.css"


const ItemCard = ({ id, nombre, descripcion, precio, img }) => {

    return (
        <div className="container-items">
            <div className="item">
                <figure>
                    <img src={img} alt={nombre} />
                </figure>
                <div className="info-product">
                    <h2>{nombre}</h2>
                    <p>{descripcion}</p>
                    <span className="price">Precio: ${precio}</span>
                    <Link className="inf__prod__btn" to={`/detail/${id}`}>VER MAS</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemCard