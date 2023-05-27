import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Restaurants from './components/Restaurants/Restaurants';
import Header from './components/Header/Header';
import FRestaurants from './components/FRestaurants/FRestaurants';
import TheRestaurant from './components/TheRestaurant/TheRestaurant';
import Booking from './components/Booking/Booking';


function App() {
  return (
    <>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Restaurants' element={<Restaurants/>}></Route>
      <Route path="/FRestaurants" element={<FRestaurants/>}></Route>
      <Route path="/TheRestaurant/:id" element={<TheRestaurant/>}></Route>
      <Route path="/Booking" element={<Booking/>}></Route>
    </Routes>
    </>
  )

}

export default App;