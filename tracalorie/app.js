// Storage Controller
const StorageCtrl = (function StorageCtrl () {
  // Public methods
  return {
    storeItem: function storeItem (item) {
      const items = this.getItemsFromStorage()

      // push new item
      items.push(item)

      // Set ls
      localStorage.setItem('items', JSON.stringify(items))
    },
    getItemsFromStorage: function getItemsFromStorage () {
      let items = []

      // Check if any items in ls
      if (localStorage.getItem('items') !== null) {
        // Get items from ls
        items = JSON.parse(localStorage.getItem('items'))
      }

      return items
    },
    updateItemStorage: function updateItemStorage (updatedItem) {
      const items = this.getItemsFromStorage()

      items.forEach((item, index) => {
        if (updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem)
        }
      })

      localStorage.setItem('items', JSON.stringify(items))
    },
    deleteItemFromStorage: function deleteItemFromStorage (id) {
      const items = this.getItemsFromStorage()

      items.forEach((item, index) => {
        if (id === item.id) {
          items.splice(index, 1)
        }
      })

      localStorage.setItem('items', JSON.stringify(items))
    },
    clearItemsFromStorage: function clearItemsFromStorage () {
      localStorage.removeItem('items')
    }
  }
})()

// Item Controller
const ItemCtrl = (function ItemCtrl () {
  // Item Constructor
  const Item = function Item (id, name, calories) {
    this.id = id
    this.name = name
    this.calories = calories
  }

  // Data Structure / State
  const data = {
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }

  return {
    getItems () {
      return data.items
    },
    addItem: function addItem (name, calories) {
      let ID

      // Create id
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1
      } else {
        ID = 0
      }

      // Calories to number
      calories = parseInt(calories)

      // Create new item
      const newItem = new Item(ID, name, calories)

      // Add to items array
      data.items.push(newItem)

      return newItem
    },
    getItemById: function getItemById (id) {
      let found = null

      data.items.forEach((item) => {
        if (item.id === id) {
          found = item
        }
      })

      return found
    },
    updateItem: function updateItem (name, calories) {
      // Calories to number
      calories = parseInt(calories)

      let found = null

      data.items.forEach((item) => {
        if (item.id === data.currentItem.id) {
          item.name = name
          item.calories = calories
          found = item
        }
      })

      return found
    },
    deleteItem: function deleteItem (id) {
      // Get ids
      const ids = data.items.map((item) => {
        return item.id
      })

      // Get index
      const index = ids.indexOf(id)

      // Remove item
      data.items.splice(index, 1)
    },
    clearAllItems: function clearAllItems () {
      data.items = []
    },
    setCurrentItem: function setCurrentItem (item) {
      data.currentItem = item
    },
    getCurrentItem: function getCurrentItem () {
      return data.currentItem
    },
    getTotalCalories: function getTotalCalories () {
      let total = 0

      data.items.forEach((item) => {
        total += item.calories
      })
      // Set total cal in data structure
      data.totalCalories = total

      return data.totalCalories
    },
    logData () {
      return data
    }
  }
})()

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }

  // Public methods
  return {
    populateItemList: function populateItemList (items) {
      let html = ''

      items.forEach((item) => {
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong>
          <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`
      })

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html
    },
    getItemInput: function getItemInput () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function addListItem (item) {
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block'
      // Create li element
      const li = document.createElement('li')
      li.className = 'collection-item'
      li.id = `item-${item.id}`
      li.innerHTML = `
        <strong>${item.name}: </strong>
        <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
        </a>`

      // Insert item
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement('beforeend', li)
    },
    updateListItem: function updateListItem (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems)

      // Turn Node list into array
      listItems = Array.from(listItems)

      listItems.forEach((listItem) => {
        const itemId = listItem.getAttribute('id')

        if (itemId === `item-${item.id}`) {
          document.querySelector(`#${itemId}`).innerHTML = `
          <strong>${item.name}: </strong>
          <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
          </a>`
        }
      })
    },
    deleteListItem: function deleteListItem (id) {
      const itemId = `#item-${id}`
      const item = document.querySelector(itemId)

      item.remove()
    },
    clearInput: function clearInput () {
      document.querySelector(UISelectors.itemNameInput).value = ''
      document.querySelector(UISelectors.itemCaloriesInput).value = ''
    },
    addItemToForm: function addItemToForm () {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories

      this.showEditState()
    },
    removeItems: function removeItems () {
      const itemList = document.querySelector(UISelectors.itemList)

      while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
      }
    },
    hideList: function hideList () {
      document.querySelector(UISelectors.itemList).style.display = 'none'
    },
    showTotalCalories: function showTotalCalories (totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent =
        totalCalories
    },
    clearEditState: function clearEditState () {
      this.clearInput()

      document.querySelector(UISelectors.updateBtn).style.display = 'none'
      document.querySelector(UISelectors.deleteBtn).style.display = 'none'
      document.querySelector(UISelectors.backBtn).style.display = 'none'
      document.querySelector(UISelectors.addBtn).style.display = 'inline-block'
    },
    showEditState: function showEditState () {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline-block'
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline-block'
      document.querySelector(UISelectors.backBtn).style.display = 'inline-block'
      document.querySelector(UISelectors.addBtn).style.display = 'none'
    },
    getSelectors: function getSelectors () {
      return UISelectors
    }
  }
})()

// App Controller
const App = (function App (ItemCtrl, StorageCtrl, UICtrl) {
  // Load event listeners
  const loadEventListeners = function loadEventListeners () {
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors()

    // Add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit)

    // Disable submit on enter
    document
      .addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault()
          return false
        }
      })

    // Edit icon click event
    document
      .querySelector(UISelectors.itemList)
      .addEventListener('click', itemEditClick)

    // Update item event
    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener('click', itemUpdateSubmit)

    // Update item event
    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener('click', itemDeleteSubmit)

    // Back button event
    document
      .querySelector(UISelectors.backBtn)
      .addEventListener('click', (e) => {
        UICtrl.clearEditState()
        e.preventDefault()
      })

    // Clear itens event
    document
      .querySelector(UISelectors.clearBtn)
      .addEventListener('click', clearAllItemsClick)
  }

  // Add item submit
  const itemAddSubmit = function itemAddSubmit (e) {
    // Get form input from UI Controller
    const input = UICtrl.getItemInput()

    // Check for name and calorie input
    if (input.name !== '' && input.calories !== '') {
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories)
      // Add item to UI list
      UICtrl.addListItem(newItem)

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories()
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories)

      // Store in localStorage
      StorageCtrl.storeItem(newItem)

      // Clear fields
      UICtrl.clearInput()
    }
    e.preventDefault()
  }

  // Click edit item
  const itemEditClick = function itemEditClick (e) {
    if (e.target.classList.contains('edit-item')) {
      // Get list item id
      const listId = e.target.parentNode.parentNode.id

      // Break into an array
      const listIdArr = listId.split('-')

      // Get the actual id
      const id = parseInt(listIdArr[1])

      // Get item
      const itemToEdit = ItemCtrl.getItemById(id)

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit)

      // Add item to form
      UICtrl.addItemToForm()
    }

    e.preventDefault()
  }

  // Update item submit
  const itemUpdateSubmit = function itemUpdateSubmit (e) {
    // Get item input
    const input = UICtrl.getItemInput()

    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories)

    // Update UI
    UICtrl.updateListItem(updatedItem)

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories()
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories)

    // Update local storage
    StorageCtrl.updateItemStorage(updatedItem)

    UICtrl.clearEditState()

    e.preventDefault()
  }

  // Delete button event
  const itemDeleteSubmit = function itemDeleteSubmit (e) {
    // Get current item
    const currentItem = ItemCtrl.getCurrentItem()

    // Delete from data structure
    ItemCtrl.deleteItem(currentItem.id)

    // Delete from UI
    UICtrl.deleteListItem(currentItem.id)

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories()
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories)

    // Delete from local storage
    StorageCtrl.deleteItemFromStorage(currentItem.id)

    UICtrl.clearEditState()

    e.preventDefault()
  }

  // Clear items event
  const clearAllItemsClick = function clearAllItemsClick () {
    // Delete all items from data structure
    ItemCtrl.clearAllItems()

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories()
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories)

    // Remove from UI
    UICtrl.removeItems()

    // Remove from localStorage
    StorageCtrl.clearItemsFromStorage()

    // Hide Ul
    UICtrl.hideList()
  }

  // Public methods
  return {
    init () {
      // Clear edit state / set initial state
      UICtrl.clearEditState()

      // Fetch items from data structure
      const items = ItemCtrl.getItems()

      // Check if any items
      if (items.length === 0) {
        UICtrl.hideList()
      } else {
        // Populate list with items
        UICtrl.populateItemList(items)
      }

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories()
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories)

      // Load event listeners
      loadEventListeners()
    }
  }
})(ItemCtrl, StorageCtrl, UICtrl)

// Initialize App
App.init()
