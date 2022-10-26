const output = document.getElementById('output');

const user = { email: 'jdoe@gmail.com' };

try {
  // myFunction();
  // null.myFunction();

  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (e) {
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);

  // output.innerText = e;

  output.innerText = `User Error: ${e.message}`;
} finally {
  console.log('Finally runs.');
}
