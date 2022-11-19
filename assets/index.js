const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager')
let employees = [];

const enterNewManager = () => {
    inquirer    
        .prompt([
            {
                type: 'input',
                message: 'What is your full name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is your employee ID number?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is your work email?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'office'
            }
        ])
        .then((response) => {
            let emp = response.name;
            emp = new Manager(response.name, response.id, response.email, response.office)
            console.log(emp)
        })
}

const init = () => {
    inquirer
        .prompt([
            {
                type: 'rawlist',
                message: 'Are you a new manager?',
                choices: ['Yes', 'No'],
                name: 'new'
            }
        ])
        .then((response) => {
            if(response.new === 'Yes') {
                enterNewManager();
            }
            else {
                getManagerInfo();
            }
        })
}

init();