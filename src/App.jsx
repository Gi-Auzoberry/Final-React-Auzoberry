import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"
import ItemCount from "./componentes/ItemCount/ItemCount"
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "Bienvenidos a la tienda online de The Petkery!" />

      <ItemCount/>
    </div>
  )
}

export default App