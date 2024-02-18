
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read ? 'already read' : 'not read yet'}`;
  };
};

let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', true);
let book2 = new Book('Dune', 'Frank Herbert', '592', true);
let book3 = new Book('Catch 22', 'Joseph Heller', '544', false);

const myLibrary = [book1, book2, book3];

const form = document.getElementById('book-form');

listAllBooks();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  hideForm();
  listAllBooks();
});

function listAllBooks() {
  const tBody = document.querySelector('tbody');
  tBody.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const tRow = document.createElement('tr');

    const title = document.createElement('td');
    title.textContent = book.title;
    tRow.appendChild(title);

    const author = document.createElement('td');
    author.textContent = book.author;
    tRow.appendChild(author);

    const pages = document.createElement('td');
    pages.textContent = book.pages;
    tRow.appendChild(pages);

    const read = document.createElement('td');
    const readCheck = document.createElement('input');
    readCheck.setAttribute('type', 'checkbox');
    read.textContent = book.read ? (readCheck.checked = true, 'Yes') : 'No';
    readCheck.addEventListener('change', () => readBookToggle(index, readCheck));
    read.appendChild(readCheck);
    tRow.appendChild(read);

    const btnRow = document.createElement('td');
    const button = document.createElement('button');
    button.setAttribute('onclick', `deleteBook(${index})`);
    button.textContent = 'X';
    btnRow.appendChild(button)
    tRow.appendChild(btnRow);

    tBody.appendChild(tRow);
  });
}

function addBookToLibrary() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read');
  const newBook = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(newBook);
}

function showForm() {
  form.style.display = 'block';
}

function hideForm() {
  form.style.display = 'none';
  form.reset();
}

function deleteBook(bookNumber) {
  myLibrary.splice(bookNumber, 1);
  listAllBooks();
}

function readBookToggle(index, checkbox) {
  myLibrary[index].read = checkbox.checked;
  const readCell = checkbox.parentElement;
  readCell.textContent = checkbox.checked ? 'Yes' : 'No';
  listAllBooks();
}
