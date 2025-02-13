// const API_KEY = "AIzaSyCEWkm7uc7ReCNH4I9vfOFJRpXkdHmZwx0";
//AIzaSyDNWWX-bnOjFrA8DsXG9F9dBn1VWeGMsWc
// // Replace with desired search term
// const query = "nietzsche";
// const author = "Jordan B.Peterson";
// // const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}+&key=${API_KEY}&maxResults=10`;

// display: grid;
//grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

// function fetchAndDisplayBooks({
//   query,
//   targetElementId,
//   maxResults = 10,
//   apiKey = "AIzaSyCEWkm7uc7ReCNH4I9vfOFJRpXkdHmZwx0",
// }) {
//   const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=${maxResults}`;

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.items) {
//         displayBooks(data.items, targetElementId);
//       } else {
//         console.error("No books found for the query:", query);
//       }
//     })
//     .catch((error) => console.error(`Error fetching data: ${error}`));
// }

// function displayBooks(books, targetElementId) {
//   const targetElement = document.getElementById(targetElementId);
//   if (!targetElement) {
//     console.error(`Element with ID "${targetElementId}" not found.`);
//     return;
//   }

//   targetElement.innerHTML = ""; // Clear existing content

//   books.forEach((book) => {
//     const bookCard = document.createElement("div");
//     bookCard.classList.add("book-card");

//     const title = book.volumeInfo.title || "No title available";
//     const authors = book.volumeInfo.authors
//       ? book.volumeInfo.authors.join(", ")
//       : "Unknown author";
//     const thumbnail =
//       book.volumeInfo.imageLinks?.thumbnail || "default-thumbnail.jpg";

//     bookCard.innerHTML = `
//         <img src="${thumbnail}" alt="${title}">
//         <h3>${title}</h3>
//         <p>${authors}</p>
//       `;

//     targetElement.appendChild(bookCard);
//   });
// }

//important code:
let users = JSON.parse(localStorage.getItem("users")) || [];
fetchAndDisplayBooks({
  query: "2024 philosophy ",
  targetElementId: "sugbooks",
});
let bookNumber = 1;

function home() {
  document.getElementById("mainview").innerHTML = `
   <div class="hero">
          <div class="heroleft">
            <div class="smallH">Explore the</div>
            <div class="bigH">Literary Archive</div>
            <div class="divide"></div>
            <div class="search">
              <input
                type="text"
                class="searchbar"
                placeholder="Search for a book"
              />
              <button onclick="search()" class="searchbtn"><img src="search.png" alt="" /></button>
           
            </div>
          </div>
          <div class="heroimg">
            <img src="heroimg.jpg" alt="bookshelf" />
          </div>
        </div>
        <div class="suggest">
          <div class="sughead">Suggested Books:</div>
          <div id="sugbooks" class="sugbooks">

          
            </div>
            
              </div>
`;
}

document.querySelectorAll(".century").forEach((century) => {
  century.addEventListener("click", () => {
    const centuryText = century.textContent.trim();
    const query = `${centuryText} famous philosophy`;
    document.getElementById("mainview").innerHTML = `
  <div class="show">
    <div class="smallHC">The most important text of ${centuryText}</div>
    <div class="divide"></div>
    <div id="books" class="books"></div>
  </div>
`;
    fetchAndDisplayBooks({
      query,
      targetElementId: "books",
    });
  });
});

function search() {
  console.log("searched");
  const searchQuery = document.querySelector(".searchbar").value.trim();

  if (searchQuery) {
    document.getElementById("mainview").innerHTML = `
    <div class="show">
      <div class="smallHC">Search Results for "${searchQuery}"</div>
      <div class="divide"></div>
      <div id="books" class="books"></div>
    </div>
  `;

    fetchAndDisplayBooks({
      query: searchQuery,
      targetElementId: "books",
    });
  } else {
    window.alert("Please enter a search query.");
  }
}

function fetchAndDisplayBooks({
  query,
  targetElementId,
  maxResults = 10,
  apiKey = "AIzaSyDNWWX-bnOjFrA8DsXG9F9dBn1VWeGMsWc",
}) {
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=${maxResults}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.items) {
        displayBooks(data.items, targetElementId);
      } else {
        console.error("No books found for the query:", query);
      }
    })
    .catch((error) => console.error(`Error fetching data: ${error}`));
}

function displayBooks(books, targetElementId) {
  const targetElement = document.getElementById(targetElementId);
  if (!targetElement) {
    console.error(`Element with ID "${targetElementId}" not found.`);
    return;
  }

  targetElement.innerHTML = "";

  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const title = book.volumeInfo.title || "No title available";
    const authors = book.volumeInfo.authors
      ? book.volumeInfo.authors.join(", ")
      : "Unknown author";
    const thumbnail =
      book.volumeInfo.imageLinks?.thumbnail || "default-thumbnail.jpg";

    bookCard.innerHTML = `
      <img src="${thumbnail}" alt="${title}">
      <h3>${title}</h3>
      <p>${authors}</p>
      `;

    targetElement.appendChild(bookCard);
  });
}

fetchAndDisplayBooks({
  query,
  targetElementId: "books",
});

function log() {
  document.getElementById("mainview").innerHTML = `
  <div class="hero">
         <div class="heroleft">
           <div class="smallH">My</div>
           <div class="bigH">Literary Archive</div>
           <div class="divide"></div>
           <div class="search">
             <input
               type="text"
               class="searchbar"
               placeholder="Search for a book"
             />
             <button onclick="search()" class="searchbtn"><img src="search.png" alt="" /></button>
          
           </div>
         </div>
         <div class="heroimg">
           <img src="heroimg.jpg" alt="bookshelf" />
         </div>
       </div>
       <div class="suggest">
         <div class="sughead">Suggested Books:</div>
         <div id="sugbooks" class="sugbooks">

         
           </div>
           
             </div>
`;
}

function addBook() {
  console.log("addbook");
  //getName
  const bookName = document.getElementById("bookName");
  const book = bookName.value.trim();

  if (book === "") {
    alert("Please enter a name");
    return;
  }

  fetchAndDisplayBooks({
    query: book,
    targetElementId: "sugbooks",
  });
  //findcontain
  const bookContainer = document.getElementById("bookContainer");
  //makeDiv
  const bookDiv = document.createElement("div");
  bookDiv.className = `bookElement${bookNumber}`;
  bookDiv.innerHTML = `
<label for="bookElement${bookNumber}">${bookNumber}. ${book}</label>
<button class="delBtn" onclick="removeBook(this)">Delete</button>
`;

  //put div
  bookContainer.appendChild(bookDiv);

  //clear
  bookName.value = "";

  //next task
  bookNumber++;
}
function removeBook(button) {
  const bookDiv = button.parentElement;
  bookDiv.remove();
}

//login
function showSignup() {
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("signup-form").classList.remove("hidden");
}
function showLogin() {
  document.getElementById("signup-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
}
function signup() {
  const username = document.getElementById("signname").value;
  const password = document.getElementById("signpassword").value;

  // Check if user already exists
  if (users.some((user) => user.username === username)) {
    alert("Username already exists!");
    return;
  }

  // Add new user
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful! Please login.");
  showLogin();
}
function login(event) {
  event.preventDefault(); // Prevents form submission

  const username = document.getElementById("logname").value;
  const password = document.getElementById("password").value;

  // Check if user exists and password matches
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    alert("Login successful!");
    // Redirect to another page (e.g., dashboard)
    window.location.href = "home.html"; // Replace with your actual page
  } else {
    alert("Invalid username or password!");
  }
}

console.log(localStorage);
