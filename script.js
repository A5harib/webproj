// const centuries = document.querySelectorAll(".century");

// const observer = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("in-view");
//       } else {
//         entry.target.classList.remove("in-view");
//       }
//     });
//   },
//   {
//     threshold: 0.5,
//   }
// );
// centuries.forEach((century) => {
//   observer.observe(century);
// });

const API_KEY = "AIzaSyCEWkm7uc7ReCNH4I9vfOFJRpXkdHmZwx0";
// Replace with desired search term
const query = "nietzsche";
const author = "Jordan B.Peterson";
// const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}+&key=${API_KEY}&maxResults=10`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    displayBooks(data.items); // Pass the items to the displayBooks function
  })
  .catch((error) => console.error(`Error fetching data: ${error}`));

function displayBooks(books) {
  const View = document.querySelector(".mainview");
  View.innerHTML = ""; // Clear existing content

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

    View.appendChild(bookCard);
  });
}
