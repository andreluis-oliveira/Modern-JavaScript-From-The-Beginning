const output = document.getElementById('output');

// output.innerText = '';

// Sets - Store unique values of any type
const set1 = new Set();

// Add values to Set
set1.add(100);
set1.add('A String');
set1.add({ name: 'John' });
set1.add(true);

// console.log(set1);

// Get count
// console.log(set1.size);

// Check for values
// console.log(set1.has(100));

// Delete from Set
// set1.delete(100);

// console.log(set1);

// Iterating through Sets

// For... of
for (const item of set1) {
  // console.log(item);
}

// ForEach loop
set1.forEach((value) => {
  // console.log(value);
});

// Convert Set to Array
const setArr = Array.from(set1);
// console.log(setArr);
