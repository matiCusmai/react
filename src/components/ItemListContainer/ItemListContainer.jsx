import "./ItemListContainer.css"

const ItemListContainer = ({mensaje}) => {

    return (
        <div className="list__container">
            <h2>Productos</h2>
            <hr />

            <p>{mensaje}</p>

        </div>
    )
}

export default ItemListContainer