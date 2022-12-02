import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Login from './Login';
import eye2 from '../eye2.png'

const Navigation = () => {
  return (
    <Navbar bg="dark" variant={'dark'} expand="lg" >
      <Container>
          <Navbar.Brand href="#home" >
        LocalEyes
        <img src={eye2} className="App-logo2" alt="logo"/>
        </Navbar.Brand>
          <Form inline className='px-2'>
              <FormControl
                  type="text"
                  placeholder="search"
                  className="mr-sm-2 mx-5"    
                  />
          </Form>
          <Button variant="outline-success" className='mx-5' >Search</Button>           
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Help</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                  Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                  Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                  Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Login />
            
          </Nav>     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;