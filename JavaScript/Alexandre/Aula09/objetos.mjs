let person = {
    firstName: 'Leonardo',
    lastName: 'Carrijo',
    greet: function() {
        console.log(`Hello World! I'm ${this.firstName}`)
    }
}

person.greet()