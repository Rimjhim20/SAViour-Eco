import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Home';
import Navbar from './components/Nav/Navbar'
import Prepare from './prepare'
import Footer from "./Footer";
import Quiz from './Quiz';
import Safety from './safety';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/prepare" element={<Prepare/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/safety" element={<Safety/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
