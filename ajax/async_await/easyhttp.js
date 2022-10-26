/**
* EasyHTTP Library
*
* @version 3.0.0
* @license MIT
*/
class EasyHTTP {
  static async get (url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  static async post (url, data) {
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
}
// 'Content-type': 'application/json',
