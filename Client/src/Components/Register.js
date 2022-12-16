import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navigation from './Navigation';
import Footer from './Footer';
import axios from 'axios';

function Register() {

  // Registratio Requirements
  const emailRegex = /^[a-z0-9](?=.*[@])$/
  const userRegex = /^[a-zA-Z0-9]{5,12}$/
  const pwdRegex = /^[a-zA-Z0-9](?=.*[!@#$%^&*]){8,}$/
  const zipRegex = /^[0-9]{5,}$/

  return (
    <>
   <Navigation/>
    <Form 
      onSubmit
      method='post'
      style={{
        display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5vh", 
        marginBottom: "5vh", marginLeft: "25%", height: "70vh", backgroundColor: "whitesmoke", 
        opacity: ".9", color: "black", width: "50%", borderRadius: "50px", border: "solid"
      }}>
      <Row>
        <h1 style={{ fontSize: "5vw" }}>Register</h1>
        <Form.Group className='mb-3 col-sm-4' style={{ display: "flexbox", alignItems: "center", justifyContent: "center", width: "100%" }}>
          <Form.Label>Email</Form.Label>
            <Form.Control placeholder="email@domain.com" onChange={updateUserRegistration("email")} />
            <p>*Must be a valid email address</p>

          <Form.Label>Username</Form.Label>
            <Form.Control placeholder="Enter username" onChange={updateUserRegistration("username")} />
            <p>*Must be alphanumeric and between 5 - 12 characters</p>
          
          <Form.Label>Password</Form.Label>
            <Form.Control placeholder="Enter password" onChange={updateUserRegistration("password")} />
            <p>*Must be alphanumeric & at least 8 characters including 1 special character</p>

          <Form.Label>Zip</Form.Label>
            <Form.Control placeholder="Enter zipcode" onChange={updateUserRegistration("zipcode")} />
            <p> *Must be numeric and 5 digits</p>
          
          <Button className='mt-3' variant="danger" type="submit" size='lg'>Submit</Button>
        </Form.Group>
      </Row>
    </Form>
  <Footer/>
    </>
  );
}

export default Register;