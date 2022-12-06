/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
var dropdowns = document.getElementsByClassName("dropdown-content");
var menu =  document.getElementById("myDropdown")
image = document.getElementById("menu")

  menu.addEventListener('click',function() {
    dropdowns[0].classList.toggle("show");
    console.log("test")
    console.log(menu)
  } )