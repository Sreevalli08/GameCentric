import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Subscribe from './pages/Subscribe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Login />}/>
        <Route path = '/games' element={<Navbar />}/>
        <Route path = '/subscribe' element={<Subscribe />}/>
        <Route path = '/login' element={<Login/>}/>
       
      </Routes>

     </BrowserRouter>
      
  );
}

export default App;
