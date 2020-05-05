const addNewForm = document.getElementById('new-book-form');
const bookList = document.querySelector('.book-list');
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

function createCard(book) {
  const card = document.createElement('div');
  const cardBody = document.createElement('div');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('h5');
  const bookPages = document.createElement('span');
  const bookReadStatus = document.createElement('span');
  const bookRemoveButton = document.createElement('button');
  const bookPageReadSection = document.createElement('div');
  card.className = 'card col-4';
  cardBody.className = 'card-body';
  bookTitle.className = 'card-title text-center';
  bookAuthor.className = 'card-title';
  bookRemoveButton.className = 'w-100 btn btn-primary rounded-pill';
  bookPageReadSection.className = 'd-flex justify-content-between align-items-center pb-3';
  if (book.read) {
    bookReadStatus.className = 'btn btn-outline-secondary disabled rounded-pill py-0';
  } else {
    bookReadStatus.className = 'btn btn-outline-success rounded-pill py-0';
  }
  bookTitle.innerHTML = book.title;
  bookAuthor.innerHTML = book.author;
  bookPages.innerHTML = `${book.pages} pages.`;
  bookRemoveButton.innerHTML = 'Remove';
  bookPageReadSection.appendChild(bookPages);
  bookReadStatus.innerHTML = 'Read';
  bookPageReadSection.appendChild(bookReadStatus);

  cardBody.appendChild(bookTitle);
  cardBody.appendChild(bookAuthor);
  cardBody.appendChild(bookPageReadSection);
  cardBody.appendChild(bookRemoveButton);
  card.appendChild(cardBody);
  return card;
}

function displayBooks(bookArray) {
  bookArray.forEach(book => {
    bookList.appendChild(createCard(book));
  });
}

addNewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const author = document.getElementById('author-input').value;
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const newBook = new Book(author, title, pages, read);
  addBookToLibrary(newBook);
  document.getElementById('read').checked = false;
  document.getElementById('pages').value = '';
  document.getElementById('title').value = '';
  document.getElementById('author-input').value = '';
  displayBooks(library);
});
