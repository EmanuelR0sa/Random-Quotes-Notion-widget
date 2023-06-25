const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", displayRandomPhrase);

const quotes = [
    "Design experiences that make a difference and leave a lasting impact.",
    "Embrace the power of empathy to create designs that truly understand and connect with users.",
    "Every pixel and interaction counts, so strive for excellence in every detail.",
    "Your designs have the potential to shape how people perceive and interact with the world.",
    "Remember, you're not just designing for users; you're designing for their emotions and aspirations.",
    "Stay curious and continuously seek inspiration from diverse sources to fuel your creativity.",
    "Design with purpose and intention, knowing that your work can solve real problems and improve lives.",
    "Embrace challenges as opportunities to innovate and push the boundaries of what's possible.",
    "Never forget the impact of collaboration; great designs are born from the collective effort of a team.",
    "Your passion for creating exceptional user experiences has the power to change the world. Keep pushing forward!"
  ];

  function displayRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomPhrase = quotes[randomNumber];
    document.getElementById("phraseDisplay").innerHTML = randomPhrase;
  }