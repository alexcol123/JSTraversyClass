// code for this app comes from https://jsonplaceholder.typicode.com/


const http = new easyHTTP;

// Get Posts
    // http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {

    //   // If error sent from Note i made on easyhttp.js
    //   if (err) {

    //     console.log(err);
    //   } else {


    //     console.log(posts);
    //   }
    // });



    // Create Data 
    const data = {
      title: 'Custom Post',
      body: 'This is a custom post'
    };

    // Create Post 
    // you can use same URL as above in post.  as long as u use a diferent method example Get  to Post  etc
    http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){

      // If error sent from Note i made on easyhttp.js
      if (err) {

        console.log(err);
      } else {


        console.log(post);
      }
  

    });