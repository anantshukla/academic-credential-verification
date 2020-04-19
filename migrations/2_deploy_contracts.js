const StudentDetails = artifacts.require("StudentDetails");

module.exports = function(deployer) {
  deployer.deploy(StudentDetails);
};