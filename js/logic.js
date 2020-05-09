
const library = [];

class Book {
  constructor(author, title, pages, read = false) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
}

function newBook(author, title, pages, read) {
  return new Book(author, title, pages, read);
}

function addBookToLibrary(book) {
  library.push(book);
}

function removeBookFromLibrary(bookIndex) {
  library.splice(bookIndex, 1);
}

function changeReadStatus(bookIndex) {
  if (library[bookIndex].read) {
    library[bookIndex].read = false;
  } else {
    library[bookIndex].read = true;
  }
}

export {
  library, Book, newBook, addBookToLibrary, removeBookFromLibrary, changeReadStatus,
};