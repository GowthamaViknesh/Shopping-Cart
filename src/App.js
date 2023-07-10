import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import CartPage from './Pages/Cart';
import Pro from './Pages/Pro';


const App = () =>{
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/Pro' element={<Pro />}/>
    <Route path='/Cart' element={<CartPage />}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App
