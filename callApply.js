const person = {
    firstName: "Rahim",
    lastName: "Uddin",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const hero = {
    firstName: 'Hero',
    lastName: "Alom",
    salary: 2300
}

const khan = {
    firstName: 'Khan',
    lastName: "Jahan",
    salary: 3000
}

const rahman = {
    firstName: 'Rahman',
    lastName: "sami",
    salary: 5000
}

// -------------bind-------------
// person.chargeBill()
// const rahmanBill = person.chargeBill.bind(rahman);
// rahmanBill(2000);

// console.log(person.salary);
// console.log(rahman.salary);

// const khanBill = person.chargeBill.bind(khan);
// khanBill(300);

// -------------call-------------
// person.chargeBill.call(rahman, 1000, 50, 100);
// console.log(rahman.salary);

// -------------apply-------------
person.chargeBill.apply(rahman, [1000, 20, 30]);
console.log(rahman.salary);