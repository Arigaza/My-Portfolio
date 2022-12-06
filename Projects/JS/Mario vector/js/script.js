var mario = document.getElementById("perso")
var coin = document.getElementById("piece")
var score = document.getElementById("score")
var gameover = document.getElementById("gameover")
var timerElement = document.getElementById("secondes")
var goomba = document.getElementById("goomba")
var counter = 30;
var s = 0
var isGameover = false
var Gamestarted = false
var body = document.getElementById("bodysize")
ElementPosition(mario, 740, 350)
randompos(coin)

function timerStart() {
    var interval = setInterval(() => {
        if (isGameover) return;
        timerElement.innerHTML = `Temps restant : ${counter}s`;
        if (counter < 1) {
            // the timer has reached zero or game Over
            timerElement.innerHTML = `Temps restant : ${counter}s`;
            isGameover = true
            clearInterval(interval);
        } else if (Gamestarted) {
            counter--;
        }
    }, 1000);
};

timerStart()

function ElementPosition(element, x, y) {
    element.style.position = 'absolute';
    element.style.left = x + 'px';
    element.style.top = y + 'px';
}

function randompos(element) {
    if (isGameover) return;
    xPos = Math.floor(Math.random() * 1480)
    yPos = Math.floor(Math.random() * 700)
    element.style.left = xPos + 'px';
    element.style.top = yPos + 'px';
}

cointimer = setInterval(function (
) {
    if (Gamestarted) {
        randompos(coin)
    }
}, 5000)

window.addEventListener('keydown', (event) => {
    if (isGameover) return;
    let speed = 15;
    const { style } = mario;
    switch (event.key) {
        case 'ArrowUp' :
            Gamestarted = true
            style.top = `${parseInt(style.top) - speed}px`; break;
        case 'ArrowDown':
            Gamestarted = true
            style.top = `${parseInt(style.top) + speed}px`; break;
        case 'ArrowLeft':
            Gamestarted = true
            style.left = `${parseInt(style.left) - speed}px`; break;
        case 'ArrowRight':
            Gamestarted = true
            style.left = `${parseInt(style.left) + speed}px`; break;
    }
});

function collision(element1, element2) {
    var coinCoillision = true
    if (element1.x + element1.width-20 >= element2.x &&
        element1.x <= element2.x + element2.width -20 &&
        element1.y + element1.height-20 >= element2.y &&
        element1.y <= element2.y + element2.height-20) {
        return true;
    }

    return false;
}

coinCollision = setInterval(function (
) {
    if (collision(mario, coin)) {
        s++
        score.innerText = `Score : ${0 + s}`;
        randompos(coin);
    }
}, 10)

goombaCollision = setInterval(function (
    ) {
        if (collision(mario, goomba)) {
           isGameover = true
        }
    }, 10)

Gamestatue = setInterval(function (
) {
    if (isGameover) {
        gameover.style.visibility = "visible"
    }
    else {
        gameover.style.visibility = "hidden"
    }
}, 10)

velocityRandom = setInterval(function (
    ) {
        velocityX = Math.floor(Math.random() * 10)
    velocityY = Math.floor(Math.random() * 10)
        }
    , 3000)
const width = window.innerWidth;
const height = window.innerHeight;

let position = new Vector(width-90, height-90);
let velocity = new Vector(5,10);

setInterval(draw, 20);
 
function draw() {
    if (isGameover) return;
    position = position.add(velocity.x, velocity.y);

    if ((position.x > width-80) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
    }
    if ((position.y > height-80) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
    }
    document.getElementById("goomba").setAttribute("style", "left: "+position.x+"px; top:"+position.y+"px");
}
