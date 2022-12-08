let slideIndex = 1;
let spotlightCase = 1

showSlides()
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }  // retour à 1 si >
  if (n < 1) { slideIndex = slides.length } // retour a max si <0
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }  // hide tout les slides
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  } // met tout les dot en non actif
  slides[slideIndex - 1].style.display = "block"; //montre le bon slide
  dots[slideIndex - 1].className += " active"; // met le bon dot en actif

}