import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Cart from './screens/cart';
import Home from './screens/home';
import Payment from './screens/shippingInfo';
import { useEffect } from 'react';
import { getIP } from './apiService';


library.add(fas)

function App() {
  useEffect(() => {
    // TODO: Ideally, would have a geocoder to route to closest city to user's location
    // Unfortunately did not have time to implement this...

    getIP().then((response) => {
      console.log('resposesssssss', response);
      if (response.city !== 'reserved') {
        if (response.city === 'Los Angeles') {
          sessionStorage.setItem('location', 'LA');
        } else if (response.city === 'New York City') {
          sessionStorage.setItem('location', 'NYC');
        } else if (response.country === 'Mexico') {
          sessionStorage.setItem('location', 'Mex');
        } else if (response.country === 'Canada') {
          sessionStorage.setItem('location', 'Canada');
        } else {
          sessionStorage.setItem('location', 'LA');
        }
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
