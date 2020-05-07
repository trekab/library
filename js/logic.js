const library = [];

function Book(author, title, pages, read = false) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  library.push(book);
}

function removeBookFromLibrary(bookIndex) {
  library.splice(bookIndex, 1);
}