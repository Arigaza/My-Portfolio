const button = document.getElementsByClassName("buttons");
const buttonsArray = [...button];
spotlightCase = 1
const seeMore = document.getElementById("showMore")

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {

    let all = document.getElementsByClassName("storiesItem");
    showProject(spotlightCase = i + 1);
  })

}

showProject(spotlightCase)
function currentProjects(n) {
    let all = document.getElementsByClassName("storiesItem");
    showProject(spotlightCase = n);
    console.log(n)
  }
  
  function showProject(n) {
    let i;
    let all = document.getElementsByClassName("projectItem");
    let js = document.getElementsByClassName("js");
    let css = document.getElementsByClassName("css");
    let websites = document.getElementsByClassName("websites");
    if (n > spotlightCase.length) { spotlightCase = 1 }
    if (n < 1) { spotlightCase = button.length }
    for (i = 0; i < button.length; i++) {
      button[i].className = button[i].className.replace(" activeProject", "");
    }
    switch (n) {
      case n = 1:
        for (let i = 0; i < all.length; i++) {
        if  (i < 4) {
          all.item(i).style.display = "initial"
        } 
         else { 
          all.item(i).style.display = "none" 
          // seeMore.style.display = "initial" 
        }
        }
        break;
      case n = 2:
        for (let i = 0; i < all.length; i++) {
          all.item(i).style.display = "none";
        }
        for (let i = 0; i < websites.length; i++) {
          websites.item(i).style.display = "initial";
        }
        break;
  
      case n = 3:
        for (let i = 0; i < all.length; i++) {
          all.item(i).style.display = "none";
        }
        for (let i = 0; i < css.length; i++) {
          css.item(i).style.display = "initial";
        }
        break;
  
      case n = 4:
        for (let i = 0; i < all.length; i++) {
          all.item(i).style.display = "none";
        }
        for (let i = 0; i < js.length; i++) {
          js.item(i).style.display = "initial";
        }
        break;
  
    }
    button[spotlightCase - 1].className += " activeProject";
  
  }

  