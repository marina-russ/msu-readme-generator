const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    // GitHub username
    {
      type: 'input',
      name: 'name-user',
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
      name: 'email-user',
      message: 'Enter your email address:'
    },
    // Repository Name
    {
      type: 'input',
      name: 'name-repo',
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
      // https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository
      choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']

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