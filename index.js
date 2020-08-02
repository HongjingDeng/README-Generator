const inquirer = require("inquirer");
var fs = require("fs");

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
        message: 'Contents of your projecct:',
    },
    {
        type: "input",
        name: 'installation',
        message: 'Installation of your projecct:',
    },
    {
        type: "input",
        name: 'usage',
        message: 'Usage of your projecct:',
    },
    //need liscence here
    {
        type: "input",
        name: 'contributing',
        message: 'Contributing:',
    },
    {
        type: "input",
        name: 'tests',
        message: 'Tests:',
    },
  ])
  .then(answers => {
    var results = `#Title: ${answers.title}\n#Description: ${answers.description}\n###Table of Contents: ${answers.contents}\n#Description: ${answers.description}\n#Installation: ${answers.installation}\n#Usage: ${answers.usage}`
    fs.writeFile("README.md", results, function(err) {
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