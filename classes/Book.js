class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${title} by ${author}, ${pages} pages, ${read ? 'already read' : 'not read yet'}`;
  };
};

export default Book;