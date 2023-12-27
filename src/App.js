import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
