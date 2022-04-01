import './App.css';
import  { BrowserRouter, Routes, Route } from 'react-router-dom'
// Importamos los componentes
import ShowProducts from './components/ShowProducts';
import CreateProduct from './components/CreateProducts';
import EditProduct from './components/EditProducts';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='' element= { <ShowProducts /> } />
          <Route path='/create' element= { <CreateProduct /> } />
          <Route path='edit/:id' element= { <EditProduct /> }/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
