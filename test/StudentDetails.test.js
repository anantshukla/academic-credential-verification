const StudentDetails = artifacts.require('./StudentDetails.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('StudentDetails', (accounts) =>
{
  let studentdetails

  before(async () =>
  {
    studentdetails = await StudentDetails.deployed()
  })

  describe('deployment', async () =>
  {
    it('deploys successfully', async () =>
    {
      const address = await studentdetails.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const title = await studentdetails.title()
      assert.equal(title, 'ACADEMIC CREDENTIAL VERIFICATION TECHNIQUE USING BLOCKCHAIN')
    })
  })
  
  describe('Student Records', async () =>
  {
    let result, studentCount

    before(async () =>
    {
      result = await studentdetails.createStudent('1', '1', '1', '1', '1', '1', '1', '1', '1', '1')
      studentCount = await studentdetails.countStudents()
    })

    it('creates student details', async () =>
    {
      assert.equal(studentCount, 1)
      const event = result.logs[0].args
      assert.equal(event.regNo, '1', 'regNo is correct')
      assert.equal(event.firstName, '1', 'firstName is correct')
      assert.equal(event.lastName, '1', 'lastName is correct')
      assert.equal(event.DOB, '1', 'DOB is correct')
  	})


    it('gets student details', async () =>
    {
    	const student = await studentdetails.studentList(studentCount)
    	assert.equal(student.regNo, '1', 'regNo is correct')
	    assert.equal(student.firstName, '1', 'firstName is correct')
	    assert.equal(student.lastName, '1', 'lastName is correct')
	    assert.equal(student.DOB, '1', 'dateDOB is correct')
    })

  })
})
