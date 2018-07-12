// Book Constructor 
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor 
function UI() {}

UI.prototype.addBookToList = function (book) {
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
// console.log(row);
}

// SHow Alert 
UI.prototype.showAlert = function(message, className){
   // create div
   const div =  document.createElement('div');
   // add classes 
   div.className = `alert ${className}`;
   // add Textnode
  div.appendChild(document.createTextNode(message));
  // Get Parent 
  const container = document.querySelector('.container');
  // Get form 
  const form = document.querySelector('#book-form');
  // Insert Alert 
  container.insertBefore(div, form);

  // Timeout after 3 seconds 
  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000);
}


// Delete Book 
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

// Clear fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


// Event listener for Add book ------------------

// Event Listeners 
document.getElementById('book-form').addEventListener('submit', function (e) {
  //console.log('Test');

  const
    title = document.getElementById('title').value,
    author = document.getElementById('author').value;
  isbn = document.getElementById('isbn').value;

  // console.log(title, author, isbn);

  // Instanciate a book
  const book = new Book(title, author, isbn);
  //console.log(book);

  // Instantiate the UI 
  const ui = new UI();

  // Validate 
  if (title === '' || author === '' || isbn === '') {
    // Error Alert 
    ui.showAlert('Please fill in all fields', 'error');
  } else {

    // Add book to list
    ui.addBookToList(book);

    // Show success 
    ui.showAlert('Book added ', 'success')

    // Clear fields 
    ui.clearFields();

  }



  // prevent default behavior 
  e.preventDefault();
});





// Event listener for Delete book ------------------
document.getElementById('book-list').addEventListener('click', function(e){

  // Instantiate the UI 
  const ui = new UI();

  //Delete book
  ui.deleteBook(e.target);


  // Show message 
  ui.showAlert('Book Remove!' ,'success')


  e.preventDefault();
})