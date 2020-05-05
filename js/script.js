let library = [];

function Book(author, title, pages, read = false, summary) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.summary = summary;
}

function addBookToLibrary() {

}

book = new Book("author", "book_title",123,true,"This is a very good book" )

console.log(book);