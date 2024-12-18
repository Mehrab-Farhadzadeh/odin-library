"use strict";

const library = [];

function Book(title, author, pages, isRead) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.isRead = isRead;
}

const addBookForm = document.querySelector("#addBook");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const isReadInput = document.querySelector("#isRead");
const addBookButton = document.querySelector("#addBook input[type='submit']");

addBookButton.addEventListener("click", (event) => {
   event.preventDefault();
   library.push(
      new Book(
         titleInput.value,
         authorInput.value,
         pagesInput.value,
         isRead.checked
      )
   );
   addBookForm.reset();
});
