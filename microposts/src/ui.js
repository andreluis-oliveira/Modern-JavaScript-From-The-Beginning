class UI {
  constructor () {
    this.post = document.querySelector('#posts')
    this.titleInput = document.querySelector('#title')
    this.bodyInput = document.querySelector('#body')
    this.idInput = document.querySelector('#id')
    this.postSubmit = document.querySelector('.post-submit')
    this.forState = 'add'
  }

  // Show all posts
  showPosts (posts) {
    let output = ''

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link text-decoration-none" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="delete card-link text-decoration-none" data-id="${post.id}">
              <i class="fa fa-remove"></i>
            </a>
          </div>
        </div>
      `
    })

    this.post.innerHTML = output
  }

  showAlert (message, className) {
    this.clearAlert()

    // Create div
    const div = document.createElement('div')
    // Add classes
    div.className = className
    // Add text
    div.appendChild(document.createTextNode(message))

    // Inser div
    this.post.before(div)

    // Timeout
    setTimeout(() => {
      this.clearAlert()
    }, 3000)
  }

  // Clear alert messagem
  clearAlert () {
    const currentAlert = document.querySelector('.alert')

    if (currentAlert) {
      currentAlert.remove()
    }
  }

  // Fill form to edit
  fillForm (data) {
    this.titleInput.value = data.title
    this.bodyInput.value = data.body
    this.idInput.value = data.id

    this.changeFormState('edit')
  }

  // Clear ID hidden value
  clearIdInput () {
    this.idInput.value = ''
  }

  // Change the form state
  changeFormState (type) {
    if (type === 'edit') {
      this.postSubmit.textContent = 'Update Post'
      this.postSubmit.className = 'post-submit btn btn-success mb-3'

      // Create cancel button
      const button = document.createElement('button')
      button.className = 'post-cancel btn btn-light mb-3'
      button.appendChild(document.createTextNode('Cancel Edit'))

      // Get parent
      const cardForm = document.querySelector('.card-form')
      // Get element to insert before
      const formEnd = document.querySelector('.form-end')
      // Inser cancel button
      cardForm.insertBefore(button, formEnd)
    } else {
      this.postSubmit.textContent = 'Publish'
      this.postSubmit.className = 'post-submit btn btn-primary mb-3'

      // Remove cancel button if it is there
      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel')
      }

      // Clear id input
      this.clearIdInput()

      // Clear text
      this.clearFields()
    }
  }

  // Clear all fields
  clearFields () {
    this.titleInput.value = ''
    this.bodyInput.value = ''
  }
}

export const ui = new UI()
