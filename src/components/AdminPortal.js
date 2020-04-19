import React, { Component } from 'react';
import Web3 from 'web3'
//import logo from '../logo.png';
import './App.css';
import StudentDetails from '../abis/StudentDetails.json'
import AddStudentDetails from './AddStudentDetails'
import ViewAllStudentDetails from './ViewAllStudentDetails'
import AdminLogoutbar from './AdminLogoutbar'


class AdminPortal extends Component {
  async componentWillMount()
  {
    await this.loadWeb3();
    await this.loadBlockchainData();
    //console.log(window.web3);
  }

  

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData()
  {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0]})
    //console.log(accounts)
    //console.log(StudentDetails.abi, StudentDetails.networks[5777].address)
    //window.ethereum.autoRefreshOnNetworkChange = true;
    const networkid = await web3.eth.getId();
    const networkData = StudentDetails.networks[networkid]
    if(networkData)
    {
      //const abi = StudentDetails.abi
      //const address = StudentDetails.networks[networkid].address
      const studentdetails = web3.eth.Contract(StudentDetails.abi, networkData.address)
      //console.log(studentdetails)

      
      //console.log(networkid)

      this.setState({studentdetails})
      const studentCount = await studentdetails.methods.countStudents().call()
      //console.log(studentCount.toString())

      this.setState({ studentCount })

      for(var i = 1; i<= studentCount; i++)
      {
        const student = await studentdetails.methods.studentList(i).call()
        this.setState({
          students: [...this.state.students, student]
        })
      }
      for(var j = 1; j<= studentCount; j++)
      {
        const studentmarks = await studentdetails.methods.studentMarksList(j).call()
        this.setState({
          studentsmarks: [...this.state.studentsmarks, studentmarks]
        })
      }
      this.setState({loading:false})
    }
    else
    {
      window.alert("The StudentDetails contract isnt deployed on this particular network. Check on which network it has been deployed")
    }
     
  }

  constructor(props)
  {
    super(props)
    this.state = {
      account: ' ',
      studentCount: 0,
      students: [],
      studentsmarks: [],
      loading:true
    }
    this.createStudent = this.createStudent.bind(this)
    this.createStudentMarks = this.createStudentMarks.bind(this)
    //this.listAllStudents = this.listAllStudents.bind(this)
  }

  createStudent(studId, registerNumber, firstName, lastName, department, dateofBirth, graduationDate, cgpa, percentage)
  {
    this.setState({ loading: true})
    this.state.studentdetails.methods.createStudent(studId, registerNumber, firstName, lastName, department, dateofBirth, graduationDate, cgpa, percentage).send({ from: this.state.account})
  }

  createStudentMarks(s1, s2, s3, s4, s5, s6, s7, s8)
  {
    this.state.studentdetails.methods.createStudentMarks(s1, s2, s3, s4, s5, s6, s7, s8).send({ from: this.state.account})
    .once('reciept', (reciept)=> {
      this.setState({ loading: false })
    })
  }



  render() {
    return (
      <div>
      <AdminLogoutbar />
        <div className="container-fluid mt-5">
          <div className="col-lg-12 d-flex">
            <div className="row">
            <h1>Admin Portal Academic Credential Verification using Blockchain</h1>
                <main role="main" className="col-lg-12 d-flex">
                { this.state.loading
                  ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                  : <AddStudentDetails createStudent={this.createStudent} createStudentMarks={this.createStudentMarks} />  
                }
                </main>
                <main role="main" className="col-lg-12 d-flex">
                { this.state.loading
                  ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                  : <ViewAllStudentDetails students={this.state.students} studentsmarks={this.state.studentsmarks} />  
                } 
                </main>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default AdminPortal;
