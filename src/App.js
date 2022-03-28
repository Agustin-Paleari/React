import logo from './logo.svg';
import './App.css';
import NavBar from"./components/NavBar.js"
import CartWidget from "./components/CartWidget.js"
import ItemListContainer from './components/ItemListContainer.js'; 

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings="Hola Julian!"/>
    </div>
  );
}

export default App;
