const myLibrary = []
const mainContainer = document.getElementById("main-container")

function Book(title, author, pages, read) {
    this.title = title,
    this. author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks() {
    myLibrary.forEach(element => {
        const book = document.createElement("p");
        book.classList.add("book");
        const displayText = document.createTextNode(`${element.title}by ${element.author}`);
        book.appendChild(displayText);
        mainContainer.appendChild(book);
    });
}