
import "./App.css"
import { CartProvider } from "./components/Context/CartContext"
import { AuthContextProvider } from "./components/Context/AuthContext"
import AppRouter from "./router/AppRouter"



function App() {
  return (
    <AuthContextProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthContextProvider>
  )
}

export default App
