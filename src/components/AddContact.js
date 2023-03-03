import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import ContactDataService from "../services/contact.services";

const AddContact = ({ id, setContactId }) => {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || number === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newContact = {
      title,
      number,
      status,
    };
    console.log(newContact);

    try {
      if (id !== undefined && id !== "") {
        await ContactDataService.updateContact(id, newContact);
        setContactId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await ContactDataService.addContacts(newContact);
        setMessage({ error: false, msg: "New Contact added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setNumber("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await ContactDataService.getContact(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setNumber(docSnap.data().number);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formContactTitle">
            <InputGroup>
              <InputGroup.Text id="formContactTitle">C</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Contact Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formContactAuthor">
            <InputGroup>
              <InputGroup.Text id="formContactAuthor">N</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddContact;