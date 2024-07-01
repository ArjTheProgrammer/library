const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(Book){
    myLibrary.push(Book);
}

const initialBook = new Book("Meditation", "Marcus Aurelius", 200, true);
addBookToLibrary(initialBook);

const initialBook2 = new Book("Subtle art of not giving a fuck", "Mark Manson", 200, false);    
addBookToLibrary(initialBook2);
console.log(myLibrary);

function DisplayBooks(){
    const container = document.querySelector(".container");

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = `card`;

    const title = document.createElement("h2");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");

    title.textContent = `${book.title}`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
    read.textContent = `Status: ${book.read ? "Finished":"Not finish"}`;

    card.append(title);
    card.append(author);
    card.append(pages);
    card.append(read);

    container.appendChild(card);
}); 
}

/*button listener*/
const dialog = document.querySelector("dialog");
const openDialog = document.querySelector("dialog + .addBook");
const closeDialog = document.querySelector("dialog .closeDialog");

openDialog.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", () => {
    dialog.close();
});

DisplayBooks();