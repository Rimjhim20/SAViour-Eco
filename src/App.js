import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Home';
import Navbar from './components/Nav/Navbar'
import Prepare from './prepare'
import Footer from "./Footer";
import Quiz from './Quiz';
import Safety from './safety';
import HTips from "./HTips";
import Emergency from "./Emergency";
import Post from "./Post";
import Earth from "./Earth";
import Flood from "./Flood";
import BANNER from './assets/banner.png';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <img src={BANNER} alt={BANNER} height={60} width={340} />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/prepare" element={<Prepare/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/safety" element={<Safety/>} />
          <Route path="/tips" element={<HTips/>}/>
          <Route path="/emergency" element={<Emergency/>}/>
          <Route path="/earth" element={<Earth/>}/>
          <Route path="/flood" element={<Flood/>}/>
          <Route path="/post" element={<Post/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
