const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('newEngineer', () => {
        it('Creates a new Engineer object', () => {
            const engineer = new Engineer('John', 6, 'john@abc.com', 'GitJohn');

            expect(engineer).toBeInstanceOf(Engineer);
        })
    })
    describe('getName', () => {
        it('Should return the name of the engineer', () => {
            const name = 'Eric';
            const engineer = new Engineer(name, 5, 'eric@abc.com', 'GitEric');

            expect(engineer.getName()).toEqual(name);
        })
    })
    describe('getID', () => {
        it('Should return the ID of the engineer', () => {
            const id = 4;
            const engineer = new Engineer('Craig', id, 'eric@abc.com', 'GitCraig');

            expect(engineer.getID()).toEqual(id);
        })
    })
    describe('getEmail', () => {
        it('Should return the email of the engineer', () => {
            const email = 'betty@abc.com';
            const engineer = new Engineer('Betty', 3, email, 'GitBetty');

            expect(engineer.getEmail()).toEqual(email);
        })
    })
    describe('getRole', () => {
        it('Should return the role of the engineer', () => {
            const role = 'Engineer';
            const engineer = new Engineer('Pam', 2, 'pam@abc.com', 'GitPam');

            expect(engineer.getRole()).toEqual(role);
        })
    })
    describe('getGithub', () => {
        it('Should return the Github username of the engineer', () => {
            const github = 'GitSara';
            const engineer = new Engineer('Sara', 1, 'sara@abc.com', github);

            expect(engineer.getGithub()).toEqual(github);
        })
    })
})