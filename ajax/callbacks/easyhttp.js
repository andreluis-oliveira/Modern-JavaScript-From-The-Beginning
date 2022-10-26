function EasyHTTP() {
  this.http = new XMLHttpRequest();
}

EasyHTTP.prototype.get = function get(url, callback) {
  this.http.open('GET', url, true);

  const self = this;

  this.http.onload = function onload() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`, null);
    }
  };

  this.http.send();
};

EasyHTTP.prototype.post = function post(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  const self = this;

  this.http.onload = function onload() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};
