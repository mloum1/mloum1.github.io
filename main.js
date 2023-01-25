"use strict";

//le string à utiliser

const text = `Aprés une licence en Langues étrangères appliquées, je suis tourné vers l'informatique et je poursuis actuellement un 
   Master en informatique à l'université de Montpellier. Je suis à la recherche d'une alternance pour le Master 2 en tant que développeur whatsoever.`;
//compteur initialiser à zéro j'ai utiliser let car elle sera globale et je pourrai l'utiliser à l'intérieur d'une fonction
let i = 0;
//variable de la vittesse
const speed = 10;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(function () {
      i = 0;
      document.getElementById("text").innerHTML = "";
      typeWriter();
    }, 5000);
  }
}
typeWriter();

//Revealing elements on scrolling  using the
const allSections = document.querySelectorAll(".section");
const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section__hidden");
});

const annee = document.querySelector(".year");
const date = new Date();

annee.innerHTML = "      " + date.getFullYear() + "   " + date.getDay();
