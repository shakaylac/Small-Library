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

    clearInputs();

    displayLibrary();

    hideForm();
}


function displayLibrary() {
    container.textContent = "";

    Library.forEach((book, index) => {
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book-con");

        bookContainer.setAttribute("data-index", index);
    

        const bookInfo = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.page}, Read: ${book.read}`;
        const bookElement = document.createElement("p");
        bookElement.textContent = bookInfo;

        const deleteBookBtn = document.createElement("button");
        deleteBookBtn.textContent = "X";
        deleteBookBtn.classList.add("deleteBookBtn");

        deleteBookBtn.book = book;

        deleteBookBtn.addEventListener("click", function() {
            Library.splice(index, 1);

            this.parentElement.remove();
        });

        
        container.appendChild(bookContainer);
        bookContainer.appendChild(bookElement);
        bookContainer.appendChild(deleteBookBtn);
});

}


function showForm() {
    form.style.display = "block";
}

function hideForm() {
    form.style.display = "none";
}

function clearInputs() {
    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";
    document.getElementById("pageInput").value = "";
    document.getElementById("readInput").value = "";
}


addToLibrary.addEventListener('click', showForm);
exitBtn.addEventListener('click', hideForm);
addBtn.addEventListener('click', makeBook);
