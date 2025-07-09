import './App.css';
import Navbar from './components/Navbar';
import Silder from './components/Silder';
import ProductList from './components/ProductList';

function App() {
 
  return (
    <div className='App'> 
      <Navbar />
      <Silder />
      <ProductList />
  </div> 
    
  );
}

export default App;
