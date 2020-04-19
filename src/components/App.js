import React, { Component } from 'react';
import Web3 from 'web3'
//import logo from '../logo.png';
import './App.css';
import StudentDetails from '../abis/StudentDetails.json'
import Navbar from './Navbar'
import ViewBasicDetails from './ViewBasicDetails'
import AdminPortal from './AdminPortal'
import Homepage from './Homepage'
import VerifiedUserLoginPage from './VerifiedUserLoginPage'
import AdminLoginPage from './AdminLoginPage'
import ViewStudentDetails from './ViewStudentDetails'
import VUPortal from './VUPortal'
import VUViewStudentDetails from './VUViewStudentDetails'
import ContactUs from './ContactUs'
import Footer from './Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




class App extends Component {
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
      //console.log(this.state.students[0][1].toString())

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
      loading:true
    }
    this.createStudent = this.createStudent.bind(this)
  }

  createStudent(studId, registerNumber, firstName, lastName, department, dateofBirth, graduationDate, cgpa, percentage)
  {
    this.setState({ loading: true})
    this.state.studentdetails.methods.createStudent(studId, registerNumber, firstName, lastName, department, dateofBirth, graduationDate, cgpa, percentage).send({ from: this.state.account})
    .once('reciept', (reciept)=> {
      this.setState({ loading: false })
    })
  }



  render() {
    return (
      <div>
        <Router>
          <Navbar account={this.state.account} />

          <Switch>

            <Route path="/Homepage" component={Homepage} >
              <Homepage />
            </Route>

            <Route path="/" component={Homepage} exact={true}>
              <Homepage />
            </Route>


            <Route path="/VerifiedUserLoginPage" component={VerifiedUserLoginPage} >
              <VerifiedUserLoginPage />
            </Route>

            <Route path="/VUPortal" component={VUPortal} >
              <VUPortal />
            </Route>

            <Route path="/VUViewStudentDetails" component={VUViewStudentDetails} >
              <VUViewStudentDetails />
            </Route>

            <Route path="/ViewBasicDetails" component={ViewBasicDetails} >
              <ViewBasicDetails />
            </Route>

            <Route path="/ViewStudentDetails" component={ViewStudentDetails} >
              <ViewStudentDetails />
            </Route>
            

            <Route path="/AdminLoginPage" component={AdminLoginPage} >
              <AdminLoginPage />
            </Route>

            <Route path="/AdminPortal" component={AdminPortal} >
              <AdminPortal />
            </Route>

            <Route path="/ContactUs" component={ContactUs} >
              <ContactUs />
            </Route>

            <Route path="/Footer" component={Footer} >
              <Footer />
            </Route>

          </Switch>
          <Footer />
        </Router> 
      </div>
    );
  }
}

export default App;
