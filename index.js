var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./Develop/utils/generateMarkdown.js");

let data;

const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the name of your repository?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your repository?",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter all dependencies needed to run your project, separated by a comma.",
        name: "dependencies"
    }

];

inquirer
    .prompt(questions)
    .then(function(data){
        console.log(data);
        var queryURL = "http:" + data.username;
        console.log(queryURL);
        rmFile = generateMarkdown(data);
        writeToFile("readYou.md", rmFile);
    })
    
    .catch(function(err) {
        console.log(err);
      });
    ;

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err) {
            return console.log(err)
        }
    console.log("Success");
    })
}
    

// function init() {

// }

// init();
