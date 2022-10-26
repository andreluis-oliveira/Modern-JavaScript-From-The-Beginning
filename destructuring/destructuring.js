// const output = document.getElementById('output')

let a; let
  b; let rest
[a, b] = [100, 200];
// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = {
  a: 100, b: 200, c: 300, d: 400, e: 500
});

// output.innerText = `${a} ${b}`;

({ a, b, ...rest } = {
  a: 100, b: 200, c: 300, d: 400, e: 500
})

console.log(rest)

// Array Destructuring

// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

/*
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let person1; let person2; let
  person3;
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);

*/

const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello () {
    console.log('Hello')
  }
}

/*
// Old ES5
const { name } = person; const { age } = person; const
  { city } = person;
*/

// ES6 Destructuring
const {
  name, age, city, sayHello
} = person

// console.log(name, age, city);

console.log(name, age, city)

sayHello()
