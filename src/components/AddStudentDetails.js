import React, { Component } from 'react';

class AddStudentDetails extends Component {

  render() {
    return (
      <div id="content">
        <h1>Add Student Details</h1>
        <form onSubmit={(event) => {
          event.preventDefault()

          const studId = this.studId.value
          const registerNumber = this.registerNumber.value
          const firstName = this.firstName.value
          const lastName = this.lastName.value
          const department = this.department.value
          const dateofBirth = this.dateofBirth.value
          const graduationDate = this.graduationDate.value
          const cgpa = this.cgpa.value
          const percentage = this.percentage.value
          this.props.createStudent(studId, registerNumber, firstName, lastName, department, dateofBirth, graduationDate, cgpa, percentage)

          const s1 = this.s1.value
          const s2 = this.s2.value
          const s3 = this.s3.value
          const s4 = this.s4.value
          const s5 = this.s5.value
          const s6 = this.s6.value
          const s7 = this.s7.value
          const s8 = this.s8.value
          this.props.createStudentMarks(s1, s2, s3, s4, s5, s6, s7, s8)

        }}>
          <div className="form-group mr-sm-2">
            <input
              id="studId"
              type="text"
              ref={(input) => { this.studId = input }}
              className="form-control"
              placeholder="studId"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="registerNumber"
              type="text"
              ref={(input) => { this.registerNumber = input }}
              className="form-control"
              placeholder="registerNumber"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="firstName"
              type="text"
              ref={(input) => { this.firstName = input }}
              className="form-control"
              placeholder="firstName"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="lastName"
              type="text"
              ref={(input) => { this.lastName = input }}
              className="form-control"
              placeholder="lastName"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="department"
              type="text"
              ref={(input) => { this.department = input }}
              className="form-control"
              placeholder="department"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="dateofBirth"
              type="text"
              ref={(input) => { this.dateofBirth = input }}
              className="form-control"
              placeholder="dateofBirth"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="graduationDate"
              type="text"
              ref={(input) => { this.graduationDate = input }}
              className="form-control"
              placeholder="graduationDate"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="cgpa"
              type="text"
              ref={(input) => { this.cgpa = input }}
              className="form-control"
              placeholder="cgpa"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="percentage"
              type="text"
              ref={(input) => { this.percentage = input }}
              className="form-control"
              placeholder="percentage"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="s1"
              type="text"
              ref={(input) => { this.s1 = input }}
              className="form-control"
              placeholder="s1"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="s2"
              type="text"
              ref={(input) => { this.s2 = input }}
              className="form-control"
              placeholder="s2"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="s3"
              type="text"
              ref={(input) => { this.s3 = input }}
              className="form-control"
              placeholder="s3"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="s4"
              type="text"
              ref={(input) => { this.s4 = input }}
              className="form-control"
              placeholder="s4"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="s5"
              type="text"
              ref={(input) => { this.s5 = input }}
              className="form-control"
              placeholder="s5"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="s6"
              type="text"
              ref={(input) => { this.s6 = input }}
              className="form-control"
              placeholder="s6"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="s7"
              type="text"
              ref={(input) => { this.s7 = input }}
              className="form-control"
              placeholder="s7"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="s8"
              type="text"
              ref={(input) => { this.s8 = input }}
              className="form-control"
              placeholder="s8"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Add Student Details</button>
        </form>

        <p>&nbsp;</p>
      </div>
    );
  }
}

export default AddStudentDetails;
