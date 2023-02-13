
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home"
import DogsPage from "./components/dogs/Dogs"
import Cart from './components/carts/Cart';
import NavBar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from "axios"
import { CartContext } from './context/CartContext';
function App() {

  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  //tinh total
  const [total, setTotal] = useState(0);


  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/dogs");
      return res;
    }
    getData().then((res) => {
      console.log(res.data);
      setAllDogs(res.data);
      getData().catch((err) => console.log(err));
    });
  }, [])

  return (
    <CartContext.Provider value={{myCart, addToCart, total, setTotal}}>
      <Router>
        <NavBar/>
        <div className='page-container'>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/dogs' element={<DogsPage allDogs={allDogs}/>}/>
                <Route path='/cart' element={<Cart/>}/>
              </Routes>
          </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
