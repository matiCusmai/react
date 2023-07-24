import "./ItemListContainer.css"
import ItemList from "../itemList/itemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
console.log(productos)
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")

        getDocs(productosRef)

            .then((resp) => {
                const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setProductos(items)
            })
            .catch(e => console.log(e))
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