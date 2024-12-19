"use strict";

const library = [];

library.push(new Book("title1", "author1", "pages1", true));
library.push(new Book("title2", "author2", "pages2", true));
library.push(new Book("title3", "author3", "pages3", false));

function Book(title, author, pages, isRead) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
   library.push(new Book(title, author, pages, isRead));
}

function displayLibrary() {
   const libraryElement = document.querySelector(".library");
   // Clear the library
   libraryElement.innerHTML = "";
   for (const book of library) {
      const bookElement = document.createElement("div");
      bookElement.classList = "book";
      const titleElement = document.createElement("div");
      const authorElement = document.createElement("div");
      const pagesElement = document.createElement("div");
      const isReadElement = document.createElement("div");
      titleElement.classList = "title";
      authorElement.classList = "author";
      pagesElement.classList = "pages";
      isReadElement.classList = "isRead";
      titleElement.textContent = book.title;
      authorElement.textContent = book.author;
      pagesElement.textContent = book.pages;
      isReadElement.textContent = book.isRead;

      bookElement.append(
         titleElement,
         authorElement,
         pagesElement,
         isReadElement
      );
      libraryElement.append(bookElement);
   }
}

displayLibrary();

// # Show dialog
const showDialogButton = document.querySelector("#showAddBookDialog");
const addBookDialog = document.querySelector("#addBookDialog");

showDialogButton.addEventListener("click", () => {
   addBookDialog.showModal();
});

// Retrieve book data from form and add it to library
const addBookForm = document.querySelector("#addBookForm");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const isReadInput = document.querySelector("#isRead");
const addBookButton = document.querySelector("#addBookBtn");

addBookButton.addEventListener("click", (event) => {
   event.preventDefault();
   addBookToLibrary(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      isReadInput.checked
   );
   addBookForm.reset();
   displayLibrary();
});
