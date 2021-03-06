// Book Constructor 
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor 
function UI(){}

UI.prototype.addBookToList = function(book){
 const list = document.getElementById('book-list');
 // Create a tr element
 const row = document.createElement('tr');
 // insert cols
 row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
 `;
// append row to the list
 list.appendChild(row);

 console.log(row);
}

// Clear fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}



// Event Listeners 
document.getElementById('book-form').addEventListener('submit', function(e){
  //console.log('Test');

  const 
    title =  document.getElementById('title').value,
    author =  document.getElementById('author').value;
    isbn =  document.getElementById('isbn').value;

    // console.log(title, author, isbn);

    // Instanciate a book
    const book = new Book(title, author, isbn);
    //console.log(book);

    // Instantiate the UI 
    const ui = new UI();


    // Add book to list
    ui.addBookToList(book);

  // Clear fields 
  ui.clearFields();


// prevent default behavior 
  e.preventDefault();
});