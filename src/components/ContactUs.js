import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import Layout from './layout'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  handleSubmit(e) {
      e.preventDefault()
      const { email, subject, message } = this.state
      let templateParams = {
        from_name: email,
        to_name: 'anantshukla1234@gmail.com',
        subject: subject,
        message_html: "Email: " + email + "\n Subject: " + subject + "\n Message:" + message,
       }
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
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }
  handleChange = (param, e) => {
      this.setState({ [param]: e.target.value })
    }
render() {
    return (
      <>
        <Layout>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
          <h1 className="p-heading1">Contact Us</h1>
          <p>&nbsp;</p>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
<Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </Layout>
      </>
    )
  }
}
export default ContactForm