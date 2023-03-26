import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/Authentication/ProtectedRoute";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
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
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
// import {TweetLogin}  from "./components/TweetLogin";
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
          
          <Route path="/flood" element={<Flood/>}/>
          <Route path="/post" element={<Post/>}/>
          <Route path="/tweet" element={<Tweet/>}/>
          {/* <Route path="/login" element={<TweetLogin/>} /> */}
          <Route path="/createpost" element={<CreatePost/>} />
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
