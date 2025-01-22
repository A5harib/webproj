const API_KEY = "AIzaSyCEWkm7uc7ReCNH4I9vfOFJRpXkdHmZwx0";
// Replace with desired search term
const query = "nietzsche";
const author = "Jordan B.Peterson";
// const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}+&key=${API_KEY}&maxResults=10`;

// display: grid;
//grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

function fetchAndDisplayBooks({
  query,
  targetElementId,
  maxResults = 10,
  apiKey = "AIzaSyCEWkm7uc7ReCNH4I9vfOFJRpXkdHmZwx0",
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

  targetElement.innerHTML = ""; // Clear existing content

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

//important code:
fetchAndDisplayBooks({
  query: "2024 philosophy ",
  targetElementId: "sugbooks",
});

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
    const centuryText = century.textContent.trim(); // Get the text of the clicked century
    const query = `${centuryText} famous philosophy`; // Modify as needed for specific queries
    document.getElementById("mainview").innerHTML = `
  <div class="show">
    <div class="smallHC">The most important text of ${centuryText}</div>
    <div class="divide"></div>
    <div id="books" class="books"></div>
  </div>
`;
    fetchAndDisplayBooks({
      query,
      targetElementId: "books", // Target where books will be displayed
    });
  });
});

function search() {
  console.log("searched");
  const searchQuery = document.querySelector(".searchbar").value.trim(); // Get the value from the search bar

  if (searchQuery) {
    // Update the main view with a new heading and content
    document.getElementById("mainview").innerHTML = `
    <div class="show">
      <div class="smallHC">Search Results for "${searchQuery}"</div>
      <div class="divide"></div>
      <div id="books" class="books"></div>
    </div>
  `;

    // Fetch and display books based on the search query
    fetchAndDisplayBooks({
      query: searchQuery,
      targetElementId: "books", // ID of the container for books
    });
  } else {
    window.alert("Please enter a search query."); // Handle empty search
  }
}

function fetchAndDisplayBooks({
  query,
  targetElementId,
  maxResults = 10,
  apiKey = "AIzaSyCEWkm7uc7ReCNH4I9vfOFJRpXkdHmZwx0",
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

  targetElement.innerHTML = ""; // Clear existing content

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
  targetElementId: "books", // Target where books will be displayed
});
