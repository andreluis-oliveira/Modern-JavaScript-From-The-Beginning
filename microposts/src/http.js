class EasyHTTP {
  async get (url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  async post (url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const json = await response.json()
    return json
  }

  async put (url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const json = await response.json()
    return json
  }

  async delete (url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })

    const json = await response.json()

    if (Object.keys(json).length) {
      return json
    }

    return { success: true, status: 'deleted', message: 'Resource deleted.' }
  }
}

export const http = new EasyHTTP()
