import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import { Form, Col, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const EditModal = ({item, setItem, setShouldReload}) => {
    
  console.log('item in editmodal', item)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateItemDataHandler = useCallback( (type) => (event) => {
    setItem({...item, [type]: event.target.value}, [item])
  })


  const updateItem = async (e) => {
    e.preventDefault();
    const response = await axios.put(`http://localhost:8000/item/${item.id}`, item)
    .then(() => {
        setItem(item)
        setShouldReload(true)
    });
    console.log('response',response)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form method="put" id="#" onSubmit={updateItem}>
            <Form.Group className="mb-3" controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder={item.item_name}
                onChange={updateItemDataHandler("name")}
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridStore">
                <Form.Label>Store</Form.Label>
                <Form.Control
                  placeholder={item.store}
                  onChange={updateItemDataHandler("store")}
                   />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTotal">
                <Form.Label>Total</Form.Label>
                <Form.Control
                  type="value"
                  placeholder={item.total}
                  onChange={updateItemDataHandler("total")}
                   />
              </Form.Group>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="formGridDescription"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder={item.description}
                as="textarea"
                rows={3}
                onChange={updateItemDataHandler("description")}
                 />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder={item.address}
                onChange={updateItemDataHandler("address")}
                 />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  placeholder={item.city}
                  onChange={updateItemDataHandler("city")}
                   />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  placeholder={item.zip}
                  onChange={updateItemDataHandler("zip")}
                   />
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;