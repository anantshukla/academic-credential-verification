import React from "react";
import loginImg from "./login.svg";

export class Register extends React.Component {


  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="The pic is not found" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Official Email id</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Set a Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
            <div className="form-group">
              <label htmlFor="text">Reason for Viewing Data</label>
              <input type="text" name="text" placeholder="Reason for Viewing Data" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
