# Library Project

## JavaScript Course

### Introduction

Welcome to The Odin Project's Library project! As part of the javascript course, I was tasked to create a simple web app that allows users to manage their book collection. Let's dive right in!

### Project Setup

First things first, I set up the project with the following files:

1. **index.html**: The skeleton HTML file where everything starts.
2. **style.css**: A minimal CSS file to make things look presentable.
3. **script.js**: The heart of our app, where all the magic happens.

### Adding Books to the Library

I created a `Book` constructor function to represent individual books. Each book has properties like `title`, `author`, `pages`, and a `read` status. Here's a snippet of the `Book` constructor:

```javascript
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
```

Next, I needed a place to store my books. So, I created an array called `myLibrary`:

```javascript
const myLibrary = [];
```

### Adding Books Dynamically

To allow users to add books, I implemented the `addBookToLibrary` function. This function prompts the user for book details and creates a new `Book` object. It then pushes that book into the `myLibrary` array.

### Displaying Books

I wanted to showcase the user's book collection on the page. So, I wrote a function called `displayBooks` that displays the objects in the `myLibrary` array and creates a card for each book.

### Adding the "ADD BOOK" Button

Ah, the "ADD BOOK" button! I added a button to the page that triggers a dialog when clicked. Users can input book details—author, title, pages, and read status.

### Removing Books

Each book card now has a "Remove" button. When clicked, it removes the corresponding book from the library.

### Changing Read Status

Lastly, I added a button to toggle the read status of each book. The function that handles this updates the `read` property of the book object.

And there you have it—the Library app! Feel free to explore different ways to style it or enhance its functionality. Happy reading! 📖🌟

By the way, if you’d like to see the live version, check it out here! 🌐
</br>
[Arj's Library 📚](https://arjtheprogrammer.github.io/library/)

---
