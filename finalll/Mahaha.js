class Mahaha extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 20;
        
    }



//     multiply() {
//         var newCell = random(this.chooseCell(0, 1));
//         if (newCell) {
//             if(matrix[newCell[1]][newCell[0]] == 1){
//                 for (var i in grassArr) {
//                     if (grassArr[i].x == newCell[0] && grassArr[i].y == newCell[1]) {
//                         grassArr.splice(i, 1);
//                         break;
//                     }
//                 }
//             }
//             var newMahaha = new Mahaha(newCell[0], newCell[1], this.index);
//             mahahaArr.push(newMahaha);
//             matrix[newCell[1]][newCell[0]] = this.index;
//             this.energy -= 5;
//         }
//     }

//     die() {
//         super.die(mahahaArr);
//     }


getNewCoordinates() {
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
    ];
}

chooseCell(character, food1,food2) {
    this.getNewCoordinates();
    var found = [];
    for (var i in this.directions) {
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == character || matrix[y][x] == food1 | matrix[y][x] == food2) {
                found.push(this.directions[i]);
            }
        }
    }
    return found;
}

mull() {
    var found = this.chooseCell(0);
    var newCell = random(found);

    if (newCell && this.energy >= 6) {
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 3;
        mahahaArr.push(new Mahaha(newX, newY));
        this.energy = 5;
    }
}

move() {
    var found = this.chooseCell(0);
    var newCell = random(found);

    if (newCell) {
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 3;

        matrix[this.y][this.x] = 0;

        this.x = newX;
        this.y = newY;
    }
    this.energy--;

    if (this.energy < 0) {
        this.die();
    }
}

eat() {
    var found = this.chooseCell(1, 2);
    var newCell = random(found);

    if (newCell) {
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 3;

        matrix[this.y][this.x] = 0;

        this.x = newX;
        this.y = newY;
        this.energy++;

        for (var i in grassEaterArr) {
            if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
        }
    }
    // for (var i in helpArr) {
    //     if (this.x == helpArr[i].x && this.y == helpArr[i].y) {
    //         helpArr.splice(i, 1);
    //         break;
    //     }
   // }
        if (this.energy >=10) {
            this.mull();
        }
    }
    else {
        this.move();
    }
}

die() {
    for (var i in mahahaArr) {
        if (this.x == mahahaArr[i].x && this.y == mahahaArr[i].y) {
            mahahaArr.splice(i, 1);
            break;
        }
    }
    matrix[this.y][this.x] = 0;
}

}