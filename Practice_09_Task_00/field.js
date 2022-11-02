class Field {
    constructor(width, height) {
        this._width = width;
        this._height = height;
        this._data = Array.from(Array(this._height), () => {
            return new Array(this._width).fill(false);
        });
    }
    
    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    areCoordinatesInside(x, y) {
        return x >= 0 && x < this._width &&
               y >= 0 && y < this._height;
    }

    markCell(x, y) {
            this._data[y][x] = true;
    }

    draw(ctx) {
        for (let i = 0; i < this._height; i++) {
            for (let j = 0; j < this._width; j++) {
                const cellX = centeringShiftX + j * cellWidth; 
                const cellY = centeringShiftY + i * cellHeight;

                ctx.fillStyle = this._data[i][j] ? 'red' : 'white';
                ctx.beginPath();
                ctx.rect(cellX, cellY, cellWidth - 1, cellHeight - 1);
                ctx.fill();
            }
        }
    }
}

