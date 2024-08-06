
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartContextProvider } from './storage/cartContext';

function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/item/:itemid" element={<ItemDetailContainer/>}/>
              <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
            </Routes>
          
        
          
        




      </BrowserRouter>
    </CartContextProvider>
</>
  );
}

export default App;
