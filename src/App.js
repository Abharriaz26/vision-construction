import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Services from './Component/Services';
// import SliderPage from './Component/SliderPage';
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
   
    <div className='app'>
      <Navbar/>
      {/* <SliderPage/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='services' element={<Services/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
