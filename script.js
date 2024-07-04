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

    const closeCard = document.createElement("button");
    closeCard.className = "closeCard";
    const title = document.createElement("h2");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const readUpdate = document.createElement("button");
    readUpdate.className = "readUpdate";

    closeCard.textContent = "X";
    title.textContent = `${book.title}`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
    read.textContent = `Status: ${book.read ? "Finished":"Not finished"}`;
    readUpdate.textContent = `${book.read ? "not finished":"finished"}`
    
    readUpdate.addEventListener("click", () => {
        if (book.read === true){
            read.textContent = `Status: not yet finished`;
            readUpdate.textContent = "Finished";
            book.read = false;
        }
        else {
            read.textContent = `Status: finished`;
            readUpdate.textContent = "Not yet finished";
            book.read = true;
        }
    });

    closeCard.addEventListener("click", () => {
        if(myLibrary.includes(book)){
            let bookIndex = myLibrary.findIndex((storedBook) => {
                return storedBook === book;
            });
            myLibrary.splice(bookIndex, 1);
        }
        card.remove();
        console.log(myLibrary);
    });

    card.append(closeCard);
    card.append(title);
    card.append(author);
    card.append(pages);
    card.append(read);
    card.append(readUpdate);

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

const contents = [title, author, pages];

openDialog.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(myLibrary);
        clearContent();
        dialog.close();
});

confirmButton.addEventListener("click", (e) => {
    if(!isEmpty()){
        e.preventDefault();
        console.log(`${title.value} ${author.value} ${pages.value} ${read.checked ? true:false}`); 
        addBookToLibrary(title.value, author.value, pages.value, read.checked ? true:false);
        DisplayBooks(myLibrary[myLibrary.length - 1]);
        console.log(myLibrary);
        dialog.close();
        clearContent();
    }
});

function isEmpty() {
    if (title.value == "" || author.value == "" || pages.value == ""){
        return true;
    }
}

function clearContent(){
    contents.forEach(content => {
        content.value = "";
    });
}