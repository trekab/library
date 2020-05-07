
function changeReadStatus(bookIndex) {
  if (library[bookIndex].read) {
    library[bookIndex].read = false;
  } else {
    library[bookIndex].read = true;
  }
}

const addNewForm = document.getElementById('new-book-form');
const bookList = document.querySelector('.book-list');
const formToggleBtn = document.getElementById('form-toggle-btn');
const formContainer = document.getElementById('new-book-form-container');

formToggleBtn.addEventListener('click', () => {
  formContainer.classList.toggle('d-none');
});


function render(bookArray) {
  bookList.innerHTML = '';
  bookArray.forEach((book, index) => {
    // eslint-disable-next-line no-use-before-define
    bookList.appendChild(createCard(book, index));
  });
}

function createCard(book, id) {
  const card = document.createElement('div');
  const cardBody = document.createElement('div');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('h5');
  const bookPages = document.createElement('span');
  const bookReadStatus = document.createElement('button');
  const bookRemoveButton = document.createElement('button');
  const bookPageReadSection = document.createElement('div');

  card.className = 'card col-4 border-secondary';
  cardBody.className = 'card-body';
  bookTitle.className = 'card-title text-center';
  bookAuthor.className = 'card-title';
  bookRemoveButton.className = `w-100 btn btn-primary rounded-pill remove-button id-${id}`;
  bookPageReadSection.className = 'd-flex justify-content-between align-items-center pb-3';
  if (book.read) {
    bookReadStatus.className = `btn btn-outline-secondary disabled rounded-pill py-0 id-${id}`;
  } else {
    bookReadStatus.className = `btn btn-outline-success rounded-pill py-0 id-${id}`;
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

  bookRemoveButton.addEventListener('click', () => {
    const bookId = bookRemoveButton.classList.toString().match(/id-[0-9]+/)[0].match(/[0-9]+/)[0];
    removeBookFromLibrary(bookId);
    render(library);
  });
  bookReadStatus.addEventListener('click', () => {
    const bookId = bookReadStatus.classList.toString().match(/id-[0-9]+/)[0].match(/[0-9]+/)[0];
    changeReadStatus(bookId);
    bookReadStatus.classList.toggle('disabled');
    bookReadStatus.classList.toggle('btn-outline-secondary');
    bookReadStatus.classList.toggle('btn-outline-success');
  });

  return card;
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
  render(library);
});
