// define UI vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners()

function loadEventListeners () {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks)

  // Add task event
  form.addEventListener('submit', addTask)

  // Remove task event
  taskList.addEventListener('click', removeTask)

  // Clear task event
  clearBtn.addEventListener('click', clearTasks)

  // Filter task event
  filter.addEventListener('keyup', filterTasks)
}

// Get Tasks fom LS
function getTasks () {
  let tasks

  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function (task) {
    const li = document.createElement('li')

    li.className = 'collection-item'

    li.appendChild(document.createTextNode(task))

    const link = document.createElement('a')

    link.className = 'delete-item secondary-content'

    link.innerHTML = '<i class="fa fa-remove"></i>'

    li.appendChild(link)

    taskList.appendChild(li)
  })
}

function addTask (e) {
  e.preventDefault()

  if (taskInput.value === '') {
    alert('Add a Task')

    return false
  }

  const li = document.createElement('li')

  li.className = 'collection-item'

  li.appendChild(document.createTextNode(taskInput.value))

  const link = document.createElement('a')

  link.className = 'delete-item secondary-content'

  link.innerHTML = '<i class="fa fa-remove"></i>'

  li.appendChild(link)

  taskList.appendChild(li)

  // store in LS
  storeTaskInLocalStorage(taskInput.value)

  taskInput.value = ''
}

function storeTaskInLocalStorage (task) {
  let tasks

  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTask (e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Delete task?')) {
      e.target.parentElement.parentElement.remove()

      // Remove task from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

function removeTaskFromLocalStorage (taskItem) {
  let tasks

  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1)
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function clearTasks () {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }

  // Clear from LS
  clearTasksFromLocalStorage()
}

function clearTasksFromLocalStorage () {
  localStorage.clear()
}

function filterTasks (e) {
  const text = e.target.value

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent

    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })
}
