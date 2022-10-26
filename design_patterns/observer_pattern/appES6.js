class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    /* Filter out from the list whatever matches the callback
    function. If there is no match, the callback gets to stay
    on the list. The filter returns a new list and reassigns
    the list of observers */
    this.observers = this.observers.filter((item) => {
      if (item !== fn) {
        return item;
      }
    });
  }

  fire() {
    this.observers.forEach((item) => {
      item.call();
    });
  }
}

const click = new EventObserver();

// Click Handler
const getCurMilliseconds = function getCurMilliseconds() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function getCurSeconds() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', () => {
  click.subscribe(getCurMilliseconds);

  console.log(click);
});

document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.unsubscribe(getCurMilliseconds);

  console.log(click);
});

document.querySelector('.sub-s').addEventListener('click', () => {
  click.subscribe(getCurSeconds);

  console.log(click);
});

document.querySelector('.unsub-s').addEventListener('click', () => {
  click.unsubscribe(getCurSeconds);

  console.log(click);
});

document.querySelector('.fire').addEventListener('click', () => {
  click.fire();
});
