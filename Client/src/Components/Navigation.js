import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Login from "./Login";
import { Link } from "react-router-dom";
import {FaSearchDollar} from 'react-icons/fa'

const Navigation = () => {
  return (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          LocalEyes
        <FaSearchDollar/>
        </Navbar.Brand>
        <Form inline className=" d-flex">
          <FormControl
            type="text"
            placeholder="search"
            className="mr-sm-2 mx-2"
          />
            <Button variant="outline-success" className="">
          Search
        </Button>
        </Form>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="register">
              Register
            </Nav.Link>
            <Nav.Link href="#link">Help</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
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
};

export default Navigation;
