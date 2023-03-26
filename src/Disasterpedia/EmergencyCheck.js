import React,{ useState } from 'react';
import data from '../data.json';
import '../App.css';
import { Container, Row, Col, Card, ListGroup, Form } from "react-bootstrap";

function EmergencyCheck() {
      const [packedItems, setPackedItems] = useState([]);
      const [checkedItems, setCheckedItems] = useState(
        Array(data.length).fill(false)
      );
    
      const handleCheck = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !checkedItems[index];
        setCheckedItems(newCheckedItems);
    
        if (newCheckedItems[index]) {
          setPackedItems([...packedItems, data[index]]);
        } else {
          setPackedItems(packedItems.filter((item) => item.name !== data[index].name));
        }
      };
    
      const handleReset = () => {
        setPackedItems([]);
        setCheckedItems(Array(data.length).fill(false));
      };
    
      return (
        <Container>
          <h1 className="text-center my-3">Emergency Kit Checklist</h1>
          <Row>
            <Col md={6}>
              <Card>
                <Card.Header>Items To Pack</Card.Header>
                <ListGroup variant="flush">
                  {data.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Form.Check
                        type="checkbox"
                        label={item.name}
                        checked={checkedItems[index]}
                        onChange={() => handleCheck(index)}
                      />
                      {item.items && (
                        <ListGroup variant="flush">
                          {item.items.map((subitem, subindex) => (
                            <ListGroup.Item key={subindex} className="ml-5">
                              <Form.Check
                                type="checkbox"
                                label={subitem}
                                checked={checkedItems[index] && packedItems.some((packedItem) => packedItem.items && packedItem.items.includes(subitem))}
                                onChange={() => handleCheck(index)}
                              />
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Header>Items Packed</Card.Header>
                <ListGroup variant="flush">
                  {packedItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      {item.name}
                      {item.items && (
                        <ListGroup variant="flush">
                          {item.items.map((subitem, subindex) => (
                            <ListGroup.Item key={subindex} className="ml-5">
                              {subitem}
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <Card.Footer>
                  <button
                    className="btn btn-danger"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
    
export default EmergencyCheck;