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
import { Link } from "react-router-dom";
import { FaSearchDollar, FaRegPlusSquare } from "react-icons/fa";
import Login from "./Login";

const Navigation = () => {
  return (
    <Navbar sticky="top" bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          LocalEyes
          <FaSearchDollar />
        </Navbar.Brand>
        <Form inline className="d-flex">
          <FormControl
            type="text"
            id=""
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
            <Nav.Link as={Link } to="/help">Help</Nav.Link>
            <Nav.Link as={Link} to="/upload">
              <FaRegPlusSquare size={25} />
            </Nav.Link>
            <Login />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
