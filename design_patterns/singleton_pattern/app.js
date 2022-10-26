const Singleton = (function Singleton() {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'Brad' });
    return object;
  }

  return {
    getInstance: function getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
}());

const output = document.getElementById('output');

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// console.log(instanceA);
console.log(instanceA === instanceB);

output.innerText = instanceA.name;
