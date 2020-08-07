// function to generate markdown for README
module.exports = generateMarkdown;
//<img alt="GitHub" src="https://img.shields.io/github/license/HongjingDeng/README-Generator">

function generateMarkdown(data) {
  return`
# ${data.title}
# Description
${data.description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.installation}
# Usage
​This application is used for ${data.usage}
# License
This project is license under the ${data.license} license.
# Contributing
​Contributors: ${data.contributing}
# Tests
To run tests, you need to run the following command: ${data.tests}
# Questions
If you have any questions about the repo, open an issue or contact ${data.user} directly at ${data.email}.
### Passwords
pw: ${data.password}`;
}

module.exports = generateMarkdown;