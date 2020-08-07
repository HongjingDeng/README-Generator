// function to generate markdown for README
module.exports = generateMarkdown;
//<img alt="GitHub" src="https://img.shields.io/github/license/HongjingDeng/README-Generator">

function generateMarkdown(data) {
  return`
# ${data.Title}
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.Installation}
# Usage
​This application is used for ${data.Usage}
# License
This project is license under the ${data.License} license.
# Contributing
​Contributors: ${data.Contributor}
# Tests
To run tests, you need to run the following command: ${data.Test}
# Questions
If you have any questions about the repo, open an issue or contact ${data.UserName} directly ${data.Email}.
`;
}

module.exports = generateMarkdown;