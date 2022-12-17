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
    setPwd('');
  }
  
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, SetErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    SetErrMsg('');
  }, [username, pwd])

  const getLoggedIn = async (e) => {
    // const response = await axios.get(`http://localhost:8000/register`, user)
    // .then(() => {
    //     setUser(user)
    // });
    e.preventDefault();
    setShow(false);
    setUsername('');
    setPwd('');
    console.log(username,pwd);
    setSuccess(true);
  }

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>Sign in</Button>
      {
        success ? (
          <div>
            <h1 style={{ fontSize: "5vw" }}>Welcome Back!</h1>
            <br/>
            <span>
              <Link to={{pathname: "/"}}>Return to Home</Link>
            </span>
          </div>
        ) : 
        (
          <>
            <Modal 
              show={show} 
              onHide={handleClose}
              backdrop="static"
            >
              <p className={errMsg ? "errMsg" : "hide"}>{errMsg}</p>
                <Modal.Header closeButton>
                  <Modal.Title>Sign in</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <Form method="post" onSubmit={getLoggedIn}>
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
                        onChange={(e)=>setPwd(e.target.value)}
                        value={pwd}
                        required
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                  <Button variant="primary" type="submit">Sign in</Button>
                </Modal.Footer>
                  <p style={{ padding: "1%"}}>Not a member yet? <br/>
                    <span>
                      <Link to={{pathname: "/register"}}>Get Localized!</Link>
                    </span>
                  </p>
            </Modal>
          </>
        )
      }
    </>
  );
}

export default Login;