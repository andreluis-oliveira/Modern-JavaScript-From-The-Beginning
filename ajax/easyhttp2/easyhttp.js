/**
* EasyHTTP Library
*
* @version 2.0.0
* @license MIT
*/
class EasyHTTP {
  get (url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  }

  post (url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then(data = resolve(data))
        .catch((err) => reject(err))
    })
  }
}
