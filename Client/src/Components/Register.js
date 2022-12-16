import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navigation from './Navigation';
import Footer from './Footer';
import axios from 'axios';

const Register = ({user, setUser}) => {

  const updateUserDataHandler = useCallback( (type) => (event) => {
    setUser({...user, [type]: event.target.value}, [user])
  })

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await axios.post(`http://localhost:8000/register`, user)
    .then(() => {
        setUser(user)
    });
    console.log('response',response)
  }

  return (
    <>
   <Navigation/>
    <Form method='post' onSubmit={registerUser}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
              placeholder="Enter username"
              onChange={updateUserDataHandler("username")}
              />
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
              type="password" 
              placeholder="Password" 
              onChange={updateUserDataHandler("password")}
              />
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
              type="email" 
              placeholder="Enter email"
              onChange={updateUserDataHandler("email")}
              />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
            placeholder="John Doe" 
            onChange={updateUserDataHandler("name")}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={updateUserDataHandler("city")}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
          <Form.Control onChange={updateUserDataHandler("state")}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control onChange={updateUserDataHandler("zip")}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      <Footer />
      </>
  );
}

export default Register;