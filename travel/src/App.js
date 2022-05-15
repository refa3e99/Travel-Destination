import './App.css';
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/tour/:id' element={<TourDetails/>} />
      </Routes>
    </>
  );
} 

export default App;
