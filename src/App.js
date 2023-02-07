import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Nav from './components/Navbar/Nav';
import Service from './components/Service/Service';
import SingelService from './components/Service/SingelService';

function App() {
  return (
      <Nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/service/:serviceId' element={<SingelService/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
        <Footer/>
      </Nav>
  );
}

export default App;
