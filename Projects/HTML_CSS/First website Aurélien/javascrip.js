const button = document.getElementsByClassName("buttons");
// document.getElementByTagName => header/nav etc(utiliser [0] quand veut utiliser un seul élément) 
let slideIndex = 1;
let spotlightCase = 1
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



function currentStorie(n) {
  let all = document.getElementsByClassName("storiesItem");
  showStories(spotlightCase = n);
  console.log(all)
}

function showStories(n) {
  let i;
  let all = document.getElementsByClassName("storiesItem");
  let images = document.getElementsByClassName("spotlightImage");
  let videos = document.getElementsByClassName("spotlightVideos");
  let stories = document.getElementsByClassName("spotlightStories");
  // all =
  if (n > spotlightCase.length) { spotlightCase = 1 }
  if (n < 1) { spotlightCase = button.length }
  for (i = 0; i < button.length; i++) {
    button[i].className = button[i].className.replace(" activeStories", "");
  }
  switch (n) {
    case n = 1:
      for (let i = 0; i < all.length; i++) {
        all.item(i).style.display = "initial";
      }
      break;
    case n = 2:
      for (let i = 0; i < all.length; i++) {
        all.item(i).style.display = "none";
      }
      for (let i = 0; i < stories.length; i++) {
        stories.item(i).style.display = "initial";
      }
      break;

    case n = 3:
      for (let i = 0; i < all.length; i++) {
        all.item(i).style.display = "none";
      }
      for (let i = 0; i < videos.length; i++) {
        videos.item(i).style.display = "initial";
      }
      break;

    case n = 4:
      for (let i = 0; i < all.length; i++) {
        all.item(i).style.display = "none";
      }
      for (let i = 0; i < images.length; i++) {
        images.item(i).style.display = "initial";
      }
      // images.style.display = "initial"
      break;

  }
  button[spotlightCase - 1].className += " activeStories";

}
showSlides(slideIndex);
showStories(spotlightCase);
