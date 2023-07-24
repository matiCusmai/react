import { Link } from "react-router-dom"
import "./ItemCard.css"


const ItemCard = ({ id, nombre, precio, img, stock }) => {

    return (
        <div className="container-items">
            <div className="item">
                <figure>
                    <img src={img} alt={nombre} />
                </figure>
                <div className="info-product">
                <span className="price">${precio}</span>
                    <h2>{nombre}</h2>

                    {
                        stock <= 5 &&
                        <span style={{fontFamily:"arial", fontWeight: 700, color: "blue", fontSize: "10px", }}>QUEDAN SOLO {stock} UNIDADES !</span>
                    }
                    <Link className="inf__prod__btn" to={`/detail/${id}`}>VER PRODUCTO</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemCard