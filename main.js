
fetch("./data.json")
  .then(response => response.json())
  .then(data => {
const quotes = data;


function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote() {
  const quoteContainer = document.getElementById("quote");
  const authorContainer = document.getElementById("author");

  // Get a random quote object
  const randomQuote = getRandomQuote();

  // Update the HTML content with the quote and author
  quoteContainer.textContent = randomQuote.quote;
  authorContainer.textContent = randomQuote.author;
}

displayQuote();
const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", displayQuote);


//dark mode

const icon = document.getElementById("icon");

icon.addEventListener("click", function () {
  console.log("i was cliked");
  document.body.classList.toggle("darkMode");
  if (document.body.classList.contains("darkMode")) {
    document.getElementById("icon").classList = ("bi bi-brightness-high-fill");
  } else { document.getElementById("icon").classList = ("bi bi-moon-fill"); }
});
})
.catch(error => {
  console.log("Error fetching data:", error);
});