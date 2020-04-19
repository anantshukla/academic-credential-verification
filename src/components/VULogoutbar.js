import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {Nav, Navbar as Navb} from 'react-bootstrap';
import{
  Link
}from 'react-router-dom'

class VULogoutbar extends Component
{
  render()
  {
    return(
      <Navb bg="dark" expand="lg">
        <Navb.Brand href="/VerifiedUserLoginPage" className="text-white"></Navb.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Form inline>
            <Link to="VerifiedUserLoginPage">
              <Nav.Link href="VerifiedUserLoginPage" className="text-white">Logout</Nav.Link>
            </Link>
          </Form>
      </Navb>
    );
  }
}

export default VULogoutbar;
