import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Login.css'

const Login = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
    setUsername('');
    setPassword('');
  }
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    setErrMsg('');
  }, [username, password])

  const getLoggedIn = async (e) => {
    e.preventDefault();
      setUsername('');
      setPassword('');
      setShow(false);
      setSuccess(true);
    }

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>Sign in</Button>
      <Modal 
              show={show} 
              onHide={handleClose}
              backdrop="static"
            >
      {
        success ? (
          <div>
          <h1 style={{ fontSize: "5vw" }}>You are logged in.</h1>
          <br/>
          <span>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          </span>
        </div>
        ) : 
        (
          <>
              <p className={errMsg ? "errMsg" : "hide"}>{errMsg}</p>
                <Form method="post" onSubmit={getLoggedIn}>
                  <Modal.Header closeButton>
                    <Modal.Title>Sign in</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <Form.Group className="mb-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        id="username"
                        autoComplete="off"
                        placeholder="Enter username"
                        onChange={(e)=>setUsername(e.target.value)}
                        value={username}
                        required
                        autoFocus
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        id="password"
                        placeholder="Enter password"
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        required
                      />
                    </Form.Group>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" type="submit">Sign in</Button>
                  </Modal.Footer>
                </Form>

                  <p style={{ padding: "1%"}}>Not a member yet? <br/>
                    <span>
                      <Link to={{pathname: "/register"}}>Get Localized!</Link>
                    </span>
                  </p>
                  </>
        )
      }
      </Modal>
    </>
  );
}

export default Login;