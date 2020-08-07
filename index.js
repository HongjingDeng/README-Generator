const inquirer = require("inquirer");
var fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
        type: "input",
        name: 'title',
        message: 'what is the title of your projecct',
    },
    {
        type: "input",
        name: 'description',
        message: 'Description of your projecct:',
    },
    {
        type: "input",
        name: 'contents',
        message: 'Hit enter key to auto generate Table of Contents of your projecct:',
    },
    {
        type: "input",
        name: 'installation',
        message: 'Installation of your project:',
    },
    {
        type: "input",
        name: 'usage',
        message: 'Usage of your project:',
    },
    {
        type: "input",
        name: 'contributing',
        message: 'Please add contributors',
    },
    {
        type: "input",
        name: 'tests',
        message: 'Tests:',
    },
    {
        type: 'input',
        message: "What is your Github username?",
        name: 'user',
        validate: user => {
            if(user.length < 10){
                return "Username is too short.";
            }
            else if(user.toLowerCase() != user){
                return "Username should be lowercase.";
            }
            else{
                // all validation checks passed
                return true;
            }
        }
    },
    {
        type: 'password',
        message: 'Please enter your password',
        name: 'august',
        validate: pwVali => {
            if(pwVali.length < 8){
                return "Password is too short."
            }
            else if(pwVali.length > 32){
                return "Password is too long."
            }
            else{
                return true;
            }
        }
    }
  ])
  .then(answers => {
    console.log(answers.user);
    console.log(answers.pwVali);
    generateMarkdown(answers);
    const finishedMarkdown = profileWriter.generateMarkdown(answers);

    //var results = `#Title: ${answers.title}\n#Description: ${answers.description}\n###Table of Contents: ${answers.contents}\n###Description: ${answers.description}\n###Installation: ${answers.installation}\n###Usage: ${answers.usage}`
    fs.writeFile("sampleREADME.md", finishedMarkdown, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      });
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
// render license badges Fn
// function renderLicenseBadge(license, github, title) {
//     if (license !== “None”) {
//       return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
//     }
//     return ‘’
//   }