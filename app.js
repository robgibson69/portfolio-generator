


// const fs = require('fs');
const inquirer = require('inquirer');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

const promptUser = () => {
return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'githubUser',
            message: 'What is your GitHub username? (Required)'
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some info about yourself for an About section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'Project Name?'
        },
        {
            type: 'input',
            name: 'projectDesc',
            message: 'Project description?'
        },
        {
            type: 'input',
            name: 'githubLink',
            message: 'GitHub link?'
        }
    ]);
};

 promptUser().then(answers => console.log(answers));
