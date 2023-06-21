import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/funciones"
import { useParams } from "react-router-dom"
import ItemDetail from "../itemDetail/itemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(item)
    console.log(itemId)


    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId) ))
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))

    }, [itemId])

    return (
        <div className="list__container">
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemDetail {...item} />
            }
        </div>
    )
}

export default ItemDetailContainer