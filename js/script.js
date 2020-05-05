const addBookButton = document.getElementById('addBook');
let example = document.getElementsByClassName('card')[0];
let bookList = document.querySelector('.book-list');
let library = [];

function Book(author, title, pages, read = false, summary) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

let sample_book = new Book('JohnDoe', 'First Samples', 48, true);

function addBookToLibrary(book) {
	library.push(book);
}

function createCard(book){
	let card = document.createElement('div');
	let cardBody = document.createElement('div');
	let bookTitle = document.createElement('h3');
	let bookAuthor = document.createElement('h5');
	let bookPages = document.createElement('span');
	let bookReadStatus = document.createElement('span');
	let bookRemoveButton = document.createElement('button');
	let bookPageReadSection = document.createElement('div');
	card.className = "card col-4";
	cardBody.className = "card-body";
	bookTitle.className = "card-title text-center";
	bookAuthor.className = "card-title";
	bookRemoveButton.className = "w-100 btn btn-primary rounded-pill";
	bookPageReadSection.className = "d-flex justify-content-between align-items-center pb-3";
	bookTitle.innerHTML = book.title;
	bookAuthor.innerHTML = book.author;
	bookPages.innerHTML = book.pages + ' pages.';
	bookRemoveButton.innerHTML = 'Remove';
	//bookReadStatus.innerHTML = book.read;
	bookPageReadSection.appendChild(bookPages);
	bookPageReadSection.appendChild(bookReadStatus);



	cardBody.appendChild(bookTitle);
	cardBody.appendChild(bookAuthor);
	cardBody.appendChild(bookPageReadSection);
	cardBody.appendChild(bookRemoveButton);
	card.appendChild(cardBody);
	return card;
}

addBookButton.addEventListener('click', () => {
	let bookList = document.querySelector('.book-list');
	example = createCard(sample_book);
	bookList.appendChild(example);
});
console.log(createCard(sample_book));