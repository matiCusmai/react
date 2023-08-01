
import { useContext, useState } from "react"
import "./LoginScreen.css"
import { AuthContext } from "../Context/AuthContext"
import { Link } from "react-router-dom"

const RegisterScreen = () => {

    const { register } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)
    }


    return (
        <div className="auth-container">
            <div className="auth-modal">
                <h2>Registrate</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input value={values.email} onChange={handleInputChange} className="form-inp" type="email" placeholder="email" name="email" />
                    <input value={values.password} onChange={handleInputChange} className="form-inp" type="password" placeholder="contraseña" name="password" />
                    <button className="inf__prod__btn" type="submit">Registrarme</button>
                    <Link className="link-log" to="/login">Ya estoy registrado</Link>
                </form>
            </div>

        </div>
    )
}

export default RegisterScreen