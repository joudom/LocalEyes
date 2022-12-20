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
import {FaSearchDollar, FaRegPlusSquare} from 'react-icons/fa'
import Login from "./Login";
// import Search from "./Search";

const Navigation = ({search, setSearch}) => {
  
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value)
  //   setSearch(e.target.value)
  // }
  
  return (
    <Navbar sticky="top" bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          LocalEyes
        <FaSearchDollar/>
        </Navbar.Brand>
        {/* <Search inputValue={search} onInputChange={handleSearch}/> */}
        <Form inline className="d-flex">
          <FormControl
            type="text"
            placeholder="search"
            onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
            className="mr-sm-2 mx-2"
          />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
        </Form>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
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
            <Nav.Link as={Link} to="upload"><FaRegPlusSquare size={25}/></Nav.Link>
            <Login />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
