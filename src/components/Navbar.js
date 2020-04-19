import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {Nav, Navbar as Navb, NavDropdown} from 'react-bootstrap';
import{
  Link
}from 'react-router-dom'

class Navbar extends Component
{
  render()
  {
    return(
      <Navb bg="danger" expand="lg">
        <Navb.Brand href="/Homepage" className="text-white">Academic Credential Verification Portal</Navb.Brand>
        <Navb.Toggle aria-controls="basic-navbar-nav" />
        <Navb.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Link to="/Homepage">
              <Nav.Link href="/Homepage" className="text-white">Homepage</Nav.Link>
            </Link>

            <NavDropdown title="View Student Details" id="basic-nav-dropdown" className="text-white">
                
              <Link to="/ViewBasicDetails">
                <Nav.Link href="/ViewBasicDetails">General User</Nav.Link>
              </Link>

              <Link to="/VerifiedUserLoginPage">
                <Nav.Link href="/VerifiedUserLoginPage">Verified User</Nav.Link>
              </Link>

            </NavDropdown>
          

            <Link to="/AdminLoginPage">
              <Nav.Link href="/AdminLoginPage" className="text-white">Admin Portal</Nav.Link>
            </Link>

            <Link to="ContactUs">
              <Nav.Link href="#ContactUs" className="text-white">Contact Us</Nav.Link>
            </Link>

          </Nav>
          <Form inline>
            <small className="text-white"><span id="account">{this.props.account}</span></small>
          </Form>
        </Navb.Collapse>
      </Navb>
    );
  }
}

export default Navbar;
