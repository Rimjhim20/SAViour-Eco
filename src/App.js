import { Routes, Route } from "react-router-dom"
import  { useEffect } from 'react';
import $ from 'jquery';
import './App.css';
import Home from './Home';
import Navbar from './components/Nav/Navbar'
import Prepare from './prepare'
import Footer from "./Footer";
import Quiz from './Quiz';
import Safety from './safety';
import HTips from "./HTips";
import Emergency from "./Emergency";
import {Login}  from "./components/login";
import {CreatePost}  from "./components/createpost";
import EmergencyCheck from './EmergencyCheck'
import Post from "./Post";
import Earth from "./Earth";
import Flood from "./Flood";
import BANNER from './assets/banner.png';
import Tweet from "./Tweet";
function App() {
  useEffect(() => {
    $('#myButton').floatingWhatsApp({
      phone: '9142532175',
      popupMessage: 'Hello, how can we help you?',
      message: "I'd like to ask disaster related query",
      showPopup: true,
      showOnIE: false,
      headerTitle: 'WhatsApp Chat',
      headerColor: 'green',
      backgroundColor: 'grey',
      buttonImage: '<img src="/whatsapp.svg" />'
    });
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <img src={BANNER} alt={BANNER} height={60} width={340} />
      <div>
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
          <Route path="/tweet" element={<Tweet/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/createpost" element={<CreatePost/>} />
          <Route path="/kit" element={<EmergencyCheck/>}/>
        </Routes>
        <div id="myButton"></div>
    </div>
        <Footer/>
    </div>
  );
}

export default App;
