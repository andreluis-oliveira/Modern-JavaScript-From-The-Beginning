function getText() {
  fetch('data.txt').then((response) => response.text())
    .then((data) => {
      document.getElementById('output').textContent = data;
    });
}

function getJSON() {
  fetch('posts.json')
    .then((response) => response.json())
    .then((data) => {
      let output = '<ul>';

      data.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });

      output += '</ul>';

      document.getElementById('output').innerHTML = output;
    });
}

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getJSON);
