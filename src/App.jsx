import Header from "./components/header/header"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {

  return (
    <div>
      <Header />
      <ItemListContainer mensaje={"Lista de productos"} />
    </div>
  )
}

export default App
