const output = document.getElementById('output')

/*
const sayHello = function sayHello(){
  return 'Hello';
}
*/
// const sayHello = () => 'Hello';

// const sayHello = () => { msg: 'Hello'};

// const sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}`;

const users = ['Nathan', 'John', 'William']

/*
const nameLenghts = users.map(function(name) {
  return name.length;
});
*/

// Shorter
/*
const nameLenghts = users.map((name) => {
  return name.length;
});
*/

// Shortest
// const nameLenghts = users.map((name) => name.length);
