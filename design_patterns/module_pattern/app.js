// Basic Structure

/*
(function () {
  // Declare private vars and functions

  return {
    // Declare public var and functions
  }
}());
*/

// const output = document.getElementById('output');
// output.innerText = '';

// Standard Module Pattern

/*
const UICtrl = (function UICtrl() {
  const text = 'Hello World';

  const changeText = function changeText() {
    const element = document.querySelector('#output');
    element.textContent = text;
  };

  return {
    callChangeText() {
      changeText();
    },
  };
}());

UICtrl.callChangeText();
*/
/*
// Revealing Module Pattern
const ItemCtrl = (function ItemCtrl() {
  const data = [];

  function add(item) {
    data.push(item);
  }

  function get(id) {
    return data.find((item) => item.id === id);
  }

  return {
    add,
    get,
  };
}());

ItemCtrl.add({ id: 1, name: 'John' });

const output = document.getElementById('output');
output.innerText = ItemCtrl.get(1).name;

*/
