
//  Function init and call
function init() {}
init();
const inquirer = require("inquirer");
const fs = require("fs");

//  Questions
inquirer
  .prompt([
    {
      type: "input",
      message: "Please provide a title/headline for this project?",
      name: "headline",
    },

    {
      type: "input",
      message: "Why are you doing this project?",
      name: "why",
    },

    {
      type: "input",
      message: "What is interesting about this project?",
      name: "what",
    },

    {
      type: "input",
      message: "How was the project accomplished? (ex. tech)",
      name: "how",
    },

    {
      type: "input",
      message: "What are the installation instructions?",
      name: "instructions",
    },

    {
      type: "input",
      message: "What is the usage information?",
      name: "information",
    },

    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "guidelines",
    },

    {
      type: "input",
      message: "Are there any applicable or relevant tests?",
      name: "tests",
    },

    {
      type: "input",
      message: "How should project questions be addressed?",
      name: "questions",
    },

    {
      type: "list",
      message: "Please provide license information:",
      name: "license",
      choices: ["MIT", "Licensed (other)", "N/A", "Unlicensed"],
    },

    {
      type: "input",
      message: "Please provide an email address:",
      name: "email",
    },

    {
      type: "input",
      message: "Please provide a Github username:",
      name: "github",
    },
  ])

//  Layout and Load the ReadMe page
  .then((data) => {
    var string = `## Project Headline: ${data.headline}<br><br><br>
    Table of Contents:  
[Project Why](#why)<br>
[Project Designers Contact/Github](#contact)<br><br><br>
    
    
## Why, What and How, Installation, Usage, Contributors, and Testing
#### (why)
<br><br>
Project Why: ${data.why}
<br>
Project What: ${data.what}
<br>
Project How: ${data.how}
<br>
Installation Instructions:  ${data.instructions}
<br>
Usage Information: ${data.information}
<br>
Guidelines for Contributions to this Project:  ${data.guidelines}
<br>
Relevant Tests: ${data.tests}
<br>
<br>
## Contact, Github, Email, License
#### (contact information)
<br>
Questions Regarding this Project and/or its Usage: ${data.questions}
<br>
Project License: ${data.license}
<br>
Email Project Designer: [${data.email}](${data.email}/)
<br>
Designers Github Page: https://github.com/${data.github} `;

    fs.writeFileSync("README.md", string, (err) =>
      err ? console.log(err) : console.log("write successful")
    );
  });
