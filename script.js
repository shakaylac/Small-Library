const container = document.getElementById("container");
const exitBtn = document.getElementById("exitBtn");
const addBtn = document.getElementById("addBtn");
const form = document.getElementById('form');
const addToLibrary = document.getElementById("addToLibrary");

form.style.display = "none";

const Library = [];

function book (title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}


function makeBook(event) {
    event.preventDefault();

    const title = document.getElementById("titleInput").value;
    const author = document.getElementById("authorInput").value;
    const page = document.getElementById("pageInput").value;
    const read = document.getElementById("readInput").value;


    const newBook = new book (title, author, page, read);

    Library.push(newBook);

    displayLibrary();
}


function displayLibrary() {
    container.textContent = "";

    Library.forEach(book => {
        const bookInfo = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.page}, Read: ${book.read}`;
        const bookElemnt = document.createElement("p");
        bookElemnt.textContent = bookInfo;
        container.appendChild(bookElemnt);
});

}


function showForm() {
    form.style.display = "block";
}

function hideForm() {
    form.style.display = "none";
}

addToLibrary.addEventListener('click', showForm);
exitBtn.addEventListener('click', hideForm);
addBtn.addEventListener('click', makeBook);
