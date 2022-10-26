import { http } from './http.js'
import { ui } from './ui.js'

// Get Posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts)

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost)

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit)

// Listen for cancel
document.querySelector('#posts').addEventListener('click', cancelEdit)

// Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost)

// Prevent form submit
document.querySelector('#form-post').addEventListener('submit', preventSubmit)

function getPosts () {
  http.get('http://localhost:3000/posts')
    .then(
      data => ui.showPosts(data)
    ).catch(err => console.log(err))
}

function submitPost () {
  const title = document.querySelector('#title').value
  const body = document.querySelector('#body').value
  const id = document.querySelector('#id').value

  // Validate input
  if (title === '' || body === '') {
    ui.showAlert('Please make sure all fields are filled in correctly.', 'alert alert-warning')

    // early return
    return
  }

  document.querySelector('.post-submit').disabled = true

  const data = {
    title,
    body
  }

  // Check for ID
  if (id === '') {
    // Create Post
    http.post('http://localhost:3000/posts', data)
      .then(data => {
        ui.showAlert('Post added', 'alert alert-success')
        ui.clearFields()

        document.querySelector('.post-submit').disabled = false

        getPosts()

        return true
      }).catch(
        err => console.log(err)
      )
  } else {
    // Update Post
    http.put(`http://localhost:3000/posts/${id}`, data)
      .then(data => {
        ui.showAlert('Post updated', 'alert alert-success')
        ui.changeFormState('add')

        document.querySelector('.post-submit').disabled = false

        getPosts()

        return true
      }).catch(
        err => console.log(err)
      )
  }
}

function preventSubmit (e) {
  e.preventDefault()
}

function enableEdit (e) {
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
    const body = e.target.parentElement.previousElementSibling.textContent

    const data = {
      id,
      title,
      body
    }

    // Fill form with current post
    ui.fillForm(data)
  }

  e.preventDefault()
}

// Delete post
function deletePost (e) {
  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id

    http.delete(`http://localhost:3000/posts/${id}`)
      .then(data => {
        ui.showAlert('Post removed', 'alert alert-success')

        getPosts()

        return true
      }).catch(
        err => console.log(err)
      )
  }

  e.preventDefault()
}

// Cancel edit state
function cancelEdit (e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add')
  }

  e.preventDefault()
}
