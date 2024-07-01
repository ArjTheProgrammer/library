const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}


addBookToLibrary("Meditation", "Marcus Aurelius", 200, true);
addBookToLibrary("Subtle art of not giving a fuck", "Mark Manson", 200, false);

myLibrary.forEach(book => {
    DisplayBooks(book);
});

function DisplayBooks(book){
    const container = document.querySelector(".container");
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
}

/*button listener*/
const dialog = document.querySelector("dialog");
const openDialog = document.querySelector("dialog + .addBook");
const closeDialog = document.querySelector("dialog .closeDialog");

const confirmButton = document.querySelector("#confirm");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

openDialog.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});

confirmButton.addEventListener("click", () => {
    console.log(`${title.value} ${author.value} ${pages.value} ${read.checked ? true:false}`); 
    addBookToLibrary(title.value, author.value, pages.value, read.checked ? true:false);
    DisplayBooks(myLibrary[myLibrary.length - 1]);
})