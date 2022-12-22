import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import './Login.css'

const Login = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [cookie, setCookie] = useState('')  
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleShow = () => {
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
    setUsername('');
    setPassword('');
  }

  const getLoggedIn = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000', {
      username: username,
      password: password
    }).then((response) => {
      if (response.data.message) {
        setErrMsg(response.data.message);
      } else {
        setLoginStatus(true);
        setCookie(true)
      }
    });
  };

  const getLoggedOut = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:8000')
    console.log(response.data)
      setLoginStatus(false);
      setCookie('');
      alert("You've been logged out.");
      
  }

  useEffect(()=>{
    axios.get('http://localhost:8000').then((response)=>{
      if (response.data.userLoggedIn === true) {
        setCookie(response.data.user.rows[0].username)
        console.log('username:', response.data.user.rows[0].username, '| login:', response.data.userLoggedIn)
      }
    })
  }, [])

  useEffect(()=>{
    setErrMsg('');
  }, [username, password])

  return (
    <>
      {/* <Button variant="secondary" onClick={handleShow}>Sign in</Button> */}
      <Button 
        variant="light" onClick={handleShow}
        className={!loginStatus ? "show" : "hide"}
      >
        Login
      </Button>
      <Button 
        variant="light" onClick={getLoggedOut}
        className={!loginStatus ? "hide" : "show"}
      >
        Logout
      </Button>
      <Modal 
              show={show} 
              onHide={handleClose}
              backdrop="static"
            >
      {
        loginStatus ? (
          <div>
          <h1 style={{ 
            fontSize: "5vh", 
            textAlign: "center",
            marginTop: "5%" 
          }}> 
            Welcome back {username}!
          </h1>
          <br/>
            <center>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button onClick={()=>navigate('/upload')}>Upload Now</Button>
            </center>
          <br/>
        </div>
        ) : 
        (
          <>
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
                  <p className={errMsg ? "errMsg" : "hide"}>{errMsg}</p>
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