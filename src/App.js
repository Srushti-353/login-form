import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Nav from './components/NavBar';
import './app.css';
import { ToastContainer } from 'react-bootstrap';
import { ErrorToast, SuccessToast } from './components/Toast';

const App = () => {

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("")

  return(
    <div style={{height: "100vh"}}>
      <Nav/>
      <div 
        className='d-flex flex-row align-items-center form-container justify-content-center w-100'
      >
        <LoginForm
          error={error}
          setError={setError}
          success={success}
          setSuccess={setSuccess}
          message={message}
          setMessage={setMessage}
        />
        <div className='d-none d-xl-block w-50 bg-dark' style={{height: "calc(100vh - 56px)"}}></div>
      </div>
      <ToastContainer 
        position='top-center'
        className='p-3'
      >
        {error && <ErrorToast 
          message={message}
          error={error}
          setError={setError}  
        />}
        {success && <SuccessToast 
          message={message}
          success={success}
          setSuccess={setSuccess}  
        />}
      </ToastContainer> 
    </div>
  )
}
export default App;