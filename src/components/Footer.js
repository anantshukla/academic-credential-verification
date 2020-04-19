import React, { Component } from 'react';
import './footercss.css'
import{
  Link
}from 'react-router-dom'
import {Nav} from 'react-bootstrap';



class Footer extends Component
{
  render()
  {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 footer-item">
              <h4>Academic Credential Verification Portal of SRM Institute of Science and Technology</h4>
              <p>You can view Basic Details by going to the General User Tab and View Complete Details by going to the Verified User Tab</p>
              <p>Please use the Contact Us Tab to get in touch with us</p>
            </div>
            

            <div className="col-md-2 footer-item">
            </div>


            <div className="col-md-3 footer-item">
              <h4>Useful Links</h4>
              <ul className="menu-list">

                <li>
                  <Link to="/Homepage">
                    <Nav.Link href="/Homepage">Homepage</Nav.Link>
                  </Link>
                </li>
                <li>
                  <Link to="/ViewBasicDetails">
                    <Nav.Link href="/ViewBasicDetails">General User</Nav.Link>
                  </Link>
                </li>
                <li>
                  <Link to="/VerifiedUserLoginPage">
                    <Nav.Link href="/VerifiedUserLoginPage">Verified User</Nav.Link>
                  </Link>
                </li>
                <li>
                  <Link to="/AdminLoginPage">
                    <Nav.Link href="/AdminLoginPage">Admin Portal</Nav.Link>
                  </Link>
                </li>
                <li>
                  <Link to="ContactUs">
                    <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                  </Link>
                </li>
              </ul>
            </div>





            <div className="col-md-4 footer-item">
              <h4>Contact Us</h4>
                <p>
                  <i className="fas fa-home mr-3"></i> SRM Institute of Science and Technology
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> contact@anantshukla.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 91 9958330254
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 91 44 2456456
                </p>
            </div>


            </div>
            <div className="footercentre">
               &copy; {new Date().getFullYear()} Copyright: <a href="https://anantshukla.github.io">anantshukla.github.io</a>
            </div>
          </div>
      </footer>
    );
  }
}

export default Footer;
