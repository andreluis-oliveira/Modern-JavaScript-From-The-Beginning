// Book Constructor
class Book {
  constructor (title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

// Local Storage Class
class Store {
  static getBooks () {
    let books

    if (localStorage.getItem('books') === null) {
      books = []
    } else {
      books = JSON.parse(localStorage.getItem('books'))
    }

    return books
  }

  static displayBooks () {
    const books = Store.getBooks()

    books.forEach(function (book) {
      const ui = new UI()

      ui.addBook(book)
    })
  }

  static addBook (book) {
    const books = Store.getBooks()

    books.push(book)

    localStorage.setItem('books', JSON.stringify(books))
  }

  static removeBook (isbn) {
    const books = Store.getBooks()

    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1)
      }
    })

    localStorage.setItem('books', JSON.stringify(books))
  }
}

// UI Constructor
class UI {
  addBook (book) {
    const list = document.getElementById('book-list')

    const row = document.createElement('tr')

    row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="delete">X</a></td>
      `

    list.appendChild(row)
  }

  deleteBook (target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove()
    }
  }

  clearFields () {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
  }

  showAlert (message, type) {
    const div = document.createElement('div')

    div.className = `alert ${type}`

    div.appendChild(document.createTextNode(message))

    const container = document.querySelector('.container')

    const form = document.querySelector('#book-form')

    container.insertBefore(div, form)

    setTimeout(() => {
      document.querySelector('.alert').remove()
    }, 3000)
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks)

// Event Listeners
document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault()

  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const isbn = document.getElementById('isbn').value

  const book = new Book(title, author, isbn)

  Store.addBook(book)

  const ui = new UI()

  // Validatie
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    ui.addBook(book)

    ui.showAlert('Book added!', 'success')

    ui.clearFields()
  }
})

document.getElementById('book-list').addEventListener('click', (e) => {
  e.preventDefault()

  const ui = new UI()

  ui.deleteBook(e.target)

  Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

  ui.showAlert('Book removed!', 'success')
})
