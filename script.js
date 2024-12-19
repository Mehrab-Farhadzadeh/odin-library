"use strict";

const library = [];

function Book(title, author, pages, isRead) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.isRead = isRead;
}

Book.prototype.toggleReadStatus = function () {
   this.isRead = !this.isRead;
};

function addBookToLibrary(title, author, pages, isRead) {
   library.push(new Book(title, author, pages, isRead));
}

// Dummy filler content
library.push(new Book("title1", "author1", "pages1", true));
library.push(new Book("title2", "author2", "pages2", true));
library.push(new Book("title3", "author3", "pages3", false));

function displayLibrary() {
   const libraryElement = document.querySelector(".library");
   // Header
   libraryElement.innerHTML = `<div class="book">
         <h3 class="title">Title</h3>
         <h3 class="author">Author</h3>
         <h3 class="pages">Pages</h3>
         <h3 class="isRead">Read Status</h3>
         <h3 class="toggle-read-status">Toggle read status</h3>
         <h3 class="delete">Delete Button</h3>
      </div>`;
   // Create and add book cards
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

      // Toggle read status button
      const toggleReadStatusButton = document.createElement("button");
      toggleReadStatusButton.classList = "toggle-read-status";
      toggleReadStatusButton.setAttribute(
         "data-attribute",
         library.indexOf(book)
      );
      toggleReadStatusButton.textContent = "Toggle read status";
      toggleReadStatusButton.addEventListener("click", (e) => {
         const index = e.target.getAttribute("data-attribute");
         library.at(index).toggleReadStatus();
         displayLibrary();
      });

      // Delete Book button
      const deleteBookButton = document.createElement("button");
      deleteBookButton.classList = "delete";
      deleteBookButton.setAttribute("data-attribute", library.indexOf(book));
      deleteBookButton.textContent = "Del";
      deleteBookButton.addEventListener("click", (e) => {
         const index = e.target.getAttribute("data-attribute");
         library.splice(index, 1);
         displayLibrary();
      });

      bookElement.append(
         titleElement,
         authorElement,
         pagesElement,
         isReadElement,
         toggleReadStatusButton,
         deleteBookButton
      );
      libraryElement.append(bookElement);
   }
}

displayLibrary();

// Show dialog
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
