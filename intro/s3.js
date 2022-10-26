// let val

/* Section 2 */

/*

//val = window.outerHeight;
//val = window.outerWidth;

//val = window.innerHeight;
//val = window.innerWidth;

//val = window.location;
//val = window.location.search;

//console.log(val);

let birthday = new Date('06/13/1988');

const today = new Date();

val = today.getMonth();

console.log(val);

const person = {
    firstname: 'Steve',
    lastname: 'Smith',
    age: 33,
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL',
    },
    getBirthYear: function(){
        return 2021 - this.age;
    }
};

val = person.hobbies[0];
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const cars = ['Hyundai', 'Honda', 'Toyota'];

cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'}
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);

const user = {
    firstName: 'Johm',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}

const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

let html;

function hello(){
    return 'hello';
}

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

document.body.innerHTML = html;

console.log(city.indexOf('a'));
console.log(city.charAt(2));
console.log(name.substr(0,4));
console.log(name.slice(0,4));
console.log(job.includes('Web'));

// function declarations
function greet(firstname = 'John', lastname= 'Doe'){

    return 'Hello ' + firstname + ' ' + lastname;

}

console.log(greet());

// function expressions

const square = function(x = 3){

    return x*x;
}

console.log(square());

(function(name){
    console.log('Hello ' + name);
})('Brad');

const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();

*/

/* Section 3 2 */

/*
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;

val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

console.log(val);

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});
*/

/* Section 3 3 */

/*
// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
*/

/* Section 3 4 */

/*

// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');

console.log(items);
console.log(items[0]);

items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul')
    .getElementsByClassName('collection-item');

console.log(listItems);

// document.getElementsByTagName

let lis = document.getElementsByTagName('li');

console.log(lis);

console.log(lis[0]);

lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Convert HTML collection into Array

lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){

    console.log(li.className);

    li.textContent = `${index}: Hello`;
});

console.log(lis);

// document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');

const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
    li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4';
}

console.log(items);

*/

/* Section 3 5 */

/*
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list.childNodes;
//val = list.childNodes[0];
//val = list.childNodes[0].nodeName;
//val = list.childNodes[0].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

val = list.children;

//list.children[1].textContent = 'Hello';

//list.children[3].children[0].id = 'test-link';

val = list.children[3].children[0];

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

// count child elements

val = list.childElementCount;

// Get parent node

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling

val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling

//val = listItem.prevElementSibling.nextElementSibling;

console.log(val);

*/

/* Section 3 6 */

/*

// Create Element

const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attributte
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World!'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

//console.log(li);

*/

/* Section 3 7 */

/*

// REPLACE ELEMENT

// Create element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

console.log(val);

*/

/* Section 3 8 */

/*

document.querySelector('.clear-tasks').addEventListener('click', function(e){

    val = e.target;

    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    // Event type
    val = e.type;

    console.log(val);

    e.preventDefault();

});

*/

/* Section 3 9 */

/*
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

clearBtn.addEventListener('click', runEvent);
clearBtn.addEventListener('dblclick', runEvent);
clearBtn.addEventListener('mouseup', runEvent);
clearBtn.addEventListener('mousedown', runEvent);

card.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseleave', runEvent);
card.addEventListener('mouseover', runEvent);
card.addEventListener('mouseout', runEvent);
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e){

    console.log(e.type);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    e.preventDefault();

}

*/

/* Section 3 10 */

/*

// Keyboard Input Event

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

taskInput.value = '';

//form.addEventListener('submit', runEvent);

//taskInput.addEventListener('keydown', runEvent);
//taskInput.addEventListener('keyup', runEvent);

taskInput.addEventListener('input', runEvent);

function runEvent(e){

    console.log(`Event Type: ${e.type}`);

    console.log(e.target.value);

    //heading.innerHTML = e.target.value;

    //console.log(taskInput.value);

    //e.preventDefault();
}

*/

/* Section 3 11 */

// Event Bubbling

/*
document.querySelector('.card-title').addEventListener('click',
function(){

    console.log('card title');
});

document.querySelector('.card-content').addEventListener('click',
function(){

    console.log('card content');
});

document.querySelector('.card').addEventListener('click',
function(){

    console.log('card');
});

document.querySelector('.col').addEventListener('click',
function(){

    console.log('col');
});
*/

/*

// Event Delegation

//const delItem = document.querySelector('.delete-item');

//delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){

    //if(e.target.parentElement.className === 'delete-item secondary-content'){
    //    console.log('delete item');
    //}

    if(e.target.parentElement.classList.contains('delete-item')){

        e.target.parentElement.parentElement.remove();

        console.log('delete item');
    }

}

*/

/* Section 3 12 */

// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'John');

// remove from  storage
// localStorage.removeItem('name');

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// console.log(name, age);

// clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault()

  const task = document.getElementById('task').value

  let tasks

  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))

  alert('Tasks saved')
})

const tasks = JSON.parse(localStorage.getItem('tasks'))

tasks.forEach(function (task) {
  console.log(task)
})

/* Section 4 1 */
