import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddContact from "../components/AddContact";
import ContactsList from "../components/ContactsList";
import "../App.css";
function Emergency() {
  const [contactId, setContactId] = useState("");
  const getContactIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setContactId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Emergency-Contact List</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddContact id={contactId} setContactId={setContactId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <ContactsList getContactId={getContactIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Emergency;