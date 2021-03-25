const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    // GitHub username
    {
      type: 'input',
      name: 'user-name',
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
      name: 'user-email',
      message: 'Enter your email address:'
    },
    // Repository Name
    {
      type: 'input',
      name: 'repo-name',
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
      name: 'project-title',
      message: 'Enter the title of your project:'
    },
    // Project Description
    {
      type: 'input',
      name: 'project-desc',
      message: `Enter your project's description:`
    },
    // Project Installation
    {
      type: 'input',
      name: 'project-install',
      message: 'Explain how the user would install (if necessary). Installation Section:',
    },
    // Project Usage
    {
      type: 'input',
      name: 'project-usage',
      message: `Enter your project's instructions and examples of it in use. Usage Section:`,
    },
    // Select license
    {
      type: 'list',
      name: 'project-license',
      message: `Choose your license for your project. If you don't have a preference, you can pick the MIT open-source license.`,
      // options taken from choosealicense.com
      choices: ['Academic 3.0', 'Apache 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla PL 2.0','ISC', 'MIT', 'Unlicense']
    },
    // Project Contributions
    {
      type: 'input',
      name: 'project-contribute',
      message: 'Explain how users can contribute to your project (if necessary). To Contribute:',
    },
    // Project Test
    {
      
      type: 'input',
      name: 'project-tests',
      message: 'Explain how to text (if necessary), or provide testing. Project Tests:'
    }
  ])
  
  .then(function (answers) {

    // build README page
    const buildPage = `
      
      `;

    // create file by writing to file system; inform user of success
    fs.writeFile('index.html', buildPage, (err) =>
      err ? console.log(err) : console.log("Successfully made index.html!")
    );
  });