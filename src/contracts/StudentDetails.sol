pragma solidity  >=0.4.22 <0.6.0;

contract StudentDetails 
{
    string public title;
    uint public studentCount = 1;
    uint public studentMarksCount = 1;

    mapping (uint => Student) public studentList;
    mapping (uint => StudentMarks) public studentMarksList;


    struct Student
    {
        uint id;
        string regNo;
        string firstName;
        string lastName;
        string department;
        uint DOB;
        uint yearOfGraduation;
        string CGPA;
        string percentage;
        //uint noOfSubjects;
        //string[] subjectName;
        //uint[] subjectMarks;
    }
    struct StudentMarks
    {
        uint s1;
        uint s2;
        uint s3;
        uint s4;
        uint s5;
        uint s6;
        uint s7;
        uint s8;
    }
    

    constructor() public
    {
        title = "ACADEMIC CREDENTIAL VERIFICATION TECHNIQUE USING BLOCKCHAIN";
    }

    uint[] public studIdList;

    event studentCreationEvent
    (
        uint id,
        string regNo,
        string firstName,
        string lastName,
        string department,
        uint DOB,
        uint yearOfGraduation,
        string CGPA,
        string percentage
        //uint noOfSubjects,
        //string[] subjectName,
        //uint[] subjectMarks
    );

    event studentMarksEvent
    (
        uint s1,
        uint s2,
        uint s3,
        uint s4,
        uint s5,
        uint s6,
        uint s7,
        uint s8
    );
    
    function createStudent(uint _studId, string memory _regNo, string memory _firstName, string memory _lastName, string memory _department, uint _DOB, uint _yearOfGraduation, string memory _CGPA, string memory _percentage) public
    {

        studentList[studentCount] = Student(_studId, _regNo, _firstName, _lastName, _department, _DOB, _yearOfGraduation, _CGPA, _percentage);
        //var student = studentList[_studId];
        //struct StudentDetails.Student student = studentList[_studId];
        //Student memory student = studentList[_studId];
        //student.regNo = _regNo;
        //student.firstName = _firstName;
        //student.lastName = _lastName;
        //student.dateDOB = _dateDOB;
        //student.monthDOB = _monthDOB;
        //student.yearDOB = _yearDOB;
        //student.yearOfGraduation = _yearOfGraduation;
        //student.wholeCGPA = _wholeCGPA;
        //student.decimalCGPA = _decimalCGPA;
        //student.wholePercentage = _wholePercentage;
        //student.decimalPercentage = _decimalPercentage;
        
        studIdList.push(_studId) -1;
        studentCount++;
        emit studentCreationEvent(_studId, _regNo, _firstName, _lastName, _department, _DOB, _yearOfGraduation, _CGPA, _percentage);
    }

    function createStudentMarks(uint _s1, uint _s2, uint _s3, uint _s4, uint _s5, uint _s6, uint _s7, uint _s8) public
    {
        studentMarksList[studentMarksCount] = StudentMarks(_s1, _s2, _s3, _s4, _s5, _s6, _s7, _s8);
        studentMarksCount++;
        emit studentMarksEvent(_s1, _s2, _s3, _s4, _s5, _s6, _s7, _s8);
    }
    
    function getStudents() view public returns(uint[] memory)
    {
        return studIdList;
    }
    
    function getParticularStudent(uint _studId) public view returns (uint, string memory, string memory, string memory, string memory, uint, uint, string memory, string memory)
    {
        Student memory u = studentList[_studId];
        return (u.id, u.regNo, u.firstName, u.lastName, u.department, u.DOB, u.yearOfGraduation, u.CGPA, u.percentage);
    }

    function countStudents() view public returns (uint)
    {
        return studIdList.length;
    }
}