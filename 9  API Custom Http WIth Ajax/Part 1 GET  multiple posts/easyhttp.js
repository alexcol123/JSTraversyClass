// code for this app comes from https://jsonplaceholder.typicode.com/


function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  // self in this example is used so that the self inside the fuction refers to this 
  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {

      //IMPORTANT  = Note --> in app.js  the fuction parameteres come from code below --- in this example Null is balnk 
      // null, self.http.responseText but we call them
      // error and posts 
      //http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
      callback(null, self.http.responseText);

    } else {


      //IMPORTANT  = Note --> in app.js  the fuction parameteres come from code below --- in this example 'Error'  = means there is an error 
      // null, self.http.responseText but we call them
      // error and posts 
      //http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
      callback('Error: ' + self.http.status);

    }
  }

  this.http.send();
}

// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request










// function easyHTTP() {
//   this.http = new XMLHttpRequest();
// }

// // Make an HTTP GET Request
// easyHTTP.prototype.get = function(url, callback) {
//   this.http.open('GET', url, true);

//   // self in this example is used so that the self inside the fuction refers to this 
//   let self = this;

//   this.http.onload = function() {
//     if(self.http.status === 200) {
//       callback(null, self.http.responseText);
//     } else {
//       callback('Error: ' + self.http.status);
//     }
//   }

//   this.http.send();
// }

// // Make an HTTP POST Request

// // Make an HTTP PUT Request

// // Make an HTTP DELETE Request