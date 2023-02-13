import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import Admin from './components/Admin/Admin';
import ChangePassword from './components/ChangePassword/ChangePassword';
import CheckEmail from './components/CheckEmail/CheckEmail';
// import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Nav from './components/Navbar/Nav';
import Register from './components/Register/Register';
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
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/checkEmail' element={<CheckEmail/>}></Route>
          <Route path='/changePass/:email' element={<ChangePassword/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
        </Routes>
        {/* <Footer/> */}
      </Nav>
  );
}

export default App;
