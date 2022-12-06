const mario = document.getElementById("perso");
const width = window.innerWidth;
const height = window.innerHeight;

let position = new Vector(width/2, height/2);
let velocity = new Vector(2.5,5);

setInterval(draw, 20);
 
function draw() {
    console.log("test");
    position = position.add(velocity.x, velocity.y);

    if ((position.x > width-80) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
    }
    if ((position.y > height-80) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
    }
    document.getElementById("perso").setAttribute("style", "left: "+position.x+"px; top:"+position.y+"px");
}
