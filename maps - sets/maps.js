const output = document.getElementById('output');

// output.innerText = '';

// Maps = key - value pairs - can use ANY type as key or value
const map1 = new Map();

// Set Keys
const key1 = 'some string';
const key2 = {};
const key3 = function () {};

// Set Map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Const values
// console.log(map1.size);

// Iterating Maps

// Loop using for...of to get keys and values
for (const [key, value] of map1) {
  // console.log(`${key} = ${value}`);
}

// Iterate keys only
for (const key of map1.keys()) {
  // console.log(key);
}

// Iterate values only
for (const value of map1.values()) {
  // console.log(value);
}

// Loop with forEach
map1.forEach((value, key) => {
  // console.log(`${key} = ${value}`);
});

// Convert to Arrays
// const keyValArr = Array.from(map1);

// console.log(keyValArr);

// Create an array of the values
// const valArr = Array.from(map1.values());

// console.log(valArr);

// Create an array of the keys
// const keyArr = Array.from(map1.keys());
// console.log(keyArr);
