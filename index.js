function fetchBooks() {
  // Fetch data from the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())  // Convert the response to JSON
    .then((books) => renderBooks(books))  // Pass the JSON data to renderBooks function
    .catch((error) => console.error("Error fetching books:", error));  // Handle errors
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;  // Display the book's name
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();  // Call fetchBooks when the DOM is fully loaded
});
