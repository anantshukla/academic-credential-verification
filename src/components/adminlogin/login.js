import React from "react";
import loginImg from "./login.svg";
import { Redirect } from 'react-router-dom'

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.input1 = React.createRef();
    this.input2 = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      emailid: ' ',
      adminLoggedIn: false
    }
  }


  handleSubmit(event){
    event.preventDefault();
    this.emailid = this.input1.current.value
    this.passwordid = this.input2.current.value
    let cond1 = 0
    let cond2 = 0
    let cond3 = 0
    if(this.emailid === 'admin')
    {
      cond1 = 1;
    }
    if(this.passwordid === 'admin')
    {
      cond2 = 1;
    }
    if(cond1===1 && cond2===1)
    {
      cond3 = 1;
    }
    //console.log('Your name is:', this.emailid, ' and password is:', this.passwordid)
    //let cond1 = this.emailid == 'admin'
    //let cond2 = this.passwordid == 'admin'
    cond3 ? this.setState({
      adminLoggedIn: true
    }) : window.alert("Incorrect Username or Password")
  }

  render() {
    if(this.state.adminLoggedIn)
    {
      return <Redirect to="/AdminPortal"/>
    }
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="The pic is not found" />
          </div>

          <form className="form" ref="refloginform" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email id" ref={this.input1} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" ref={this.input2} />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
