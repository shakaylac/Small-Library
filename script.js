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

    hideForm();
}


function displayLibrary() {
    container.textContent = "";

    Library.forEach(book => {
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book-con");

        const bookInfo = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.page}, Read: ${book.read}`;
        const bookElement = document.createElement("p");
        bookElement.textContent = bookInfo;

        const deleteBookBtn = document.createElement("button");
        deleteBookBtn.textContent = "X";
        deleteBookBtn.classList.add("deleteBookBtn");
        deleteBookBtn.addEventListener("click", deleteBook);

        function deleteBook() {
            const index = Library.indexOf(book);
            
            Library.splice(index, 1);

            bookContainer.remove();
         }

        
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

addToLibrary.addEventListener('click', showForm);
exitBtn.addEventListener('click', hideForm);
addBtn.addEventListener('click', makeBook);
