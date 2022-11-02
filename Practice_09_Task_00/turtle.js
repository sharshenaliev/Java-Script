class Turtle {
    constructor(x, y, field) {
        this._x = 0;
        this._y = 0;
        this._dx = 1;
        this._dy = 0;
        this._isPenDown = false;
        this._color = 'green';
        this._field = field;
    }
        
    turnUp() {
            this._dx = 0;
            this._dy = -1;
    }

    turnDown() {
            this._dx = 0;
            this._dy = 1;
    }

    turnLeft() {
            this._dx = -1;
            this._dy = 0;
    }

    turnRight() {
            this._dx = 1;
            this._dy = 0;
    }

    get isPenDown() {
        return this._isPenDown;
    }

    set isPenDown(penState){
        this._isPenDown = penState;
        this._color = this._isPenDown ? 'red' : 'green';
    }

    changePenState() {
            this._isPenDown = !this._isPenDown;
            
    }
    
    move() {
            let nextX = this._x + this._dx; 
            let nextY = this._y + this._dy;

            if (this._field.areCoordinatesInside(nextX, nextY)) {
                if (this._turtleIsPenDown) {
                    this._field.markCell(this._x, this_y);
                }
                this._x = nextX;
                this._y = nextY;
            }
    }

    draw(ctx) {
        const cellX = centeringShiftX + this._x * cellWidth;
        const cellY = centeringShiftY + this._y * cellHeight;
    
        ctx.fillStyle = this._color;
        ctx.beginPath();
        ctx.rect(cellX, cellY, cellWidth - 1, cellHeight - 1);
        ctx.fill();
    }
}
