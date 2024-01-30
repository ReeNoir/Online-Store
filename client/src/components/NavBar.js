import { Context } from '../index';
import { SHOP_ROUTE } from '../utils/consts';
import React, { useContext } from 'react';
import {Button, Container} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const {user} = useContext(Context)
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink className="navbar-brand" to={SHOP_ROUTE}>Stone</NavLink>

        {user.isAuth ?
        <Nav className="ml-auto nav-panel">
          <Button variant={'outline-light'}>Admin panel</Button>
          <Button variant={'outline-light'} className='ms-2' onClick={() => user.setIsAuth(false)}>Log out</Button>
        </Nav>
        :
        <Nav className="ml-auto nav-panel">
          <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Log up</Button>
        </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavBar;