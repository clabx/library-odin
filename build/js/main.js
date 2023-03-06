const bookPopUp = document.querySelector("#bookPopUp");
const addBookButton = document.querySelector("#addBookButton");

addBookButton.addEventListener("click", () => {
  if (bookPopUp.classList.contains("fadeOut")) {
    bookPopUp.classList.toggle("fadeIn");
    bookPopUp.classList.toggle("fadeOut");
    addBookButton.textContent = "Cancel ❌";
  } else {
    bookPopUp.classList.toggle("fadeOut");
    bookPopUp.classList.toggle("fadeIn");
    addBookButton.textContent = "Add a book! 📚";
  }
});
