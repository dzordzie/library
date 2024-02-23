import Library from "./classes/Library.js";

const myLibrary = new Library();
const form = document.getElementById('book-form');

window.showForm = showForm;
window.deleteBook = myLibrary.deleteBook.bind(myLibrary);

myLibrary.addBook('The Hobbit', 'J.R.R. Tolkien', '295', true);
myLibrary.addBook('Dune', 'Frank Herbert', '592', true);
myLibrary.addBook('Catch 22', 'Joseph Heller', '544', false);

showAllBooks();
console.log(myLibrary);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  hideForm();
  showAllBooks();
});

function showAllBooks() {
  myLibrary.listAllBooks();
}

function addBookToLibrary() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read');
  myLibrary.addBook(title.value, author.value, pages.value, read.checked);
}

function showForm() {
  form.style.display = 'block';
}

function hideForm() {
  form.style.display = 'none';
  form.reset();
}
