
import { useContext, useState } from "react"
import "./LoginScreen.css"
import { AuthContext } from "../Context/AuthContext"
import { Link } from "react-router-dom"

const LoginScreen = () => {

    const { login } = useContext(AuthContext)

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
        login(values)
    }


    return (
        <div className="auth-container">
            <div className="auth-modal">
                <h2>Login</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input value={values.email} onChange={handleInputChange} className="form-inp" type="email" placeholder="email" name="email" />
                    <input value={values.password} onChange={handleInputChange} className="form-inp" type="password" placeholder="contraseña" name="password" />
                    <button className="inf__prod__btn" type="submit">Iniciar sesión</button>
                    <Link className="link-log" to="/register">Registrarme</Link>
                </form>
            </div>

        </div>
    )
}

export default LoginScreen