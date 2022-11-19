const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager')
let employees = [];

const createHTML = () => {
    let sortedList = [];
    for(let i = 0; i < employees.length; i++) {
        sortedList
    }

}

const deleteCheck = (newEmployee, index) => {
    console.log(employees[index])
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Do you wish the delete the old employee entry?',
                choices: ['Yes', 'No'],
                name: 'entryDelete'
            }
        ])
        .then((response) => {
            if(response.entryDelete === 'Yes') {
                employees.splice(index, 1)
                if(newEmployee.github) {
                    let engineer = new Engineer(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.github);
                    employees.push(engineer);
                }
                else {
                    let intern = new Intern(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.school);
                    employees.push(intern);
                }
                console.log('Old employee deleted, and new employee added');
                chooseEntry();
            }
            else {
                chooseEntry();
            }
        })
}

const enterIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'name'
            },
            {
                type: 'number',
                message: "What is the intern's employee ID?",
                name: 'id'
            },
            {
                type: 'input',
                message: "What is the intern's email?",
                name: 'email'
            },
            {
                type: 'input',
                message: "What is the intern's school?",
                name: 'school'
            }
        ])
        .then((response) => {
            if(response.name === '' || response.id === '' || response.email === '' || response.school === '') {
                console.log('All inputs are required!');
                chooseEntry();
            }
            else if(isNaN(response.id)) {
                console.log('ID must be a number');
                chooseEntry();
            }
            else {
                if(employees.find(search => search.id === response.id)) {
                    let index = employees.findIndex(search => search.id === response.id)
                    console.log('That employee ID is already in use.')
                    deleteCheck(response, index);
                }
                else if(employees.find(search => search.name === response.name)) {
                    let index = employees.findIndex(search => search.name === response.name)
                    console.log('This employee has already been entered!');
                    deleteCheck(response, index);
                }
                else {
                    let intern = new Intern(response.name, response.id, response.email, response.school);
                    employees.push(intern);
                    chooseEntry();
                }
            }

        })
}

const enterEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the engineer's name?",
                name: 'name'
            },
            {
                type: 'number',
                message: "What is the engineer's employee ID?",
                name: 'id'
            },
            {
                type: 'input',
                message: "What is the engineer's email?",
                name: 'email'
            },
            {
                type: 'input',
                message: "What is the engineer's Github username?",
                name: 'github'
            }
        ])
        .then((response) => {
            if(response.name === '' || response.id === '' || response.email === '' || response.github === '') {
                console.log('All inputs are required!');
                chooseEntry();
            }
            else if(isNaN(response.id)) {
                console.log('ID must be a number');
                chooseEntry();
            }
            else {
                if(employees.find(search => search.id === response.id)) {
                    let index = employees.findIndex(search => search.id === response.id)
                    console.log('That employee ID is already in use.')
                    deleteCheck(response, index);
                }
                else if(employees.find(search => search.name === response.name)) {
                    let index = employees.findIndex(search => search.name === response.name)
                    console.log('This employee has already been entered!');
                    deleteCheck(response, index);
                }
                else {
                    let engineer = new Engineer(response.name, response.id, response.email, response.github);
                    employees.push(engineer);
                    chooseEntry();
                }
            }
        })
}

const chooseEntry = () => {
    console.log(employees)
    inquirer
        .prompt([
            {
                type: 'rawlist',
                message: 'Which employee role do you want to enter?',
                choices: ['Engineer', 'Intern', 'Finish'],
                name: 'choice'
            }
        ])
        .then((response) => {
            switch(response.choice) {
                case 'Engineer':
                    enterEngineer();
                    break;
                case 'Intern':
                    enterIntern();
                    break;
                case 'Finish':
                    createHTML();
                    break;
            }
        })
}

const init = () => {
    inquirer    
        .prompt([
            {
                type: 'input',
                message: "What is the team manager's name?",
                name: 'name'
            },
            {
                type: 'number',
                message: "What is the team manager's employee ID?",
                name: 'id'
            },
            {
                type: 'input',
                message: "What is the team manager's email?",
                name: 'email'
            },
            {
                type: 'input',
                message: "What is the team manager's office number?",
                name: 'office'
            }
        ])
        .then((response) => {
            console.log(typeof(response.id));
            if(response.name === '' || response.id === '' || response.email === '' || response.office === '') {
                console.log('All inputs are required!');
                init();
            }
            else if(isNaN(response.id)) {
                console.log('ID must be a number');
                init();
            }
            else {
                let manager = new Manager(response.name, response.id, response.email, response.office)
                employees.push(manager);
                chooseEntry();
            }
        })
}

init();