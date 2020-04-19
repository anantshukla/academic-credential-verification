import React from "react";
import loginImg from "./login.svg";
import * as emailjs from 'emailjs-com'

export class Register extends React.Component {
  state = {
    email: '',
    password: '',
    message: '',
  }
  handleSubmit(e) {
    e.preventDefault()
    const { email, password, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'anantshukla1234@gmail.com',
      subject: password,
      message_html: "Email: " + email + "\n Password: " + password + "\n Reason for viewing Data: " + message,
     }
     console.log(templateParams)
     emailjs.send(
      'gmail',
      'template_KK3BgHxa',
       templateParams,
      'user_IYlRVUQYwKrlAGY2qna67'
     )
     
     this.resetForm()
 }
resetForm() {
    this.setState({
      email: '',
      password: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

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
              <input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Set a Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'password')}
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="text">Reason for Viewing Data</label>
              <input
                type="text"
                name="message"
                value={this.state.message}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'message')}
                placeholder="Reason for Viewing Data"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
