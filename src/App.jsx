import Header from "./components/header/header"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nosotros from "./components/nosotros/nosotros"
import Contacto from "./components/Contacto/Contacto"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./components/Context/CartContext"
import Cart from "./components/Cart/Cart"



function App() {



  return (

    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>



  )
}

export default App
