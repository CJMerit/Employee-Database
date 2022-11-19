const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        //this.teamMembers = [];
    }

    // addTeam(member) {
    //     this.teamMembers.push(member)
    // }

    // getTeam() {
    //     return this.teamMembers
    // }

    getRole() {
        return '🍵 Manager';
    }
}

//teamMembers is a future development to maintain teams by manager. Requires local storage or node equivalent

module.exports = Manager;