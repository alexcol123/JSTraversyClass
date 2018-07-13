// code for this app comes from https://jsonplaceholder.typicode.com/


const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){


// If error sent from Note i made on easyhttp.js
if(err){

  console.log(err);
}else{


  console.log(posts);
}


});
