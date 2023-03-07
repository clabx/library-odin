// Declarations

const bookPopUp = document.querySelector("#bookPopUp");
const addBookButton = document.querySelector("#addBookButton");

const submitBookButton = document.querySelector("#submitBookButton");
const bookForm = document.querySelector("#bookForm");
const inputTitle = document.querySelector("#bookName");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const invalidInputTitle = document.querySelector("#invalidTitle");
const invalidInputAuthor = document.querySelector("#invalidAuthor");
const invalidInputPages = document.querySelector("#invalidPages");

const radioboxRead = document.querySelector("#radioboxRead");
const radioboxUnread = document.querySelector("#radioboxUnread");
const readBookRadio = document.querySelector("#readBook");
const unreadBookRadio = document.querySelector("#unreadBook");

const booksGrid = document.querySelector("#booksGrid");
const noBooksCard = document.querySelector("#noBooks");

const books = [];

function BookObject(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Functions

function openForm() {
  bookPopUp.classList.toggle("fadeIn");
  bookPopUp.classList.toggle("fadeOut");
  addBookButton.textContent = "Cancel ❌";
}

function closeForm() {
  bookPopUp.classList.toggle("fadeOut");
  bookPopUp.classList.toggle("fadeIn");
  addBookButton.textContent = "Add a book! 📚";
}

function createCard(title, author, pages, read) {
  noBooksCard.classList.add("hide");
  const book = document.createElement("div");
  book.setAttribute("id", "book");

  const bookTitle = document.createElement("div");
  bookTitle.setAttribute("id", "bookTitle");
  const bookTitleText = document.createElement("h1");
  bookTitleText.textContent = title;
  bookTitle.appendChild(bookTitleText);
  book.appendChild(bookTitle);

  const bookAuthor = document.createElement("div");
  bookAuthor.setAttribute("id", "bookAuthor");
  const bookAuthorText = document.createElement("h2");
  bookAuthorText.textContent = "by ".concat(author);
  bookAuthor.appendChild(bookAuthorText);
  book.appendChild(bookAuthor);

  const bookPages = document.createElement("div");
  bookPages.setAttribute("id", "bookPages");
  const bookPagesText = document.createElement("p");
  bookPagesText.textContent = "Pages: ".concat(pages);
  bookPages.appendChild(bookPagesText);
  book.appendChild(bookPages);

  const bookBottomArea = document.createElement("div");
  bookBottomArea.setAttribute("id", "bookBottomArea");

  const bookRead = document.createElement("div");
  bookRead.setAttribute("id", "bookRead");
  const bookLeido = document.createElement("div");
  bookLeido.setAttribute("id", "bookLeido");
  bookLeido.textContent = "Read";
  const bookNoLeido = document.createElement("div");
  bookNoLeido.setAttribute("id", "bookNoLeido");
  bookNoLeido.textContent = "Unread";
  bookRead.appendChild(bookLeido);
  bookRead.appendChild(bookNoLeido);
  bookBottomArea.appendChild(bookRead);

  const deleteBook = document.createElement("div");
  deleteBook.setAttribute("id", "deleteBook");
  deleteBook.textContent = "Delete";
  bookBottomArea.appendChild(deleteBook);

  book.appendChild(bookBottomArea);

  if (read === true) {
    bookNoLeido.classList.add("hide");
  } else {
    bookLeido.classList.add("hide");
  }

  booksGrid.appendChild(book);
  const thisBook = booksGrid.lastChild;
  thisBook.lastChild.firstChild.addEventListener("click", () => {
    thisBook.lastChild.firstChild.firstChild.classList.toggle("hide");
    thisBook.lastChild.firstChild.lastChild.classList.toggle("hide");
  });

  thisBook.lastChild.lastChild.addEventListener("click", () => {
    thisBook.remove();
    if (booksGrid.lastChild.id !== "book") {
      noBooksCard.classList.remove("hide");
    }
  });
}

// Scripts

// Open/Close form
addBookButton.addEventListener("click", () => {
  if (bookPopUp.classList.contains("fadeOut")) {
    openForm();
  } else {
    closeForm();
  }
});

// Radio

readBookRadio.addEventListener("click", () => {
  radioboxRead.classList.remove("fadeOut");
  radioboxRead.classList.add("fadeIn");
  radioboxUnread.classList.remove("fadeIn");
  radioboxUnread.classList.add("fadeOut");

  readBookRadio.classList.add("checked");
  unreadBookRadio.classList.remove("checked");
});

unreadBookRadio.addEventListener("click", () => {
  radioboxUnread.classList.remove("fadeOut");
  radioboxUnread.classList.add("fadeIn");
  radioboxRead.classList.remove("fadeIn");
  radioboxRead.classList.add("fadeOut");

  unreadBookRadio.classList.add("checked");
  readBookRadio.classList.remove("checked");
});

submitBookButton.addEventListener("click", () => {
  let valid = true;
  if (inputTitle.validity.valid === false) {
    invalidInputTitle.removeAttribute("hidden");
    valid = false;
  } else {
    invalidInputTitle.setAttribute("hidden", "");
  }

  if (inputAuthor.validity.valid === false) {
    invalidInputAuthor.removeAttribute("hidden");
    valid = false;
  } else {
    invalidInputAuthor.setAttribute("hidden", "");
  }

  if (inputPages.validity.valid === false) {
    invalidInputPages.removeAttribute("hidden");
    valid = false;
  } else {
    invalidInputPages.setAttribute("hidden", "");
  }

  let bookRead = false;

  if (readBookRadio.classList.contains("checked")) {
    bookRead = true;
  }

  if (valid) {
    books[books.length - 1] = new BookObject(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      bookRead
    );
    const bookInfo = books[books.length - 1];

    createCard(bookInfo.title, bookInfo.author, bookInfo.pages, bookInfo.read);
    readBookRadio.classList.remove("opacity-30");
    unreadBookRadio.classList.remove("scale-110");
    unreadBookRadio.classList.remove("checked");
    unreadBookRadio.classList.remove("opacity-30");
    readBookRadio.classList.remove("scale-110");
    readBookRadio.classList.remove("checked");
    bookForm.reset();
    closeForm();
  }
});
