
let reference = document.getElementById("text");

const texts = [
    "Hallo, das ist ein neuer Text!",
    "Willkommen zu meinem JavaScript-Projekt!",
    "Das ist ein zufälliger Textwechsel.",
    "Klick mich nochmal für eine Überraschung!",
    "JavaScript macht Spaß!"
  ];


  reference.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * texts.length);
    
    reference.textContent = texts[randomIndex];
  
    reference.style.color = reference.style.color === "red" ? "black" : "red";
  });
