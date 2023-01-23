import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Nav from './components/Navbar/Nav';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="App">
      <Nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Nav>
    </div>
  );
}

export default App;
