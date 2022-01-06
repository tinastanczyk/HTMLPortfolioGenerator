const fs = require('fs');
const inquirer = require('inquirer');
const markDown = require('./generateMarkdown');

// create array of questions

const questions = [
  {
    type: 'input',
    message: 'What is your full name?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Where are you located?',
    name: 'location',
  },
  {
    type: 'input',
    message: 'Write a short description about yourself.',
    name: 'bio',
  },
  {
    type: 'input',
    message: 'Paste your LinkedIn Profile Link.',
    name: 'linkedIn',
  },
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'github',
  },
];

// create function to write file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, markDown(data), (err) =>
     err ? console.error(err) : console.log("Success!")
   );
 }

// create function to initiate application
 function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      // generating new readme in separate folder so it doesn't overwrite the application's readme
      writeToFile("./assets/index.html", response)
      writeToFile("./assets/style.css", response)
  });
}
// call function that initiates application
init();
