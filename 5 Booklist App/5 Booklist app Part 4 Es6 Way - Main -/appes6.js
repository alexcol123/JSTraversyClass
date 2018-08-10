// DO this   1st ------------------------------------->
//******************************************************


class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}


// DO this   3rd ------------------------------------->
//******************************************************

class UI {

  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create a tr element
    const row = document.createElement('tr');
    // add class name colorBg to row
    row.className = 'colorBg'


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


  showAlert(message, className) {
    // create div
    const div = document.createElement('div');
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

    //timeout after 3 seconds 
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }


  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

}











// DO this   2nd ------------------------------------->
//******************************************************

// Event listeners  for add book
document.getElementById('book-form').addEventListener('submit', (e) => {
  // console.log('Test');

  const
    title = document.getElementById('title').value,
    author = document.getElementById('author').value;
  isbn = document.getElementById('isbn').value;
  //console.log(title, author, isbn)

  // Instantiate a Book
  const book = new Book(title, author, isbn);
  //console.log(book)



  // NOte  go to step 3... Create the   UI ,  go above this fuction  ---->
  //******************************************************


  // DO this   4th------------------------------------->
  //******************************************************

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

})




// DO this   5th ------------------------------------->
//******************************************************


// Event listener for Delete book ------------------
document.getElementById('book-list').addEventListener('click', (e) => {

  // Instantiate the UI 
  const ui = new UI();

  //Delete book
  ui.deleteBook(e.target);


  // Show message 
  ui.showAlert('Book Remove!', 'success')


  e.preventDefault();
})