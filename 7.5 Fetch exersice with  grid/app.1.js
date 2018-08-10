











































document.getElementById('button1').addEventListener('click', getProfiles);


function getProfiles() {
  
  fetch('https://randomuser.me/api/?results=40&gender=female')
  .then((resp) => resp.json())
 .then((data) => {

     let authors = document.getElementById('authors');

      let newData = data.results;
      console.log(newData);
      let results = '';
 

      newData.forEach(person => {
    
        results += `
          <li>

          <img src="   ${person.picture.large}" alt="">
          <span>
            ${person.name.first}
            ${person.name.last}
          </span>
          </li>
      `;

      });

      authors.innerHTML = results;

    })
}


