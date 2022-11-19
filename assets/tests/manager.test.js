const Manager = require('../lib/manager');
//const Engineer = require('../lib/engineer');

describe('Manager', () => {
    describe('newManager', () => {
        it('Creates a new manager object', () => {
            const manager = new Manager('John', 6, 'john@abc.com', 101);

            expect(manager).toBeInstanceOf(Manager);
        })
    })
    describe('getName', () => {
        it('Should return the name of the manager', () => {
            const name = 'Eric';
            const manager = new Manager(name, 5, 'eric@abc.com', 102);

            expect(manager.getName()).toEqual(name);
        })
    })
    describe('getID', () => {
        it('Should return the ID of the manager', () => {
            const id = 4;
            const manager = new Manager('Craig', id, 'eric@abc.com', 103);

            expect(manager.getID()).toEqual(id);
        })
    })
    describe('getEmail', () => {
        it('Should return the email of the manager', () => {
            const email = 'betty@abc.com';
            const manager = new Manager('Betty', 3, email, 'GitBetty', 104);

            expect(manager.getEmail()).toEqual(email);
        })
    })
    describe('getRole', () => {
        it('Should return the role of the manager', () => {
            const role = '🍵 Manager';
            const manager = new Manager('Pam', 2, 'pam@abc.com', 105);

            expect(manager.getRole()).toEqual(role);
        })
    })
    // describe('addTeam', () => {
    //     it('Should add new engineer to teamMembers array', () => {
    //         const manager = new Manager('Sara', 1, 'sara@abc.com', 106);
    //         const engineer = new Engineer('Felix', 8, 'felix@abc.com', 'GitFelix')

    //         manager.addTeam(engineer);

    //         expect(manager.teamMembers[0]).toEqual(expect.objectContaining({ name: 'Felix' }));
    //     })

    //     it('Should not add team members to other managers', () => {
    //         const managerOne = new Manager('Sara', 1, 'sara@abc.com', 106);
    //         const managerTwo = new Manager('Pam', 2, 'pam@abc.com', 105)
    //         const engineer = new Engineer('Felix', 8, 'felix@abc.com', 'GitFelix')

    //         managerOne.addTeam(engineer);

    //         expect(managerTwo.teamMembers.length).toEqual(0);
    //     })
    // })
    // describe('getTeam', () => {
    //     it("Should return the manager's team", () => {
    //         const manager = new Manager('Sara', 1, 'sara@abc.com', 106);
    //         const engineerOne = new Engineer('Felix', 8, 'felix@abc.com', 'GitFelix')
    //         const engineerTwo = new Engineer('Charlotte', 9, 'charlotte@abc.com', 'GitCharlotte');

    //         manager.addTeam(engineerOne);
    //         manager.addTeam(engineerTwo);

    //         const team = manager.getTeam()

    //         expect(team).toContain(engineerOne);
    //         expect(team).toContain(engineerTwo);
    //     })
    // })
})