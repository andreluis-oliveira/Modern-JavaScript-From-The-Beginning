const http = new EasyHTTP()

// Get Posts
http.get('posts.json').then((posts) => {
  let output = '<ul>'

  posts.forEach((post) => {
    output += `<li>${post.title}</li>`
  })

  output += '</ul>'

  document.getElementById('posts').innerHTML = output
}).catch((err) => { document.getElementById('posts').innerHTML = err })

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post.'
}

// Create Post
http.post('post.json', data)
  .then((post) => {
    const postElement = document.createElement('li')

    postElement.appendChild(document.createTextNode(`${post.title}`))

    document.getElementById('posts').appendChild(postElement)
  }).catch((err) => {})
