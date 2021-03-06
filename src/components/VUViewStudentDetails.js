import React, { Component } from 'react';

class VUViewStudentDetails extends Component {
  async componentWillMount()
  {
    await this.loadBlockchainData();
    //console.log(window.web3);
  }


  async loadBlockchainData()
  {
    //console.log(id)
  }
  constructor(props)
  {
    super(props)
    this.state = {
      id: 0,
    }
  }

  render() {
    //console.log(this.props)
    return (
      <div id="content">
        <p>&nbsp;</p>
        <h2>Student Details</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">registerNumber</th>
              <th scope="col">firstName</th>
              <th scope="col">lastName</th>
              <th scope="col">department</th>
              <th scope="col">dateofBirth</th>
              <th scope="col">graduationDate</th>
              <th scope="col">CGPA</th>
              <th scope="col">Percentage</th>
            </tr>
          </thead>
          <tbody id="studentList">
          {
            this.props.students.map((student, key) => {
              let tnum = student.DOB.toString().length
              tnum = Number.parseInt(tnum)
              //console.log(tnum)
              let tnum2 = student.yearOfGraduation.toString().length
              tnum2 = Number.parseInt(tnum2)
              //console.log(tnum2)
              return(
                <tr key={key}>
                  <th scope="row">{ student.id.toString() }</th>
                  <td>{ student.regNo }</td>
                  <td>{ student.firstName }</td>
                  <td>{ student.lastName }</td>
                  <td>{ student.department }</td>
                  <td>
                  {
                    tnum === 8?
                      student.DOB.toString()[0] +
                      student.DOB.toString()[1] + 
                      "-"+ 
                      student.DOB.toString()[2] + 
                      student.DOB.toString()[3] + 
                      "-"+ 
                      student.DOB.toString()[4] + 
                      student.DOB.toString()[5] + 
                      student.DOB.toString()[6] +
                      student.DOB.toString()[7]
                    :
                      student.DOB.toString()[0] +
                      "-"+
                      student.DOB.toString()[1] + 
                      student.DOB.toString()[2] +  
                      "-"+
                      student.DOB.toString()[3] +
                      student.DOB.toString()[4] + 
                      student.DOB.toString()[5] + 
                      student.DOB.toString()[6]
                  }
                  </td>
                  <td>
                  {
                    tnum2 === 8?
                      student.yearOfGraduation.toString()[0] +
                      student.yearOfGraduation.toString()[1] + 
                      "-"+ 
                      student.yearOfGraduation.toString()[2] + 
                      student.yearOfGraduation.toString()[3] + 
                      "-"+ 
                      student.yearOfGraduation.toString()[4] + 
                      student.yearOfGraduation.toString()[5] + 
                      student.yearOfGraduation.toString()[6] +
                      student.yearOfGraduation.toString()[7]
                    :
                      student.yearOfGraduation.toString()[0] +
                      "-"+
                      student.yearOfGraduation.toString()[1] + 
                      student.yearOfGraduation.toString()[2] +  
                      "-"+
                      student.yearOfGraduation.toString()[3] +
                      student.yearOfGraduation.toString()[4] + 
                      student.yearOfGraduation.toString()[5] + 
                      student.yearOfGraduation.toString()[6]
                  }
                  </td>
                  <td>{ student.CGPA }</td>
                  <td>{ student.percentage }</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>

        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Semester 1 CGPA</th>
              <th scope="col">Semester 2 CGPA</th>
              <th scope="col">Semester 3 CGPA</th>
              <th scope="col">Semester 4 CGPA</th>
              <th scope="col">Semester 5 CGPA</th>
              <th scope="col">Semester 6 CGPA</th>
              <th scope="col">Semester 7 CGPA</th>
              <th scope="col">Semester 8 CGPA</th>
            </tr>
          </thead>
          <tbody id="studentList">
          {
            this.props.studentsmarks.map((studentmarks, key) => {
              return(
                <tr key={key}>
                  <th scope="row">
                  {
                    
                  }
                  </th>
                  <td>
                  {
                    studentmarks.s1.toString()[0] +
                    "."+
                    studentmarks.s1.toString()[1] +
                    studentmarks.s1.toString()[2]
                  }
                  </td>
                  <td>
                  {
                    studentmarks.s2.toString()[0] +
                    "."+
                    studentmarks.s2.toString()[1] +
                    studentmarks.s2.toString()[2]
                  }
                  </td>
                  <td>
                  {
                    studentmarks.s3.toString()[0] +
                    "."+
                    studentmarks.s3.toString()[1] +
                    studentmarks.s3.toString()[2]
                  }
                  </td>
                  <td>
                  {
                    studentmarks.s4.toString()[0] +
                    "."+
                    studentmarks.s4.toString()[1] +
                    studentmarks.s4.toString()[2]
                  }
                  </td>
                  <td>
                  {
                    studentmarks.s5.toString()[0] +
                    "."+
                    studentmarks.s5.toString()[1] +
                    studentmarks.s5.toString()[2]
                  }                  </td>
                  <td>
                  {
                    studentmarks.s6.toString()[0] +
                    "."+
                    studentmarks.s6.toString()[1] +
                    studentmarks.s6.toString()[2]
                  }
                  </td>
                  <td>
                  {
                    studentmarks.s7.toString()[0] +
                    "."+
                    studentmarks.s7.toString()[1] +
                    studentmarks.s7.toString()[2]
                  }
                  </td>
                  <td>
                  {
                    studentmarks.s8.toString()[0] +
                    studentmarks.s8.toString()[1] +
                    "."+
                    studentmarks.s8.toString()[2]
                  }
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>


      </div>
    );
  }
}

export default VUViewStudentDetails;
