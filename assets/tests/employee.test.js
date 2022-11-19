const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('newEmployee', () => {
        it('Creates a new Employee object', () => {
            const employee = new Employee('John', 6, 'john@abc.com');

            expect(employee).toBeInstanceOf(Employee);
        })
    })
    describe('getName', () => {
        it('Should return the name of the employee', () => {
            const name = 'Eric';
            const employee = new Employee(name, 5, 'eric@abc.com');

            expect(employee.getName()).toEqual(name);
        })
    })
    describe('getID', () => {
        it('Should return the ID of the employee', () => {
            const id = 4;
            const employee = new Employee('Craig', id, 'eric@abc.com');

            expect(employee.getID()).toEqual(id);
        })
    })
    describe('getEmail', () => {
        it('Should return the email of the employee', () => {
            const email = 'betty@abc.com';
            const employee = new Employee('Betty', 3, email);

            expect(employee.getEmail()).toEqual(email);
        })
    })
    describe('getRole', () => {
        it('Should return the role of the employee', () => {
            const role = '🖋️ Employee';
            const employee = new Employee('Pam', 2, 'pam@abc.com');

            expect(employee.getRole()).toEqual(role);
        })
    })
})