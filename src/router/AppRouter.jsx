import Header from "../components/header/header"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Nosotros from "../components/nosotros/nosotros"
import Contacto from "../components/Contacto/Contacto"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import Cart from "../components/Cart/Cart"
import LoginScreen from "../components/Auth/LoginScreen"
import { useContext } from "react"
import { AuthContext } from "../components/Context/AuthContext"
import RegisterScreen from "../components/Auth/RegisterScreen"

const AppRouter = () => {
  const { user } = useContext(AuthContext)

    return (
        <BrowserRouter>
          {
            user.logged
              ?
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<ItemListContainer />} />
                  <Route path="/productos/:categoryId" element={<ItemListContainer />} />
                  <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
                  <Route path="/nosotros" element={<Nosotros />} />
                  <Route path="/contacto" element={<Contacto />} />
                  <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Navigate to="/" />}/>
                </Routes>
              </>
              : <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="*" element={<Navigate to="/login" />}/>
              </Routes>

          }

        </BrowserRouter>
    )
}

export default AppRouter