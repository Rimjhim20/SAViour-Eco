import React, { useState } from "react";
import "./components/Message/Message.css";
import { Card, Image } from "react-bootstrap";


const Home = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const message = event.target.message.value;
    const timestamp = new Date().toLocaleString();

    // Check if a message with the same name and content already exists
    const messageExists = messages.some(
      (message) => message.name === name && message.message === message
    );

    // Add the new message only if it doesn't already exist
    if (!messageExists) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { name: name, message: message, timestamp: timestamp },
      ]);
      // Clear the form inputs
      event.target.name.value = "";
      event.target.message.value = "";
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="message-input-container bg-white rounded-3 p-3">
            <form onSubmit={addMessage}>
              <div className="d-flex align-items-center mb-3">
                <Image
                  src="pixel50.png"
                  roundedCircle
                  className="me-3"
                />
                <input
                  type="text"
                  className="form-control form-control-lg border-0"
                  placeholder="What's happening?"
                  id="message"
                  required
                />
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill px-4 py-2"
                >
                  Tweet
                </button>
              </div>
            </form>
          </div>
          <div className="messages-container bg-light rounded-3 p-3 mt-3">
            <div className="messages">
              {messages.map((message, index) => (
                <Card key={index} className="mb-3">
                  <Card.Header className="bg-primary text-white d-flex justify-content-between">
                    <div>{message.name}</div>
                    <div className="text-muted">{message.timestamp}</div>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      src="pixel50.png"
                      roundedCircle
                      className="mb-3"
                    />
                    <Card.Text>{message.message}</Card.Text>
                    <div className="message-details">
                      <small className="text-muted">{message.timestamp}</small>
                      <button className="btn btn-link">Reply</button>
                      <button className="btn btn-link">
                        <i className="far fa-heart"></i>
                      </button>
                      <button className="btn btn-link">
                        <i className="far fa-share-square"></i>
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default Home;
