import React, { Component } from 'react';
import StudentDetails from '../abis/StudentDetails.json'
import ViewStudentDetails from './ViewStudentDetails'



class EnterStudentDetails extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      account: ' ',
      studentCount: 0,
      students: [],
      loading:true,
      detailsEntered: false,
    }
  }

  async componentWillMount()
  {
    await this.loadBlockchainData();
    //console.log(window.web3);
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

      const studId = localStorage.getItem("GeneralStudId")
      let tnum = Number.parseInt(studId)
      console.log(studId)
      for(var i = tnum; i<= tnum; i++)
      {
        const student = await studentdetails.methods.studentList(i).call()
        this.setState({
          students: [...this.state.students, student]
        })
      }      
      //let name = this.state.students[0][1]
      this.setState({loading:false})
    }
    else
    {
      window.alert("The StudentDetails contract isnt deployed on this particular network. Check on which network it has been deployed")
    }
     
  }

  handleSubmit = (e) => {
    if(e) e.preventDefault();
    const [input] = e.target.children
    let tval = input.value
    tval = Number.parseInt(tval)
    this.studId = tval
    //console.log('Your name is', this.studId);
    this.detailsEntered = true
    localStorage.setItem("GeneralStudId", this.studId)
    window.location.reload(false);

  }


  
  render() {
    return (
      <div id="content">
		  <p>&nbsp;</p>

        <h1>Enter Student Details</h1>
		    <p>&nbsp;</p>

        <div className = "container-fluid">

          <form onSubmit={this.handleSubmit}>
            <input placeholder="Student ID" type="text"/>
            <button type="submit" className="btn btn-primary">Search Student Details</button>
          </form>

          <main role="main" className="col-lg-12 d-flex">
              { this.state.detailsEntered
                ? <div><p className="text-center">Enter Details</p></div>
                : <ViewStudentDetails idnumber={this.state.studId} students ={this.state.students}/>
              } 
          </main>

        </div>

        <p>&nbsp;</p>

      </div>
    );
  }
}

export default EnterStudentDetails;
