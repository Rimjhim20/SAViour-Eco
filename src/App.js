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
import WildFireTips from "./WildFireTips";
import Tornado from "./Tornado";
import Winterstorms from "./Winterstorms";
import ImageClassification from "./services/ImageIdentifier/ImageClassification";
import Maps from "./services/Maps"
import Card from "./FoodDonation/Card";
import Donation from "./FoodDonation/Donation";
import Receive from "./FoodDonation/Receive";
import History from "./FoodDonation/History";
import MapMain from "./services/MapMain";
import Map from "./services/Maps";
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
          <Route path="/safety/flood" element={<Flood/>}/>
          <Route path = "/safety/wildfire" element = {<WildFireTips/>}/>
          <Route path = "/safety/tornado" element = {<Tornado/>}/>
          <Route path = "/safety/winter" element = {<Winterstorms/>}/>
          <Route path="/post" element={<Post/>}/>
          <Route path="/tweet" element={<Tweet/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/createpost" element={<CreatePost/>} />
          <Route path="/kit" element={<EmergencyCheck/>}/>
          <Route path="/image2" element={<ImageClassification/>}/>
          <Route path="/maps" element={<Map/>}/>

          <Route path="/food" element={<Card/>}/>
          <Route path="/donation" element={<Donation/>}/>
          <Route path="/receive" element={<Receive/>}/>
          <Route path="/history" element={<History/>}/>
          
        </Routes>
        <div id="myButton"></div>
    </div>
        <Footer/>
    </div>
  );
}

export default App;
