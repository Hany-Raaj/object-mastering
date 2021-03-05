class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const hero = new Person('Jhanggir', 'Alam', 30000);
console.log(hero);

const friend = new Person('Sirazul', 'Islam', 40000);
console.log(friend);