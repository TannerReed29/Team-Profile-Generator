const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');


const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the Employee?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the Employee. '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the Id Number of the Employee. '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the Email of the Employee. '
        }
    ])

    .then(({role, name, id, email}) => {

    })
}


promptUser()