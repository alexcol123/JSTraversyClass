// steps to follow 
// 1 do Html page 



//2 Add const data bellow
const data = [
  {
    name: 'John Doe',
    age: 42,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }, 
   {
    name: 'Latifa Jackson',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Detroit MI',
    image: 'https://randomuser.me/api/portraits/women/62.jpg'
  },
  {
    name: 'James Trump',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/43.jpg'
  }, 
   {
    name: 'Jenn Thompson',
    age: 32,
    gender: 'female',
    lookingfor: 'male',
    location: 'Washington DC',
    image: 'https://randomuser.me/api/portraits/women/63.jpg'
  }
];






//  Step 4 
// place the iterator in a variable 
const profiles = profileIterator(data);



//  Step 5
// Next Event
document.getElementById('next').addEventListener('click', nextProfile);


//  Step 6
// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}


//  Step 7
// DIsplay  1st profile automatically
nextProfile();






//  Step 3    Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}