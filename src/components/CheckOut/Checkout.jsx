
import { useState } from "react"
import "./checkout.css"
import { useCartContext } from "../Context/CartContext"
import { Navigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";


const Checkout = () => {

    const { cart, totalCompra, vaciarCarrito } = useCartContext()
    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState(
        {
            nombre: '',
            direccion: '',
            email: ''
        }
    )

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length === 0) {
            alert("Debe ingresar un Nombre")
            return
        }
        if (values.direccion.length === 0) {
            alert("Debe ingresar una Dirección")
            return
        }
        if (values.email.length === 0) {
            alert("Debe ingresar un Email")
            return
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra(),
            fecha: new Date()
        }

        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
            .catch(err => console.log(err))
    }

    if (orderId) {
        return (
            <div className="cont__nosotros">
                <h4>Confirmación de compra</h4>
                <hr />
                <div className="cont__confirmation">
                    <span className="confirmation" >SU COMPRA SE REALIZÓ CON ÉXITO!</span>
                    <p>Tu número de compra es: <strong>{orderId}</strong></p>
                    <Link to="/" className="seguir__btn">Volver a la tienda</Link>
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="cont__nosotros">
            <h4>Checkout</h4>
            <hr />

            <form onSubmit={handleSubmit} className="form_cont">
                <input onChange={handleInputChange} value={values.nombre} type="text" className="form-inp" placeholder="Nombre" name="nombre" />
                <input onChange={handleInputChange} value={values.direccion} type="text" className="form-inp" placeholder="Dirección" name="direccion" />
                <input onChange={handleInputChange} value={values.email} type="email" className="form-inp" placeholder="Email" name="email" />
                <button className="btn-checkout" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout