// code for this app comes from https://jsonplaceholder.typicode.com/


const http = new easyHTTP;


//////////////////////////////////////////////
// Get Posts ---> to Get  multiple posts 

// http.get('https://jsonplaceholder.typicode.com/post', function(err, posts){


// // If error sent from Note i made on easyhttp.js
// if(err){

//   console.log(err);
// }else{


//   console.log(posts);
// }


// });


////////////////////////////////////////////////////
// Get Posts ---> to Get  single  post

http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {


  // If error sent from Note i made on easyhttp.js
  if (err) {

    console.log(err);
  } else {


    console.log(post);
  }


});