

const ItemCard = ({item}) => {
    return (
        <div className="container-items">
            <div className="item">
                <figure>
                    <img src={item.img} alt={item.nombre} />
                </figure>
                <div className="info-product">
                    <h2>{item.nombre}</h2>
                    <p>{item.descripcion}</p>
                    <span className="price">Precio: ${item.precio}</span>
                    <button>VER MAS</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard