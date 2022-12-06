/* */
const rows = 30;
const cols = 30;
// nombre de ligne et colonnes
let image_class = "one" /* background image de base lors de la création du tableau */
var isStarted = false /* Processus B est arrété par défaut */
var randomIsDone = false /*Processus C est arrété par défaut */

/*  utiliser pour créer les génération pour alterner entre currGen(génréation 1) et nextGen(génération 2 qui remplacera la génération 1 plus tard) */
let currGen = [rows];
let nextGen = [rows];

createGenArrays()
initGenArrays()
setInterval(randomClick, 1);
setInterval(evolve, 250);

function startCellular() {
    randomIsDone = true
    isStarted = false
}
function createGenArrays() {
    for (let i = 0; i < rows; i++) {
        currGen[i] = new Array(cols);
        nextGen[i] = new Array(cols);
    }
}

function initGenArrays() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            currGen[i][j] = 0;
            nextGen[i][j] = 0;
        }
    }
}


function start() {
    isStarted = true
    setTimeout(startCellular, 10000)

}
function stop() {
    isStarted = false
    randomIsDone = false

}

function createWorld() {
    let world = document.querySelector('#world');
    let tbl = document.createElement('table');
    tbl.setAttribute('id', 'worldgrid');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            cell = document.createElement('td');
            cell.setAttribute('id', i + '_' + j);
            cell.setAttribute('class', image_class);
            tr.appendChild(cell);
        }
        tbl.appendChild(tr);
    }
    world.appendChild(tbl);
}

/* */
function randomClick() {
    let image_class_id = 1
    if (!isStarted) return;
    let loc = [Math.floor(Math.random() * rows), Math.floor(Math.random() * cols)];
    image_class_id = Math.floor(Math.random() * 6);
    switch (image_class_id) {
        case 1:
            // image_class_id++
            image_class = "one";
            currGen[loc[0]][loc[1]] = 0;
            // console.log(currGen[loc[0]][loc[1]]);
            break;
        case 2:
            // image_class_id++
            image_class = "two";
            currGen[loc[0]][loc[1]] = 1;
            // console.log(currGen[loc[0]][loc[1]]);
            break;
        case 3:
            // image_class_id++
            image_class = "three";
            currGen[loc[0]][loc[1]] = 2;
            // console.log(currGen[loc[0]][loc[1]]);
            break;
        case 4:
            // image_class_id++
            image_class = "four";
            currGen[loc[0]][loc[1]] = 3;
            // console.log(currGen[loc[0]][loc[1]]);
            break;
        case 5:
            // image_class_id++
            image_class = "five";
            currGen[loc[0]][loc[1]] = 4;
            // console.log(currGen[loc[0]][loc[1]]);
            break;
    }
    elem = document.getElementById(loc[0] + "_" + loc[1]);
    elem.setAttribute('class', image_class)
    // console.log(currGen.forEach)
    // return elem    
}
window.onload = () => {
    createWorld();// The visual table
}


/* vérifie la valeur de currGen[row][col] pour chaque celulle et change la classe en raport avec cete valeur */

function updateWorld() {
    // if (!isStarted) return;
    let cell = '';
    for (row in currGen) {
        for (col in currGen[row]) {
            cell = document.getElementById(row + '_' + col);
            switch (currGen[row][col]) {
                case 0:
                    cell.setAttribute('class', 'one');
                    break;
                case 1:
                    cell.setAttribute('class', 'two');
                    break;
                case 2:
                    cell.setAttribute('class', 'three');
                    break;
                case 3:
                    cell.setAttribute('class', 'four');
                    break;
                case 4:
                    cell.setAttribute('class', 'five');
                    break;
            }


        }
    }
}



/* vérifie le nombre de voisin ayant le même identifiant currGen[][] et renvoie ce nombre(count) pour chaque celulle */
function getNeighborCount(row, col) {
    let count = 0;
    let nrow = Number(row);
    let ncol = Number(col);

    // Make sure we are not at the first row
    if (nrow - 1 >= 0) {
        // Check top neighbor
        if (currGen[nrow - 1][ncol] == currGen[nrow][ncol])
            count++;
    }
    // Make sure we are not in the first cell
    // Upper left corner
    if (nrow - 1 >= 0 && ncol - 1 >= 0) {
        //Check upper left neighbor
        if (currGen[nrow - 1][ncol - 1] == currGen[nrow][ncol])
            count++;
    }
    // Make sure we are not on the first row last column
    // Upper right corner
    if (nrow - 1 >= 0 && ncol + 1 < cols) {
        //Check upper right neighbor
        if (currGen[nrow - 1][ncol + 1] == currGen[nrow][ncol])
            count++;
    }
    // Make sure we are not on the first column
    if (ncol - 1 >= 0) {
        //Check left neighbor
        if (currGen[nrow][ncol - 1] == currGen[nrow][ncol])
            count++;
    }
    // Make sure we are not on the last column
    if (ncol + 1 < cols) {
        //Check right neighbor
        if (currGen[nrow][ncol + 1] == currGen[nrow][ncol])
            count++;
    }
    // Make sure we are not on the bottom left corner
    if (nrow + 1 < rows && ncol - 1 >= 0) {
        //Check bottom left neighbor
        if (currGen[nrow + 1][ncol - 1] == currGen[nrow][ncol])
            count++;
    }
    // Make sure we are not on the bottom right
    if (nrow + 1 < rows && ncol + 1 < cols) {
        //Check bottom right neighbor
        if (currGen[nrow + 1][ncol + 1] == currGen[nrow][ncol])
            count++;
    }


    // Make sure we are not on the last row
    if (nrow + 1 < rows) {
        //Check bottom neighbor
        if (currGen[nrow + 1][ncol] == currGen[nrow][ncol])
            count++;
    }


    return count;
}

/* change la valeur newgen[][] pour chaque cellule par rapport au nombre de voisin ayant la même valeur */
function createNextGen() {
    for (row in currGen) {
        for (col in currGen[row]) {
            //  appelle le nombre count de getNeighborCount() pour chaque celulle
            let neighbors = getNeighborCount(row, col);

            /* pour chaque cellule et chaque valeur nextGen[row][col] vérifie le count et change la valeur de nextGen[row][col] en rapport avec le nombre de voisin*/
            switch (currGen[row][col]) {
                case 0:
                    if (neighbors < 2) {
                        nextGen[row][col] = 0;
                    } else if (neighbors == 2 || neighbors == 3) {
                        nextGen[row][col] = 1;
                        console.log(nextGen[row][col])

                    } else if (neighbors > 3) {
                        nextGen[row][col] = 0;
                        // console.log(nextGen[row][col])
                    }
                    break;
                case 1:
                    if (neighbors < 2) {
                        nextGen[row][col] = 1;
                    } else if (neighbors == 2 || neighbors == 3) {
                        nextGen[row][col] = 2;
                    } else if (neighbors > 3) {
                        nextGen[row][col] = Math.floor(1 + Math.random() * 3);
                    }
                    break;
                case 2:
                    if (neighbors < 2) {
                        nextGen[row][col] = 2;
                    } else if (neighbors == 2 || neighbors == 3) {
                        nextGen[row][col] = 3;
                    } else if (neighbors > 3) {
                        nextGen[row][col] = 1;
                    }
                    break;
                case 3:
                    if (neighbors < 2) {
                        nextGen[row][col] = 3;
                    } else if (neighbors == 2 || neighbors == 3) {
                        nextGen[row][col] = 4;
                    } else if (neighbors > 3) {
                        nextGen[row][col] = 1;
                    }
                    break;
                case 4:
                    if (neighbors < 2) {
                        nextGen[row][col] = 4;
                    } else if (neighbors == 2 || neighbors == 3) {
                        nextGen[row][col] = 1;
                    } else if (neighbors > 3) {
                        nextGen[row][col] = 1;
                    }
            }

        }
    }
}


/* change currGen[][] pour qu'il soit égale à nextGen puis réinitialise nextGen pour qu'il puisse étre réutiliser après */
function updateCurrGen() {

    for (row in currGen) {
        for (col in currGen[row]) {
            // Update the current generation with
            // the results of createNextGen function
            currGen[row][col] = nextGen[row][col];
            // Set nextGen back to empty
            nextGen[row][col] = 0;
        }
    }

}


function evolve() {
    if (!randomIsDone) return;
    createNextGen();
    updateCurrGen();
    updateWorld();
    // console.log("test")
}