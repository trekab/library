const addBookButton = document.getElementById('addBook');
let example = document.getElementsByClassName('card')[0];
let bookList = document.querySelector('.book-list');
let library = [];

function Book(author, title, pages, read = false, summary) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.summary = summary;
}

function addBookToLibrary(book) {
	library.push(book);
}

function card(book){
	
}

addBookButton.addEventListener('click', () => {
	let bookList = document.querySelector('.book-list');
	let example = document.createElement('div');
	example.className = "card col-4"
	example.innerHTML = document.getElementsByClassName('card')[0].innerHTML
	bookList.appendChild(example);
	console.log(example);
});
console.log(bookList);