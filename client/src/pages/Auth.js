import React from "react";
import {Button, Card, Container, Form, NavLink, Row} from "react-bootstrap"
import { REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  return (
    <Container 
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 60}}
      >
      
      <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>LogIn</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Enter your email'
          />
          <Form.Control
            className='mt-3'
            placeholder='Enter your password' 
          />
          <Row className='d-flex justify-content-between align-items-center m-3'>
            <span><NavLink to={REGISTRATION_ROUTE}>LogUp</NavLink></span>
            <Button 
              variant='outline-success'
              >
              Enter
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth; 