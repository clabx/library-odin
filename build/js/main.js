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

  let bookRead = null;

  if (readBookRadio.classList.contains("checked")) {
    bookRead = true;
  } else if (unreadBookRadio.classList.contains("checked")) {
    bookRead = false;
  }

  if (valid) {
    books[books.length - 1] = new BookObject(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      bookRead
    );
    readBookRadio.classList.remove("opacity-30");
    unreadBookRadio.classList.remove("scale-110");
    unreadBookRadio.classList.remove("check");
    unreadBookRadio.classList.remove("opacity-30");
    readBookRadio.classList.remove("scale-110");
    readBookRadio.classList.remove("check");
    bookForm.reset();
    closeForm();
  }
});
