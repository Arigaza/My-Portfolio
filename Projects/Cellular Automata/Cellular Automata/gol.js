const rows = 30;
const cols = 30;
// Creates two-dimensional arrays
let image_class_id = 1
let image_class = "one"
var isStarted = false

let currGen =[rows];
let nextGen =[rows];

createGenArrays()
initGenArrays()
setInterval(randomClick, 10);
// setInterval(evolve, 5000);

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

}
function stop() {
    isStarted = false

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


function randomClick() {
    if (!isStarted) return;
    let loc = [Math.floor(Math.random() * rows), Math.floor(Math.random() * cols)];
    image_class_id = Math.floor(Math.random() * 6);
    switch (image_class_id) {
        case 1:
            // image_class_id++
            image_class = "one";
            currGen[loc[0]][loc[1]]= 0;
            console.log(currGen[loc[0]][loc[1]]);
            break;
        case 2:
            // image_class_id++
            image_class = "two";
            currGen[loc[0]][loc[1]]= 1;
            console.log(currGen[loc[0]][loc[1]]);
            break;
        case 3:
            // image_class_id++
            image_class = "three";
            currGen[loc[0]][loc[1]]= 2;
            console.log(currGen[loc[0]][loc[1]]);
            break;
        case 4:
            // image_class_id++
            image_class = "four";
            currGen[loc[0]][loc[1]]= 3;
            console.log(currGen[loc[0]][loc[1]]);
            break;
        case 5:
            // image_class_id++
            image_class = "five";
            currGen[loc[0]][loc[1]]= 4;
            console.log(currGen[loc[0]][loc[1]]);
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

function updateWorld() {
    if (!isStarted) return;
    let cell='';
    for (row in currGen) {
        for (col in currGen[row]) {
            cell = document.getElementById(row + '_' + col);
            switch (currGen[row][col]) {
                case 0:
                    cell.setAttribute('class', 'two');
                    break;
                case 1:
                    cell.setAttribute('class', 'three');
                    break;
                case 2:
                    cell.setAttribute('class', 'four');
                    break;
                case 3:
                    cell.setAttribute('class', 'five');
                    break;
                case 4:
                    cell.setAttribute('class', 'one');
                    break;
            }
              

            }
        }
        console.log("outside loop");
        isStarted=false
    }
 



function getNeighborCount(row, col) {
    let count = 0;
    let nrow=Number(row);
    let ncol=Number(col);
    
        // Make sure we are not at the first row
        if (nrow - 1 >= 0) {
        // Check top neighbor
        if (currGen[nrow - 1][ncol] == 1) 
            count++;
    }
        // Make sure we are not in the first cell
        // Upper left corner
        if (nrow - 1 >= 0 && ncol - 1 >= 0) {
        //Check upper left neighbor
        if (currGen[nrow - 1][ncol - 1] == 1) 
            count++;
    }
// Make sure we are not on the first row last column
        // Upper right corner
        if (nrow - 1 >= 0 && ncol + 1 < cols) {
        //Check upper right neighbor
            if (currGen[nrow - 1][ncol + 1] == 1) 
                count++;
        }
// Make sure we are not on the first column
    if (ncol - 1 >= 0) {
        //Check left neighbor
        if (currGen[nrow][ncol - 1] == 1) 
            count++;
    }
    // Make sure we are not on the last column
    if (ncol + 1 < cols) {
        //Check right neighbor
        if (currGen[nrow][ncol + 1] == 1) 
            count++;
    }
// Make sure we are not on the bottom left corner
    if (nrow + 1 < rows && ncol - 1 >= 0) {
        //Check bottom left neighbor
        if (currGen[nrow + 1][ncol - 1] == 1) 
            count++;
    }
// Make sure we are not on the bottom right
    if (nrow + 1 < rows && ncol + 1 < cols) {
        //Check bottom right neighbor
        if (currGen[nrow + 1][ncol + 1] == 1) 
            count++;
    }
    
    
        // Make sure we are not on the last row
    if (nrow + 1 < rows) {
        //Check bottom neighbor
        if (currGen[nrow + 1][ncol] == 1) 
            count++;
    }
    
    
    return count;
}


    function createNextGen() {
        for (row in currGen) {
            for (col in currGen[row]) {
            
                let neighbors = getNeighborCount(row, col);
            
                // Check the rules
                // If Alive
                if (currGen[row][col] == 1) {
                
                    if (neighbors < 2) {
                        nextGen[row][col] = 0;
                    } else if (neighbors == 2 || neighbors == 3) {
                        nextGen[row][col] = 1;
                    } else if (neighbors > 3) {
                        nextGen[row][col] = 0;
                    }
                } else if (currGen[row][col] == 0) {
                    // If Dead or Empty
                
                    if (neighbors == 3) {
                        // Propogate the species
                        nextGen[row][col] = 1;// Birth?
                    }
                }
            }
        }
        
    }

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


    function evolve(){
      
        createNextGen();
        updateCurrGen();
        updateWorld();
}