import "./ItemDetail.css"

const ItemDetail = (id, nombre, descripcion, precio, img, category) => {

    return (
        <div className="detail__container">
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>
            <h4>Precio: ${precio}</h4>
            <br />
            <small>Categoria: {category}</small>

        </div>
    )
}

export default ItemDetail