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


    //----------------------------------------------------------------

    // Create Post 
    // you can use same URL as above in post.  as long as u use a diferent method example Get  to Post  etc

            // http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){

            //   // If error sent from Note i made on easyhttp.js
            //   if (err) {

            //     console.log(err);
            //   } else {


            //     console.log(post);
            //   }
          

            // });




  //----------------------------------------------------------------

  // Update post 
  // this will update the create post data that we submited in the Post example 
  // they have 100 post so to change wich one i can just change the number at the endo of the put req 
  // exp  'https://jsonplaceholder.typicode.com/posts/2' or 'https://jsonplaceholder.typicode.com/posts/54'
 
  // http.put('https://jsonplaceholder.typicode.com/posts/85', data, function(err, post){

  //   // If error sent from Note i made on easyhttp.js
  //   if (err) {

  //     console.log(err);
  //   } else {


  //     console.log(post);
  //   }

  // });




    // DELET POST ----------------------------------------------------------------

     http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {

      // If error sent from Note i made on easyhttp.js
      if (err) {

        console.log(err);
      } else {
        
        console.log(response);
      }
    });