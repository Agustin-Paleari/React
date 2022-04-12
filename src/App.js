import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from"./components/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer.jsx'; 
import ItemDetailContainer from './components/ItemDetailContainer.jsx';



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
