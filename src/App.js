import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Nav from './components/Navbar/Nav';
import Service from './components/Service/Service';

function App() {
  return (
      <Nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Nav>
  );
}

export default App;
