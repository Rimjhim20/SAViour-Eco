import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ContactDataService from "../services/contact.services";

const ContactsList = ({ getContactId }) => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const data = await ContactDataService.getAllContacts();
    console.log(data.docs);
    setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ContactDataService.deleteContact(id);
    getContacts();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getContacts}>
          Refresh List
        </Button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Contact Name</th>
            <th>Number</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.number}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getContactId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ContactsList;