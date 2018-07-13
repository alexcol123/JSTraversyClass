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




// Part 3   Post ------------------------------------------->

// Make an HTTP POST Request

easyHTTP.prototype.post= function(url, data, callback){
  
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');



    // self in this example is used so that the self inside the fuction refers to this 
    let self = this;

    this.http.onload = function () {

      /// the response text bellow should be the  post  we aded , if so we should get id of 101 , because there were only 100 post on original request so this should be the 101
      callback(null, self.http.responseText);
    }



  // Code bellow converts data to json format
  this.http.send(JSON.stringify(data));

}




// Part 4   Put  ------------------------------------------->

// Make an HTTP POST Request

easyHTTP.prototype.put= function(url, data, callback){
  
  this.http.open('PUT', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');



    // self in this example is used so that the self inside the fuction refers to this 
    let self = this;

    this.http.onload = function () {

      /// the response text bellow should be the  post  we aded , if so we should get id of 101 , because there were only 100 post on original request so this should be the 101
      callback(null, self.http.responseText);
    }



  // Code bellow converts data to json format
  this.http.send(JSON.stringify(data));

}




