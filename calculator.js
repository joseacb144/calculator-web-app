// Import/Require Express and body-parser to be utilized by app
const express = require("express");
const bodyParser = require("body-parser");

// Initiate app to use express method
const app = express();
// This allows app to use body-parser
app.use(bodyParser.urlencoded({extended: true}));

// The following code is used for the home route (Calculator)
app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res){
  //body-parser is used to retreive number inputs
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1+num2;
  res.send("The result of the calculation is: " + result);
})

// The following code is used for the /bmicalculator route
app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
  //body-parser is used to retreive number inputs for bmi
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var result = weight/(height*height);

  res.send("Your BMI is: " + result);
})

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
})
