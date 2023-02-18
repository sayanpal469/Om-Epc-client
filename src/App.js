import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import Admin from './components/Admin/Admin';
import GetRequest from './components/Admin/GetRequest/GetRequest';
import ProductBuyRequest from './components/Admin/ProductBuyRequest/ProductBuyRequest';
import AddProduct from './components/Admin/Products/AddProduct';
import Products from './components/Admin/Products/Products';
import ServiceAdmin from './components/Admin/Service/ServiceAdmin';
import ServiceRequest from './components/Admin/Service/ServiceRequest';
import Users from './components/Admin/Users/Users';
import ChangePassword from './components/ChangePassword/ChangePassword';
import CheckEmail from './components/CheckEmail/CheckEmail';
// import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Nav from './components/Navbar/Nav';
import Register from './components/Register/Register';
import RequireAdmin from './components/RequireAdmin/RequireAdmin';
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
          <Route path='/admin' element={<RequireAdmin>
            <Admin/>
          </RequireAdmin>}>

            <Route path='getRequest' element={<GetRequest/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='buyRequest' element={<ProductBuyRequest/>}/>
            <Route path='service' element={<ServiceAdmin/>}/>
            <Route path='serviceReq' element={<ServiceRequest/>}/>
            <Route path='users' element={<Users/>}/>

          </Route>
        </Routes>
        {/* <Footer/> */}
      </Nav>
  );
}

export default App;
