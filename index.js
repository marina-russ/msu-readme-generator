const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    // GitHub username
    {
      type: 'input',
      name: 'userName',
      message: 'Enter your GitHub username:',
        // validate that user entered in at least 4 characters (the minimum length for a github username)
        validate: function (answer) {
          if (answer.length <4) {
            return console.log("That is not a valid GitHub username:");
          }
          return true;
        }
    },
    // User email address
    {
      type: 'input',
      name: 'userEmail',
      message: 'Enter your email address:'
    },
    // Repository Name
    {
      type: 'input',
      name: 'repoName',
      message: 'Enter the GitHub repository name:',
        // validate that user entered in 64 or less characters (64 is the maximum length allowed for a github repo name)
        validate: function (answer) {
        if (answer.length > 64) {
          return console.log("Your repository name cannot be longer than 64 characters.");
        }
        return true;
      }
    },
    // Project Title
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the title of your project:'
    },
    // Project Description
    {
      type: 'input',
      name: 'projectDesc',
      message: `Enter your project's description:`
    },
    // Project Installation
    {
      type: 'input',
      name: 'projectInstall',
      message: 'Explain how the user would install (if necessary). Installation Section:',
    },
    // Project Usage
    {
      type: 'input',
      name: 'projectUsage',
      message: `Enter your project's instructions and examples of it in use. Usage Section:`,
    },
    // Select license
    {
      type: 'list',
      name: 'projectLicense',
      message: `Choose your license for your project. If you don't have a preference, you can pick the MIT open-source license.`,
      // options taken from choosealicense.com
      choices: ['Academic 3.0', 'Apache 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla PL 2.0','ISC', 'MIT', 'Unlicense']
    },
    // Project Contributions
    {
      type: 'input',
      name: 'projectContributing',
      message: 'Explain how users can contribute to your project (if necessary). To Contribute:',
    },
    // Project Test
    {
      
      type: 'input',
      name: 'projectTests',
      message: 'Explain how to test (if necessary), or provide testing. Project Tests:'
    }
  ])
  
  .then(function (answers) {

    // build README page
    const buildPage = `
# :sparkles: ${answers.projectTitle} :sparkles:
<br>

![badge](https://img.shields.io/badge/license-${answers.projectLicense}-brightgreen)

## 📖 Table of Contents
- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## 🔍 Description <a name="description"></a>
${answers.projectDesc}
c
## 💾 Installation <a name="install"></a>
${answers.projectInstall}

## 💻 Usage <a name="usage"></a>
${answers.projectUsage}

## © License <a name="license"></a>
![badge](https://img.shields.io/badge/license-${answers.projectLicense}-brightgreen)
<br />
This application is covered by the ${answers.projectLicense} license. 

## 🙋‍♀️ Contributing <a name="contributing"></a>
${answers.projectContributing}

## 📝 Tests <a name="tests"></a>
${answers.projectTests}

## 💬 Questions <a name="questions"></a>
Feel free to reach out with any questions!

:octocat: Find me on GitHub: [${answers.userName}](https://github.com/${answers.userName})
<br />
✉️ Email me with any questions: ${answers.userEmail}
<br />
<br />
#### 👋 Thanks for taking a look at this repo!
This README was generated with ❤️ by [README-generator](github.com/marina-russ/readme-generator) ✨
`;

    // create file by writing to file system; inform user of success
    fs.writeFile('assets/README.md', buildPage, (err) =>
      err ? console.log(err) : console.log("Successfully made markdown.md!")
    );
  });