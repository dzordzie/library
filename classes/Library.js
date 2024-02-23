import Book from "./Book.js";

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    this.books.push(newBook);
  }

  deleteBook(index) {
    this.books.splice(index, 1);
    this.listAllBooks();
  }

  toggleReadStatus(index, isChecked) {
    this.books[index].read = isChecked;
  }

  listAllBooks() {
    const tBody = document.querySelector('tbody');
    tBody.innerHTML = '';

    this.books.forEach((book, index) => {
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
      readCheck.addEventListener('change', () => this.readBookToggle(index, readCheck));
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

  readBookToggle(index, checkbox) {
    this.toggleReadStatus(index, checkbox.checked);
    const readCell = checkbox.parentElement;
    readCell.textContent = checkbox.checked ? 'Yes' : 'No';
    this.listAllBooks();
  }
}

export default Library;