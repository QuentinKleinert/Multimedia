
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


class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  setName(name) {
    this.#name = name;
  }

  setAge(age) {
    this.#age = age;
  }

  static genPerson(name, age) {
    return new Person(name, age);
  }
}

document.getElementById("check").addEventListener("click", function() {
  let name = document.getElementById("name-input").value;
  let age = document.getElementById("age-input").value;
  if (name === "" || age === "") {
    document.getElementById("person-output").textContent = "Bitte Name und Alter eingeben.";
    return;
  }
  let person = Person.genPerson(name, age);
  document.getElementById("person-output").textContent = `Hello ${person.getName()}, nice to see you! You are ${person.getAge()} old.`;
  
})

let visibility = true;
document.querySelector(".picture-button").addEventListener("click", function() {
  const picture = document.querySelector(".picture");
  
  if(visibility === true) {
    picture.style.visibility = "hidden";
    visibility = false;
  } else {
    picture.style.visibility = "visible";
    visibility = true;
  }
})