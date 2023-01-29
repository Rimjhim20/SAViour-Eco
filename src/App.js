import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Home';
import Navbar from './components/Nav/Navbar'
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
