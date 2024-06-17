let express = require("express");
let app = express();
let port = 3000;

//1.GitHub Profile URL

function generateProfileUrl(username){
  return "https://github.com/" + username;
}

app.get("/github-profile",(req,res) => {
   let username = req.query.username;
   res.send(generateProfileUrl(username));
})

//2.Generate Certificate

function generateCertificate(firstName,lastName,courseName){
  return "This certificate is awarded to " + firstName + " " + lastName + " for successfully completing the " + courseName;
}

app.get("/certificate",(req,res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  res.send(generateCertificate(firstName,lastName,courseName));
})

//3.Grade In Percentage

function calculatePercentage(maths,science,english){
  let result = ((maths + science + english)/300 ) * 100;
  return "Your grade in percentage is " + parseInt(result) + "%";
}

app.get("/grade",(req,res) => {
  let maths = parseInt(req.query.maths);
  let science = parseInt(req.query.science);
  let english = parseInt(req.query.english);
  res.send(calculatePercentage(maths,science,english).toString());
})

//4.Split Bill With Friends

function splitBill(billAmount,numberOfFriends){
  let splitAmount = billAmount / numberOfFriends;
  return "Result: Each friend owes ₹" + splitAmount + " against the bill";
}

app.get("/split-bill",(req,res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseFloat(req.query.numberOfFriends);
  res.send(splitBill(billAmount,numberOfFriends).toString());
})

//5.Hourly Wage

function calculateSalary(hourlyWage,totalHours){
  let monthlySalary = hourlyWage * totalHours;
  return "Result: Your monthly salary is ₹" + monthlySalary;
}

app.get("/monthly-salary",(req,res) => {
  let hourlyWage = parseFloat(req.query.hourlyWage);
  let totalHours = parseFloat(req.query.totalHours);

  res.send(calculateSalary(hourlyWage,totalHours).toString());
})

app.listen(port,() => {
  console.log(`Server is running on port ${port}`);
})