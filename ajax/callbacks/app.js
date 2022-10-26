const http = new EasyHTTP();

// Get Posts
/*
http.get('posts.json', (err, posts) => {
  if (posts) {
    posts = JSON.parse(posts);

    let output = '<ul>';

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    output += '</ul>';

    document.getElementById('posts').innerHTML = output;
  }
});

*/

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post.',
};

/*
// Create Post
http.post('post.json', data, (err, post) => {
  if (post) {
    const postElement = document.createElement('li');

    postElement.textContent = `<li>${post.title}</li>`;

    document.querySelector('#posts').appendChild(postElement);
  }
});
*/

const postElement = document.createElement('li');

postElement.appendChild(document.createTextNode(`${data.title}`));

document.getElementById('posts').appendChild(postElement);
