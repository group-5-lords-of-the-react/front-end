import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Restaurants from './components/Restaurants';
import Header from './components/Header';
import FRestaurants from './components/FRestaurants';


function App() {
  return (
    <>
 
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Restaurants' element={<Restaurants/>}></Route>
      <Route path="/FRestaurants" element={<FRestaurants/>}></Route>
   
    </Routes>
    </>
  )
}

export default App;