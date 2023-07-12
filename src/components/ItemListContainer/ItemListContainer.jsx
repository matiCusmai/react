import "./ItemListContainer.css"
import ItemList from "../itemList/itemList"
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/funciones"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((item) => item.category === categoryId) )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))

    }, [categoryId])

    return (
        <div className="list__container">
            {
            loading
            ? <h4>Cargando...</h4>
            : <ItemList Items={productos} />
            }
        </div>
    )
}

export default ItemListContainer