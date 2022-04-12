import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from"./components/NavBar.js"
import ItemListContainer from './components/ItemListContainer.js'; 
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar/> 
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
