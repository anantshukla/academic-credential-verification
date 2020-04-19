import React, { Component } from 'react';
import { Login } from "./adminlogin/index";
import "./Adminlogin.scss";


class AdminLoginPage extends Component {


  render() {
    return (
      <div className="App">
      <div className="login">
      <div className="container" ref={ref => (this.container = ref)}>
        <Login containerRef />
      </div>
      </div>
      </div>
      );
  }
}

  export default AdminLoginPage;
