const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('newIntern', () => {
        it('Creates a new intern object', () => {
            const intern = new Intern('John', 6, 'john@abc.com', 'UC Davis');

            expect(intern).toBeInstanceOf(Intern);
        })
    })
    describe('getName', () => {
        it('Should return the name of the intern', () => {
            const name = 'Eric';
            const intern = new Intern(name, 5, 'eric@abc.com', 'UC Berkeley');

            expect(intern.getName()).toEqual(name);
        })
    })
    describe('getID', () => {
        it('Should return the ID of the intern', () => {
            const id = 4;
            const intern = new Intern('Craig', id, 'eric@abc.com', 'Oregon State');

            expect(intern.getID()).toEqual(id);
        })
    })
    describe('getEmail', () => {
        it('Should return the email of the intern', () => {
            const email = 'betty@abc.com';
            const intern = new Intern('Betty', 3, email, 'GitBetty', 'Sac State');

            expect(intern.getEmail()).toEqual(email);
        })
    })
    describe('getRole', () => {
        it('Should return the role of the intern', () => {
            const role = '🏫 Intern';
            const intern = new Intern('Pam', 2, 'pam@abc.com', 'Harvard');

            expect(intern.getRole()).toEqual(role);
        })
    })
    describe('getSchool', () => {
        it('Should return the school username of the intern', () => {
            const school = 'UCLA';
            const intern = new Intern('Sara', 1, 'sara@abc.com', school);

            expect(intern.getSchool()).toEqual(school);
        })
    })
})