import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Login/>}/>
        <Route path = '/games' element={<Navbar/>}/>
       
      </Routes>

     </BrowserRouter>
      
  );
}

export default App;
