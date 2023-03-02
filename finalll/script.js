const matrix = [];
const side = 30;
var grassArr = [];
var grassEaterArr = [];
var monsterArr = [];
var helpArr = [];
var virusArr = [];
var mahahaArr=[];
var wolfArr=[];
var season = "Summer";
var seasonCount = 0;
var h = 50;
var w = 50;
var killedByPlayer=0;
var stats = {};
// var weather = document.getElementById('weather');
// weather.innerHTML = season;


function generator(grass, grassEater, matrixSize, monster, help, virus,wolf,mahaha){
    for(let i = 0; i < matrixSize; i++){
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0);
        }
    }
    for (let i = 0; i < grass; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 1;
        grassArr.push(new Grass(x, y));
    }
    for (let i = 0; i < grassEater; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 2;
        grassEaterArr.push(new GrassEater(x, y));
    }
    for (let i = 0; i < monster; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 3;
        monsterArr.push(new Monster(x, y));
    }
    for (let i = 0; i < help; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 4;
        helpArr.push(new Help(x, y));
    }
    for (let i = 0; i < virus; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 5;
        virusArr.push(new Virus(x, y));
    }

    for (let i = 0; i < wolf; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 6;
        wolfArr.push(new Wolf(x, y));
    }
    for (let i = 0; i < mahaha; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 7;
        mahahaArr.push(new Mahaha(x, y));
    }
}

function setup() {
    frameRate(5);
    generator(50, 50, 30, 10, 10, 9, 15, 20);
    createCanvas(matrix[0].length * side, matrix.length * side)
}

// function setup() {
//     frameRate(5);    
//     for (let y = 0; y < h; y++) {
//         matrix[y] = [];
//         for (let x = 0; x < w; x++) {
//             let rand = random(100);
//             let index = 0;
//             if (rand < 30) index = 0;
//             else if (rand < 55) index = 1;
//             else if (rand < 75) index = 2 * randomGender();
//             else if (rand < 95) index = 3 * randomGender();
//             else if (rand < 99) index = 4 * randomGender();
//             else if (rand < 99.9) index = 5;
//             else if (rand <= 100) index = 6;
//             matrix[y][x] = index;               
//             }
//     }
//     createCanvas(matrix[0].length * side, matrix.length * side);
    
//     for (let y = 0; y < matrix.length; ++y) {
//         for (let x = 0; x < matrix[y].length; ++x) {
//             if (matrix[y][x] == 1) {
//                 grassArr.push(new Grass(x, y, 1));
//             }
//             else if (matrix[y][x] == 2) {
//                 grassEaterArr.push(new GrassEater(x, y, 2));
//             }
//             else if (matrix[y][x] == 20) {
//                 grassEaterArr.push(new GrassEater(x, y, 20));
//             }
//             else if (matrix[y][x] == 3) {
//                 wolfArr.push(new Wolf(x, y, 3));
//             }
//             else if (matrix[y][x] == 30) {
//                 wolfArr.push(new Wolf(x, y, 30));
//             }
//             
//             else if (matrix[y][x] == 5) {
//                 mahahaArr.push(new Mahaha(x, y, 5));
//             }
//             
//         }
//     }

// }

function mouseClicked() {
  
    let y = Math.floor(mouseY/side)
    let x = Math.floor(mouseX/side)-1
    for(var i= 0; i < side;i++)
    {
        for(var j = x ; j < x + 3; j++)
        {
            
            matrix[i][j] = 0

        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("DarkGrey");
            }
            else if (matrix[y][x] == 1) {
                fill("Green");
                text('grass',x * side, y * side, side, side)
            }
            else if(matrix[y][x] == 2){
                fill("Yellow");
                text('cow',x * side, y * side, side, side)
            }
            else if(matrix[y][x] == 3){
                fill("Indigo");
            }
            else if(matrix[y][x] == 4){
                fill("White");
            }
            else if(matrix[y][x] == 5){
                fill("Red");
            }
            else if (matrix[y][x] == 6) {
                fill("black");
            }
            else if (matrix[y][x] == 7) {
                fill("pink");
            }
            else if (matrix[y][x] == 8) {
                fill("tean");
            }

            rect(x * side, y * side, side, side);
            
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in monsterArr) {
        monsterArr[i].eat();
    }
    for (var i in helpArr) {
        helpArr[i].eat();
    }
    for (var i in virusArr) {
        virusArr[i].eat();
    }

    for (var i in wolfArr) {
        wolfArr[i].eat();
    }
    for (var i in mahahaArr) {
        mahahaArr[i].eat();
    }
    for (var i in mahahaArr) {
        mahahaArr[i].mul();
    }
    for (var i in wolfArr) {
        wolfArr[i].eat();
    }
    for (var i in wolfArr) {
        wolfArr[i].mul();
    }
    
//
// if (frameCount % 60 == 0) {
//     stats = {
//         "frameCount": frameCount,
//         "seasons": seasonCount,
//         "grassC": grassArr.length,
//         "wolfsC": wolfArr.length,
//         "MahahasC": mahahaArr.length,
//         "killedByPlayer": killedByPlayer
//     }
//     socket.emit("send stats", stats);
// }

// if (frameCount % 25 == 0) {
//     if (season == "Summer") {
//         season = "Winter";
//     }
//     else {
//         season = "Summer"; 
//     } 
//     seasonCount++;   
//     weather.innerHTML = season;

// }


// for (var i in grassArr) {
//     if (season != "Winter") {
//         grassArr[i].multiply();
//     }  
// }

//////////////////////////////////



for (var i in virusArr) {
    virusArr[i].mul++;
    if (season == "Winter") {
        if (virusArr[i].mul >= virusArr[i].speed + 3) {
            virusArr[i].eat();
        }
    }
    else if (season == "Summer") {
        if (virusArr[i].mul >= virusArr[i].speed) {
            virusArr[i].eat();
        }
    }
    
    if (virusArr[i].energy <= 0) {
        virusArr[i].die();
    }
}

for (var i in wolfArr) {
    wolfArr[i].mul++;
    if (season == "Winter") {
        if (wolfArr[i].mul >= wolfArr[i].speed + 2) {
            wolfArr[i].eat();
        }
        // if (wolfArr[i].energy >= 7) {
        //     wolfArr[i].multiply();
        // }
    }
    else if (season == "Summer") {
        if (wolfArr[i].mul >= wolfArr[i].speed) {
            wolfArr[i].eat();
        }
        // if (wolfArr[i].energy >= 5) {
        //     wolfArr[i].multiply();
        // }
    }

    if (wolfArr[i].energy <= 0) {
        wolfArr[i].die();
    }
}

for (var i in monsterArr) {
    monsterArr[i].mul++;
    if (season == "Summer" && monsterArr[i].mul >= monsterArr[i].speed) {
        monsterArr[i].eat();
    }
    else if (season == "Winter" && monsterArr[i].mul >= monsterArr[i].speed + 1) {
        monsterArr[i].eat();
    }
    // if (monsterArr[i].energy >= 7) {
    //     monsterArr[i].multiply();
    // }
    else if (monsterArr[i].energy <= 0) {
        monsterArr[i].die();
    }
}

for (var i in mahahaArr) {
    mahahaArr[i].mul++;
    if (season != "Summer"){
        if (mahahaArr[i].mul >= mahahaArr[i].speed){
            mahahaArr[i].move();   
        }    
        // if (mahahaArr[i].energy >= 15) {
        //     mahahaArr[i].multiply();
        // }
        else if (mahahaArr[i].energy <= 0) {
            mahahaArr[i].die();
        }
    }
}


/////////////////////////////////////////////////



}





function randomGender() {
    var gender;
    if (random() >= 0.5) gender = 10;
    else gender = 1;
    return gender;
    
}

function killCreature(x, y) {
    if (matrix[y][x] == 1) {
        for (var i in grassArr) {
            if (grassArr[i].x == x && grassArr[i].y == y) {
                grassArr.splice(i, 1);
                killedByPlayer++;
                matrix[y][x] = 0;
                break;
            }
        }
    }
    else if (matrix[y][x] == 2 ) {
        for (var i in grassEaterArr) {
            if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                grassEaterArr.splice(i, 1);
                matrix[y][x] = 0;
                killedByPlayer++;
                break;
            }
        }
    }
    else if (matrix[y][x] == 6) {
        for (var i in wolfArr) {
            if (wolfArr[i].x == x && wolfArr[i].y == y) {
                wolfArr.splice(i, 1);
                killedByPlayer++;
                matrix[y][x] = 0;
                break;
            }
        }
    }
    else if (matrix[y][x] == 3) {
        for (var i in monsterArr) {
            if (monsterArr[i].x == x && monsterArr[i].y == y) {
                monsterArr.splice(i, 1);
                killedByPlayer++;
                matrix[y][x] = 0;
                break;
            }
        }
    }

    
}
