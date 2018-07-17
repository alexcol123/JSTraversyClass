// //ES5 Way  and ES6 Ways
// //--------------------------------------------------------------------------------------------------------------->>

document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);




//  GET LOCAL TEXT ----- GET LOCAL TEXT ----- GET LOCAL TEXT ----- ----------------------->

// // get local text file es5 way ---------->
// function getText(){
//   fetch('test.txt')
//   .then(function(res){
//     return res.text();
//   })
//   .then(function(data){
//     console.log(data);
//     let output =   document.getElementById('output');
//     output.style.visibility = 'visible';
//     output.innerHTML = data;
    
    
//   })
//   .catch(function(err){
//     console.log(err);
//   })
// }


//get local text file es6 way ---------->
function getText(){
  fetch('test.txt')
  .then(res => res.text())
  .then(data => {
    let output =   document.getElementById('output');
    output.style.visibility = 'visible';
    output.innerHTML = data;
  })
  .catch(err => console.log(err));
}




//  GET LOCAL JSON ----- GET LOCAL JSON ----- GET LOCAL JSON -------  --------------------->

// // get local Json  data  es5 way ---------->
// function getJson(){
//   fetch('posts.json')
//   .then(function(res){
//     return res.json();
//   })
//   .then(function(data){
//     console.log(data);
//     let output = '';
//     data.forEach(function(post){
//       output += `
//       <li><b>${post.title}</b>,        </br> ${post.body}
//       </li>`;
//     });

//     outputOnUI =   document.getElementById('output');
//     outputOnUI.style.visibility = 'visible';
//     outputOnUI.innerHTML = output;
    
    
//   })
//   .catch(function(err){
//     console.log(err);
//   })
// }


// get local Json  data  es6  way ---------->
function getJson() {
  fetch('posts.json')
  .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `<li><b>${post.title}</b>, </br> ${post.body}</li>`;
      });
      outputOnUI =   document.getElementById('output');
      outputOnUI.style.visibility = 'visible';
      outputOnUI.innerHTML = output;
    })
    .catch(err => console.log(err));
}






//  GET EXTERNAL DATA ----- GET EXTERNAL DATA ----- GET EXTERNAL DATA -----  ----------------------->


// // Get from external API es5 way  
// function getExternal(){
//   fetch('https://api.github.com/users')
//   .then(function(res){
//     return res.json();
//   })
//   .then(function(data){
//     console.log(data);
//     let output = '';
//     data.forEach(function(user){
//       output += `
//       <li>${user.login}</li>`;
//     });
//     outputOnUI =   document.getElementById('output');
//     outputOnUI.style.visibility = 'visible';
//     outputOnUI.innerHTML = output;
//   })
//   .catch(function(err){
//     console.log(err);
//   })
// }


// Get from external API ES6    way  
function getExternal() {
  fetch('https://api.github.com/users')
  .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      outputOnUI =   document.getElementById('output');
      outputOnUI.style.visibility = 'visible';
      outputOnUI.innerHTML = output;
    })
    .catch(err => console.log(err));
}


















//  Same as above but using arrow functiosn   ES6  Way 
//--------------------------------------------------------------------------------------------------------------->>



// get local text file
function getText(){
  fetch('test.txt')
  .then(res => res.text())
  .then(data => {
    let output =   document.getElementById('output');
    output.style.visibility = 'visible';
    output.innerHTML = data;
  })
  .catch(err => console.log(err));
}



// Get local json data
function getJson() {
  fetch('posts.json')
  .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `<li><b>${post.title}</b>, </br> ${post.body}</li>`;
      });
      outputOnUI =   document.getElementById('output');
      outputOnUI.style.visibility = 'visible';
      outputOnUI.innerHTML = output;
    })
    .catch(err => console.log(err));
}












