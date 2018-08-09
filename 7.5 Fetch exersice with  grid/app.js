


async function results (){
  fetch('https://randomuser.me/api/?results=20')
  .then((resp) => resp.json())
  .then((data) => {
    let uiResults = document.getElementById('authors');
    let authors = data.results;
    console.log(authors);

    let res = '';

    authors.forEach(person => {
      res +=`
      <li>
      <img src="${person.picture.large}" alt="image" width="50">
        <span>
          ${person.name.first} <br> ${person.name.last}
        </span>
      </li>
      `;
    });
  


    uiResults.innerHTML = res;
  })



}


results();
