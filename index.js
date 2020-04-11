var inquirer = require("inquirer");
var fs = require("fs");
var axios = require("axios");
var generateMarkdown = require("./Develop/utils/generateMarkdown.js");
var avatarURL= "";
var githubEmail= "";

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
        name: "necessary"
    },
    {
        type: "input",
        message: "Briefly describe the usage of your project",
        name: "usage"
    },
    {
        type: "input",
        message: "Please list all contributors to your project, separated by a comma",
        name: "contributors"
    },
    {
        type: "input",
        message: "Briefly explain how to run any tests included in your project",
        name: "tests"
    }

];

function init() {
    inquirer
        .prompt(questions)
        .then(async function(data){
            console.log(data.username);
            const queryURL = "https://api.github.com/users/" + data.username;
            
            await axios
            .get(queryURL)
            .then(function(res) {

                avatarURL = res.data.avatar_url;
                console.log(avatarURL);
                githubEmail = res.data.email;
                console.log(githubEmail);
                });

            let rmFile = generateMarkdown(data);
            writeToFile("readYou.md", rmFile);
            })
            .catch(function(err) {
                console.log(err);
        })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err) {
            return console.log(err)
        }
    console.log("Success");
    })
}

init();
