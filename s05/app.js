/*

//Object.prototype
//Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff =  Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate age
Person.prototype.calculateAge = function(){
  const diff =  Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMaried = function(newLastName){
  this.lastName = newLastName;
}

Person.prototype.getFirstName = function(){
  return `${this.firstName}`;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

/*
console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMaried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));

console.log(john.getFirstName());

*/

/*
// Constructor
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person("John", "Doe");

//console.log(person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer("Tom", "Smith", "555-555-55555", "Standard");

console.log(customer1);

console.log(customer1.greeting());

 // Customer greeting
 Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company.`;
 }

 console.log(customer1.greeting());

 */

/*
 const personPrototypes = {
   greeting: function(){
     return `Hello there ${this.firstName} ${this.lastName}`;
   },
   getsMarried: function(newLastName){
     this.lastName = newLastName;
   }
 }

 const mary = Object.create(personPrototypes);

 mary.firstName = 'Mary';
 mary.lastName = 'Williams';
 mary.age = 30;

 console.log(mary);

 mary.getsMarried('Thompson')

console.log(mary);

const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brade'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
});

console.log(brad);

console.log(brad .greeting());

*/

/*
class Person{
  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`
  }

  calculateAge(){
    const diff = Date.now() -  this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y){
    return x + y;
  }

}

const mary = new Person('Mary', 'Willians', '11-13-1980');

mary.getMarried('Thompson')

console.log(Person.addNumbers(1,2));

*/

class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  greeting () {
    return `Hello there ${this.firstName} ${this.lastName}`
  }
}

class Customer extends Person {
  constructor (firstName, lastName, phone, membership) {
    super(firstName, lastName)

    this.phone = phone
    this.membership = membership
  }

  static getMemberShipCost () {
    return 500
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard')

console.log(john.greeting())

console.log(Customer.getMemberShipCost())
