let books = [
  {
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    maxPages: 200,
    onPage: 60,
  },
  { title: "Harry Potter", author: "J.K Rowling", maxPages: 250, onPage: 150 },
  {
    title: "50 Shades of Grey",
    author: "E.L James",
    maxPages: 150,
    onPage: 100,
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    maxPages: 350,
    onPage: 350,
  },
  {
    title: "Hamlet",
    author: "William Shakespeare",
    maxPages: 550,
    onPage: 550,
  },
];
console.log(books);

function addBooks() {
  let ul_1 = document.querySelector("#ul_1");
  ul_1.innerHTML = "";
  let ul_2 = document.querySelector("#ul_2");
  ul_2.innerHTML = "";

  books.forEach((book) => {
    let list = document.createElement("li");
    ul_1.appendChild(list);
    list.innerHTML += `${book.title} by ${book.author}`;
    let list_2 = document.createElement("li");
    ul_2.appendChild(list_2);
    if (book.maxPages === book.onPage) {
      list_2.innerHTML += `You already read ${book.title} by${book.author}`;
      list_2.style.color = "green";
    } else {
      list_2.innerHTML += `You still need to read ${book.title} by${book.author}`;
      list_2.style.color = "red";
    }
  });
}
addBooks();

function calculatePercentage(onpage, maxpages) {
  let precentege = Math.floor((onpage / maxpages) * 100);
  return precentege;
}

function addInTable() {
  let tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  books.forEach((book) => {
    let calculation = calculatePercentage(book.onPage, book.maxPages);

    tableBody.innerHTML += `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.maxPages}</td>
        <td>${book.onPage}</td>
        <td><div id="myProgress">
        <div id="myBar" style="color:white; width:${calculation}%" >${calculation}%</div>
        </div></td>
        <tr/>`;
  });
}
addInTable();

function addNewBook(event) {
  event.preventDefault();

  const inputTitle = event.target["title"].value;

  const inputAuthor = event.target["author"].value;

  const inputCurrentPage = +event.target["currentPage"].value;

  const inputMaxPage = +event.target["maxPages"].value;

  const newBookAdded = {
    title: inputTitle,
    author: inputAuthor,
    maxPages: inputMaxPage,
    onPage: inputCurrentPage,
  };

  books.push(newBookAdded);
  event.target.reset();
  addInTable();

  console.log(books);
  addBooks();
}

const form = document.querySelector("#addBookForm");
console.log(form);
form.addEventListener("submit", addNewBook);
