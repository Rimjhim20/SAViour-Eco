import { Routes, Route } from "react-router-dom"
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import ProtectedRoute from "./components/Authentication/ProtectedRoute";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import  { useEffect } from 'react';
import $ from 'jquery';
import './App.css';
import Home from './Home';
import Map from './services/Maps'
import Card from './components/FoodDonation/Card'
import Donation from './components/FoodDonation/Donation'
import History from './components/FoodDonation/History'
import Receive from './components/FoodDonation/Receive'
import Navbar from './components/Nav/Navbar'
import Prepare from './Disasterpedia/prepare'
import Footer from "./Footer";
import Quiz from './Disasterpedia/Quiz';
import Safety from './Disasterpedia/safety';
import HTips from "./Disasterpedia/HTips";
import Emergency from "./Disasterpedia/Emergency";
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import {CreatePost}  from "./components/createpost";
import EmergencyCheck from './Disasterpedia/EmergencyCheck'
import Post from "./Disasterpedia/Post";
import Earth from "./Disasterpedia/Earth";
import Flood from "./Disasterpedia/Flood";
import BANNER from './assets/banner.png';
import Tweet from "./Disasterpedia/Tweet";
import Api from "./Api";
import ImageClassification from "./services/ImageClassification"
function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BGoaw3DUyen07fJyKgs8lR2w_jvb1wuFSFr52aSti9cUmcrlxv0wVpvEy2EqGqQyV7q5JGM7w5Kzc6hGS7hl4Xg",
      });
      console.log("Token Gen", token);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
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
      <div className='flex justify-center'>
      <img src={BANNER} alt={BANNER} height={60} width={340} />
      </div>
      <div>
      <UserAuthContextProvider>
      <Routes>
      <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home/>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/prepare"
                element={
                  <ProtectedRoute>
                    <Prepare/>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/quiz"
                element={
                  <ProtectedRoute>
                   <Quiz/>
                  </ProtectedRoute>
                }
              />
               <Route
                path="/safety"
                element={
                  <ProtectedRoute>
                   <Safety/>
                  </ProtectedRoute>
                }
              />
             <Route
                path="/tips"
                element={
                  <ProtectedRoute>
                  <HTips/>
                  </ProtectedRoute>
                }
              />
               <Route
                path="/emergency"
                element={
                  <ProtectedRoute>
                  <Emergency/>
                  </ProtectedRoute>
                }
              />
               <Route
                path="/earth"
                element={
                  <ProtectedRoute>
                  <Earth/>
                  </ProtectedRoute>
                }
              />
          <Route path="/map" element={<Map/>}/>
          <Route path="/api" element={<Api/>}/>
          <Route path="/donate" element={<Card/>}/>
          <Route path="/donation" element={<Donation/>}/>
          <Route path="/receive" element={<Receive/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/flood" element={<Flood/>}/>
          <Route path="/post" element={<Post/>}/>
          <Route path="/tweet" element={<Tweet/>}/>
          <Route path="/tweet" element={<Tweet/>}/>
          <Route path="/createpost" element={<CreatePost/>} />
          <Route path="/detect" element={<ImageClassification/>} />
          <Route path="/kit" element={<EmergencyCheck/>}/>
        </Routes>
        <div id="myButton"></div>
        </UserAuthContextProvider>
    </div>
  
        <Footer/>
    </div>
    
  );
  
}

export default App;
