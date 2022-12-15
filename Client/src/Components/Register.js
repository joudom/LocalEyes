import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navigation from './Navigation';
import Footer from "./Footer";

function Register() {
  return (
    <>
   <Navigation/>
    <Form
      style={{
        display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5vh", 
        marginBottom: "5vh", marginLeft: "25%", height: "70vh", backgroundColor: "whitesmoke", 
        opacity: ".9", color: "black", width: "50%"
      }}>
      <Row>
        <h1 style={{ fontSize: "5vw" }}>Get Localized!</h1>
        <Form.Group className='mb-3' controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        
        <Form.Group className='mb-3' controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formGridUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="Username" />
        </Form.Group>
        <div>
          <Button className='mt-3' variant="danger" type="submit" size='lg'>Submit</Button>
        </div>
      </Row>
    </Form>
  <Footer/>
    </>
  );
}

export default Register;