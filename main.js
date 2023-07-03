const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", displayQuote);

const quotes = [

  {
    id: 1,
    quote: "Design experiences that make a difference and leave a lasting impact.",
    author: "Unknown"
  },
  {
    id: 2,
    quote: "Embrace the power of empathy to create designs that truly understand and connect with users.",
    author: "Unknown"
  },
  {
    id: 3,
    quote: "Every pixel and interaction counts, so strive for excellence in every detail.",
    author: "Unknown"
  },
  {
    id: 4,
    quote: "Your designs have the potential to shape how people perceive and interact with the world.",
    author: "Unknown"
  },
  {
    id: 5,
    quote: "Remember, you're not just designing for users; you're designing for their emotions and aspirations.",
    author: "Unknown"
  },
  {
    id: 6,
    quote: "Stay curious and continuously seek inspiration from diverse sources to fuel your creativity.",
    author: "Unknown"
  },
  {
    id: 7,
    quote: "Design with purpose and intention, knowing that your work can solve real problems and improve lives.",
    author: "Unknown"
  },
  {
    id: 8,
    quote: "Embrace challenges as opportunities to innovate and push the boundaries of what's possible.",
    author: "Unknown"
  },
  {
    id: 9,
    quote: "Never forget the impact of collaboration; great designs are born from the collective effort of a team.",
    author: "Unknown"
  },
  {
    id: 10,
    quote: "Your passion for creating exceptional user experiences has the power to change the world. Keep pushing forward!",
    author: "Unknown"
  },
  {
    id: 11,
    quote: "Design is not just how it looks, but how it works. Strive for seamless functionality.",
    author: "Steve Jobs"
  },
  {
    id: 12,
    quote: "User-centered design is the key to creating experiences that truly resonate.",
    author: "Don Norman"
  },
  {
    id: 13,
    quote: "Innovate fearlessly and push the boundaries of what's considered possible.",
    author: "Elon Musk"
  },
  {
    id: 14,
    quote: "Every problem is an opportunity for a creative solution. Embrace challenges.",
    author: "Albert Einstein"
  },
  {
    id: 15,
    quote: "Simplify complexity and make the user journey effortless and intuitive.",
    author: "Jakob Nielsen"
  },
  {
    id: 16,
    quote: "Design is the bridge between technology and human emotions. Create meaningful connections.",
    author: "John Maeda"
  },
  {
    id: 17,
    quote: "Stay curious and explore new technologies and trends to stay ahead of the game.",
    author: "Paula Scher"
  },
  {
    id: 18,
    quote: "Always advocate for the user and champion their needs throughout the design process.",
    author: "Alan Cooper"
  },
  {
    id: 19,
    quote: "Remember, great design is invisible. It seamlessly integrates into people's lives.",
    author: "Jared Spool"
  },
  {
    id: 20,
    quote: "Collaborate with developers and stakeholders to bring your vision to life.",
    author: "Tim Brown"
  },
  {
    id: 21,
    quote: "Embrace feedback as a valuable tool for continuous improvement and growth.",
    author: "Donella Meadows"
  },
  {
    id: 22,
    quote: "User experience is not a one-time event; it's an ongoing journey of refinement.",
    author: "Whitney Hess"
  },
  {
    id: 23,
    quote: "Never stop learning. Stay updated with the latest UX methodologies and best practices.",
    author: "Sarah Doody"
  },
  {
    id: 24,
    quote: "Think beyond the screen and consider the entire user ecosystem in your design.",
    author: "Aarron Walter"
  },
  {
    id: 25,
    quote: "Design with inclusivity in mind, ensuring your creations are accessible to all.",
    author: "Kat Holmes"
  },
  {
    id: 26,
    quote: "The best designs evoke emotions and create memorable experiences.",
    author: "Milton Glaser"
  },
  {
    id: 27,
    quote: "Embrace minimalism and eliminate unnecessary clutter to create a clean design aesthetic.",
    author: "Dieter Rams"
  },
  {
    id: 28,
    quote: "The devil is in the details. Pay attention to microinteractions and refine them.",
    author: "Luke Wroblewski"
  },
  {
    id: 29,
    quote: "Good design is iterative. Test, iterate, and refine to create exceptional experiences.",
    author: "Tom Kelley"
  },
  {
    id: 30,
    quote: "Your passion for UX has the power to improve lives. Let it be your driving force.",
    author: "Irene Au"
  }
];


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



//dark mode

const icon = document.getElementById("icon");

icon.addEventListener("click", function () {
  console.log("i was cliked");
  document.body.classList.toggle("darkMode");
  if (document.body.classList.contains("darkMode")) {
    document.getElementById("icon").classList = ("bi bi-brightness-high-fill");
  } else { document.getElementById("icon").classList = ("bi bi-moon-fill"); }
});