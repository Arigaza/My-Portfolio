"use strict";
let slideIndex = 1;

showSlides()

setTimeout(() => {
    setInterval(() => {
        showSlides(slideIndex += 1);
    }, 3000);
}, 3000);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }  // retour à 1 si >
  if (n < 1) { slideIndex = slides.length } // retour a max si <0
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }  // hide tout les slides
 
  slides[slideIndex - 1].style.display = "block"; //montre le bon slide
 
}   


