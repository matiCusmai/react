import Header from "./components/header/header"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nosotros from "./components/nosotros/nosotros"
import Contacto from "./components/Contacto/Contacto"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        {/* <Route path="*" element={ <Navegate to={"/"}/>}/> --CUANDO LO APLICO ROMPE LA WEB*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
