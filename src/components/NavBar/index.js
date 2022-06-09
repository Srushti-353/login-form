import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import './style.css';

const Nav = () => {
  return(
    <>
      <Navbar bg="light" variant="light">
        <Container className="align-items-center">
          <Navbar.Brand>
            <a className='fw-bold text-dark text-decoration-none'>
              ATools<span className='fw-bold text-warning'>.</span>
            </a>
          </Navbar.Brand>
          <div className='d-none gap-2 d-xl-flex'>
            <Button variant="dark" className='nav-button'>
              Start Free Trial
            </Button>
            <Button variant="warning" className='nav-button'>
              Login
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  )
}
export default Nav;