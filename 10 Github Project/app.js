
// // Init Github
const github = new Github;


// init UI 
const ui = new UI;

// Search input 
const searchUser = document.getElementById('searchUser');

// search input event listener 
searchUser.addEventListener('keyup', (e) =>{
  // Get input text 
  const userText = e.target.value;


  if(userText !== ''){
    console.log(userText);
      // make http call
      github.getUser(userText)
      .then(data =>{
        console.log(data);
       if(data.profile.message === 'Not Found'){
         // Show Alert
         ui.showAlert('User not found', 'alert alert-danger')

       }else{
        // Show the profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
       }
      })

  }else{
    // Clear the profile
    ui.clearProfile()
  }
})












