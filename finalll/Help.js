class Help {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [];
    }

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

    chooseCell(character, food1, food2) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character || matrix[y][x] == food1 || matrix[y][x] == food2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mull() {
        var found = this.chooseCell(0);
        var newCell = random(found);

        if (newCell && this.energy >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
            helpArr.push(new Help(newX, newY));
            this.energy = 5;
        }
    }

    move() {
        var found = this.chooseCell(0);
        var newCell = random(found);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

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
        var found = this.chooseCell(3, 5);
        var newCell = random(found);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
            this.energy++;

            for (var i in wolfArr) {
                if (newX == wolfArr[i].x && newY == wolfArr[i].y) {
                    wolfArr.splice(i, 1);
                    break;
            }
        }
        for (var i in monsterArr) {
            if (newX == monsterArr[i].x && newY == monsterArr[i].y) {
                monsterArr.splice(i, 1);
                break;
        }
    }
            if (this.energy >= 5) {
                this.mull();
            }
        }
        else {
            this.die();
        }
    }
    
    die() {
        for (var i in helpArr) {
            if (this.x == helpArr[i].x && this.y == helpArr[i].y) {
                helpArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 0;
    }
}
