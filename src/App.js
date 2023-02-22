import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Home1 from "./Home1";
import Navbar from "./components/Nav/Navbar";
import Footer from "./Footer";
import Message from "./components/Message/Message";
import Signup from "./components/Signup";
import Quiz from './Quiz';
import Safety from './safety';
import Prepare from './prepare';

function App() {
  const [messages, setMessages] = useState([]);

  // Function to add a new message
  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prepare" element={<Prepare/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/safety" element={<Safety/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/community" element={<Home1 messages={messages} addMessage={addMessage} />} />
      </Routes>
      <div className="message-container">
        {messages.map((message, index) => (
          <Message
            key={index}
            name={message.name}
            content={message.content}
            isCurrentUser={message.isCurrentUser}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
