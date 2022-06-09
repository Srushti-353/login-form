import React from 'react';
import { Toast } from 'react-bootstrap';

export const ErrorToast = (props) => {
  return(
    <>
      <Toast 
        bg='danger' 
        delay={3000}
        show={props.error}
        onClose={() => props.setError(false)}
        autohide
      >
        <Toast.Header>
          <strong className='me-auto'>Error!!</strong>
        </Toast.Header>
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </>
  )
}

export const SuccessToast = (props) => {
  return(
    <>
      <Toast 
        bg='success' 
        delay={3000}
        show={props.success}
        onClose={() => props.setSuccess(false)}
        autohide
      >
        <Toast.Header className=''>
          <strong className='me-auto'>Success!!</strong>
        </Toast.Header>
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </>
  )
}