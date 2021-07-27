
var fred = {
    firstName: 'Fred',
    lastName: 'Smith',
    email: 'fred@email.com',
    username: 'fred123',
    password: 'pass123',
    getSimpleUser: function(){
        return this.firstName.toLowerCase() + " " + this.lastName.toLowerCase();
    }
}

console.log(fred.getSimpleUser());

