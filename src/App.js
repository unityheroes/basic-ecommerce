import './App.css';
import Navbar from './components/Navbar';
import Silder from './components/Silder';
import ProductList from './components/ProductList';
import { Routes ,Route,Link } from 'react-router-dom';
import About from './components/About';

function App() {
 
  return (
    <div className='App'> 
      <Navbar />
    <Routes>
      <Route path="/" element={<>
        <Silder />
        <ProductList />
      </>} />
   <Route path='about' element={<About/>} />
    </Routes>
  </div> 
    
  );
}

export default App;
