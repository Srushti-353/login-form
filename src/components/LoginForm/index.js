import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';

const LoginForm = (props) => {

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const data = { 
      email: userEmail,
      password: password, 
    }

    setUserEmail("");
    setPassword("");

    axios.post("https://reqres.in/api/login", data)
      .then(res => {
        props.setMessage(`User found! Token is ${res.data.token}`)
        props.setSuccess(true);
      }).catch(err => {
        props.setMessage(err.response.data.error);
        props.setError(true);
      })
  }

  return(
    <div className='container-fluid h-100 login-form-container'>
      <Form onSubmit={submitHandler}>
        <div className='gap-2 d-flex flex-column'>
          <figure className="text-center">
            <blockquote className="blockquote">
              <h3>Welcome Back</h3>
            </blockquote>
            <figcaption className="blockquote-footer">
              Login here
            </figcaption>
          </figure>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
              type="email" 
              placeholder="Email*" 
              required
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control 
              type="password" 
              placeholder="Password*" 
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Submit
          </Button>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <div className='d-flex justify-content-between align-items-center'>
              <Form.Check type="checkbox" label="Remember Password" className=''/>
              <a className='fs-6 text-dark text-decoration-none'>Forgot Password?</a>
            </div>
          </Form.Group>
        </div>
      </Form>
    </div>
  )
}
export default LoginForm;