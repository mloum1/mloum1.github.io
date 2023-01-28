"use strict";

//le string à utiliser

const text = `Actuellement étudiant en  Master d'informatique et profondément passioné par le traitement des données et le développement, je suis à la recherche d'une alternance  pour ma dernière année de Master.

Je suis persuadé que cette alternance serait l'occassion pour mettre en pratique mes connaissances et de continuer à développer mes compétences dans ces domaines.
`;
//compteur initialiser à zéro j'ai utiliser let car elle sera globale et je pourrai l'utiliser à l'intérieur d'une fonction
let i = 0;
//variable de la vittesse
const speed = 10;
let master = "Master d'informatique";
let alternance = "alternance";
let element = document.getElementById("text");

function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    if (element.innerHTML.includes(master)) {
      // master.style.color="green"
    }
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

/// les modal

const sidb = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const op = document.getElementById("sibd");
// toutes les classes
// Modal window

// const openModal = function (e) {
//   e.preventDefault();
//   sibd.classList.remove("hide");
//   overlay.classList.remove("hide");
// };

// const closeModal = function () {
//   sibd.classList.add("hide");
//   overlay.classList.add("hide");
// };

// btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !sidb.classList.contains("hide")) {
//     closeModal();
//   }

//   console.log(op);
// });
