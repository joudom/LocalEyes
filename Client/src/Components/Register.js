import React, { useState, useCallback, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Navigation from './Navigation';
import Footer from './Footer';
import axios from 'axios';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './Register.css'

const Register = ({user, setUser}) => {

  const updateUserDataHandler = useCallback( (type) => (event) => {
    setUser({...user, [type]: event.target.value}, [user]);
  })

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await axios.post(`http://localhost:8000/register`, user)
    .then(() => {
        setUser(user)
    });
    console.log('response',response)
    setSuccess(true)
  }

  // Registration Requirements
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/;
  const userRegex = /^[a-zA-Z0-9]{5,12}$/;
  const pwdRegex = /^[a-zA-Z0-9](?=.*[!@#$%^&*]).{8,}$/;
  const zipRegex = /^[0-9]{5,5}$/;

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  useEffect(()=>{
    const result = emailRegex.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  },[email])

  const [username, setUsername] = useState('');
  const [validUsername, setValidUsername] = useState(false);
  useEffect(()=>{
    const result = userRegex.test(username);
    console.log(result);
    console.log(username);
    setValidUsername(result);
  },[username])

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  useEffect(()=>{
    const result = pwdRegex.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
  },[pwd])

  const [zip, setZip] = useState('');
  const [validZip, setValidZip] = useState(false);
  useEffect(()=>{
    const result = zipRegex.test(zip);
    console.log(result);
    console.log(zip);
    setValidZip(result);
  },[zip])

  // Registration Tooltips
  const emailTooltip = props => (<Tooltip {...props}>Must be a valid email address</Tooltip>);
  const userTooltip = props => (<Tooltip {...props}>Must be alphanumeric and between 5 - 12 characters</Tooltip>);
  const pwdTooltip = props => (<Tooltip {...props}>Must be alphanumeric & at least 8 characters including 1 special character !@#$%^&*</Tooltip>);
  const zipTooltip = props => (<Tooltip {...props}>Must be numeric and 5 digits</Tooltip>);

  // Registration Confirmation
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Navigation/>
        <Form method='post' onSubmit={registerUser}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5vh", 
            marginBottom: "5vh", marginLeft: "25%", height: "70vh", backgroundColor: "whitesmoke", 
            opacity: ".9", color: "black", width: "50%", borderRadius: "50px", border: "solid"
          }}>

            {
              success ? (
                <div>
                  <h1 style={{ fontSize: "5vw" }}>Welcome, {user.username}!</h1>
                  <br/>
                  <span>
                    <Link to={{pathname: "/"}}>Return Home and Sign n!</Link>
                  </span>
                </div>
              ) : (
                    <Row><h1 style={{ fontSize: "5vw" }}>Register</h1>
                      <Form.Group className='mb-3 col-sm-4' style={{ marginLeft: "25%", width: "50%" }}>
                        <Form.Label>Email
                          <span className={validEmail ? "valid" : "hide"}><FaCheck/></span>
                          <span className={validEmail || !email ? "hide" : "invalid"}><FaTimes/></span>
                        </Form.Label>
                          <OverlayTrigger placement="right" overlay={emailTooltip}>
                            <Form.Control
                              type='email'
                              id='email'
                              autoComplete='off'
                              placeholder="email@domain.com" 
                              onInput={(e) => setEmail(e.target.value)} required
                              onChange={updateUserDataHandler("email")}/>
                          </OverlayTrigger>

                        <Form.Label>Username</Form.Label>
                          <span className={validUsername ? "valid" : "hide"}><FaCheck/></span>
                          <span className={validUsername || !username ? "hide" : "invalid"}><FaTimes/></span>
                          <OverlayTrigger placement="right" overlay={userTooltip}>
                            <Form.Control
                              type='text'
                              id='username'
                              autoComplete='off'
                              placeholder="Enter username" 
                              onInput={(e) => setUsername(e.target.value)} required
                              onChange={updateUserDataHandler("username")}/>
                          </OverlayTrigger>
                        
                        <Form.Label>Password</Form.Label>
                          <span className={validPwd ? "valid" : "hide"}><FaCheck/></span>
                          <span className={validPwd || !pwd ? "hide" : "invalid"}><FaTimes/></span>
                          <OverlayTrigger placement="right" overlay={pwdTooltip}>
                            <Form.Control 
                                type='password'
                                id='pwd'
                                autoComplete='off'
                                placeholder="Enter password" 
                                onInput={(e) => setPwd(e.target.value)} required
                                onChange={updateUserDataHandler("password")}/>
                          </OverlayTrigger> 

                        <Form.Label>Zip</Form.Label>
                          <span className={validZip ? "valid" : "hide"}><FaCheck/></span>
                          <span className={validZip || !zip ? "hide" : "invalid"}><FaTimes/></span>
                          <OverlayTrigger placement="right" overlay={zipTooltip}>
                            <Form.Control
                                type='text' 
                                id='zip'
                                autoComplete='off'
                                placeholder="Enter zipcode" 
                                onInput={(e) => setZip(e.target.value)} required
                                onChange={updateUserDataHandler("zip")}/>
                          </OverlayTrigger>
                        
                        <Button className='mt-3' variant="danger" type="submit" size='lg'>Submit</Button>
                      </Form.Group>
                    </Row>
                  )
            }
        </Form>
      <Footer/>
    </>
  );
}

export default Register;