import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from"./components/NavBar.js"
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
