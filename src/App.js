import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import Admin from './components/Admin/Admin';
import GetRequest from './components/Admin/GetRequest/GetRequest';
import ProductBuyRequest from './components/Admin/ProductBuyRequest/ProductBuyRequest';
// import AddProduct from './components/Admin/Products/AddProduct';
import Products from './components/Admin/Products/Products';
import ComputerService from './components/Admin/Service/ComputerServiceRequest/ComputerService';
import PrinterService from './components/Admin/Service/PrinterServiceRequest/PrinterService';
import ServiceAdmin from './components/Admin/Service/ServiceAdmin';
import SurveillanceService from './components/Admin/Service/SurveillanceServiceRequest/SurveillanceService';
import UpsService from './components/Admin/Service/UpsServiceRequest/UpsService';
import Users from './components/Admin/Users/Users';
import CompDetails from './components/AllProducts/Computer/CompDetails';
import Computer from './components/AllProducts/Computer/Computer';
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
import Ups from './components/AllProducts/Ups/Ups';
import UpsDetails from './components/AllProducts/Ups/UpsDetails';
import Printer from './components/AllProducts/Printer/Printer';
import PrinterDetails from './components/AllProducts/Printer/PrinterDetails';
import Surveillance from './components/AllProducts/Surveillance/Surveillance';
import SurveillanceDetails from './components/AllProducts/Surveillance/SurveillanceDetails';
import BuyPage from './components/BuyPage/BuyPage';

function App() {
  return (
      <Nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/service/:serviceId' element={<SingelService/>}/>
          <Route path='/ups' element={<Ups/>} />
          <Route path='/ups/:upsId' element={<UpsDetails/>} />
          <Route path='/computer' element={<Computer/>} />
          <Route path='/computer/:compId' element={<CompDetails/>} />
          <Route path='/printer' element={<Printer/>} />
          <Route path='/printer/:printId' element={<PrinterDetails/>} />
          <Route path='/surveillance' element={<Surveillance/>} />
          <Route path='/surveillance/:surveId' element={<SurveillanceDetails/>} />
          <Route path='/buy/:buyId' element={<BuyPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/checkEmail' element={<CheckEmail/>}/>
          <Route path='/changePass/:email' element={<ChangePassword/>}/>

          {/* Admin routes starts here */}
          <Route path='/admin' element={<RequireAdmin>
            <Admin/>
          </RequireAdmin>}>
            <Route path='getRequest' element={<GetRequest/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='buyRequest' element={<ProductBuyRequest/>}/>
            <Route path='service' element={<ServiceAdmin/>}/>
            <Route path='computerServiceReq' element={<ComputerService/>}/>
            <Route path='upsServiceReq' element={<UpsService/>}/>
            <Route path='printerServiceReq' element={<PrinterService/>}/>
            <Route path='surveillanceServiceReq' element={<SurveillanceService/>}/>
            <Route path='users' element={<Users/>}/>
          </Route>
          {/* Admin routes end here */}


        </Routes>
        {/* <Footer/> */}
      </Nav>
  );
}

export default App;
