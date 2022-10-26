/* eslint-disable max-classes-per-file */
class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  recieve(message, from) {
    // eslint-disable-next-line no-console
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function Chatroom() {
  const users = {};

  return {
    register: function register(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function send(message, from, to) {
      if (to) {
        // Single user message
        to.recieve(message, from);
      } else {
        for (key in users) {
          if (users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    },
  };
};

const john = new User('John Doe');
const brad = new User('Brad');
const jeff = new User('Jeff');

const chatroom = new Chatroom();

chatroom.register(john);
chatroom.register(brad);
chatroom.register(jeff);

brad.send('Hello Jeff', jeff);
jeff.send('Hello Brad!', brad);
john.send('Hello Everyone!');
