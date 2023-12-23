import { BrowserRouter,Routes,Route} from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
// import ItemCount from "./componentes/ItemCount/ItemCount";
import './App.css';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element= {<ItemListContainer greeting = "Bienvenidos a la tienda online de The Petkery!" />} />
          <Route path="/categoria/:idCategoria" element= {<ItemListContainer greeting = "Bienvenidos a la tienda online de The Petkery!" />} />
          <Route path="/item/:idItem" element= {<ItemDetailContainer/>} />
          <Route path="*" element={<h2>Página momentaneamente no disponible 🥲</h2>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

