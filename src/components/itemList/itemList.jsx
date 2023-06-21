import { Link } from "react-router-dom"
import ItemCard from "../ItemCard/ItemCard"
import "./ItemList.css"

const ItemList = ({ Items }) => {

    return (
        <div>
            <div className="productos__nav">
                <h4>Productos: </h4>
                <Link className="productos__link" to="/productos/remeras">Remeras</Link>
                <Link className="productos__link" to="/productos/vestidos">Vestidos</Link>
                <Link className="productos__link" to="/productos/blusas">Blusas</Link>
                <Link className="productos__link" to="/productos/sweaters">Sweaters</Link>
            </div>
            <hr />

            <div className="cont__main">
                {
                    Items.map((prod) => <ItemCard key={prod.id} item={prod} />)
                }
            </div>
        </div>
    )
}

export default ItemList