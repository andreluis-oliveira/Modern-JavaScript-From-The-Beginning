async function getCustomer () {
  // await response of the fetch call
  const response = await fetch('customer.json')

  // Only proceed once its resolved
  const data = await response.json()

  // only proceed once second promise its resolved
  return data
}

getCustomer().then((customer) => { document.getElementById('output').innerHTML = JSON.stringify(customer) })
