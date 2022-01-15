const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const writeFile = require('./src/generate-site');


const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');

let manager = [];
let engineer = [];
let intern = [];
let employee = {manager, engineer, intern};

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
        if (role === 'Manager') 
        {
            return inquirer
                .prompt([{
                    type: 'input',
                    name: 'officeNum',
                    message: 'Whats the Managers Office Number? '
                },
                {
                    type: 'confirm',
                    name: 'addRole',
                    message: 'Add another Employee?',
                    default: false
                }
            ])

            .then(({officeNum, addRole}) =>{
                manager.push(new Manager(name, id, email, officeNum))
                if (addRole) {
                    return promptUser();
                }
                
            })
        } else if (role === 'Engineer') {
            return inquirer
            .prompt([{
                type: 'input',
                name: 'github',
                message: 'Whats the Engineers Github username?'
            },
            {
                type: 'confirm',
                name: 'addRole',
                message: 'Add another Employee?',
                default: false
            }
        ])
        .then(({github, addRole}) => {
            engineer.push(new Engineer(name, id, email, github))
            console.log(employee)
            if (addRole) {
                return promptUser();
            }
        })
        } else if (role === 'Intern') {
            return inquirer
                .prompt([{
                    type: 'input',
                    name: 'school',
                    message: 'What School Does the Intern Attend?'
                },
            {
                type:'confirm',
                name: 'addRole',
                message: 'Add another Employee?',
                default: false
            }])
            .then (({school, addRole}) => {
                intern.push(new Intern(name, id, email, school))
                if (addRole) {
                    return promptUser();
                }
            })
        }
    })
}


promptUser()
    .then(employee => {
        return generatePage(employee)
    })
    .then(pageHtml => {
        return writeFile(pageHtml)
    })


    