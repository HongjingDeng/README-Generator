const inquirer = require("inquirer");
var fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questionArr = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'user',
        validate: user => {
    if (user.length < 10) {
        return "Username is too short.";
    }
    else if (user.toLowerCase() != user) {
        return "Username should be lowercase.";
    }
    else {
        // all validation checks passed
        return true;
    }
}
    },
{
    type: 'password',
        message: 'Please enter your password:',
            name: 'password',
                validate: password => {
                    if (password.length < 8) {
                        return "Password is too short."
                    }
                    else if (password.length > 32) {
                        return "Password is too long."
                    }
                    else {
                        return true;
                    }
                }
},
{
    type: 'input',
        message: 'What is your email?',
            name: 'email',
                validate: email => {
                    return (/^.+@.+\..+$/gi.test(email) ? true : `That's not an email!`)
                }
},
{
    type: "input",
        name: 'title',
            message: 'what is the title of your project?'
},
{
    type: "input",
        name: 'description',
            message: 'Description of your project:'
},
{
    type: 'checkbox',
        message: 'what technologies do you need to install here?',
            name: 'installation',
                choices: ['HTML', 'CSS', 'JS', 'Node', 'SQL', 'React']
},
{
    type: "input",
        name: 'usage',
            message: 'What is this app used for?'
},
{
    type: "input",
        name: 'license',
            message: 'What license was used for this README?',
                // validate: function renderLicenseBadge(license, github, title) {
                //     if (license !== null) {
                //         return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
                //     }
                //     return null;
                // }
},
{
    type: "input",
        name: 'contributing',
            message: 'Please add contributors'
},
{
    type: "input",
        name: 'tests',
            message: 'What command do you use to test this README?'
}
];
// Writing to a file 
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully wrote: " + fileName);
    })

}
// initialization function
function init() {
    inquirer.prompt(questionArr)
        .then(function (data) {
            writeToFile("sampleREADME.md", generateMarkdown(data));
        })
}

// run the app
init();
module.exports = questionArr;