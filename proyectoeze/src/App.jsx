import './App.css'
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a mi e-commerce"}/>
    </>
  )
}

export default App;
