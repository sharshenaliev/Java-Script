export default class AppleModel {
    constructor(field, snake) {
            do {
                this._x = Math.trunc(Math.random() * field.width);
                this._y = Math.trunc(Math.random() * field.height);
            } while (snake.isCollidingWithBody(this._x, this._y));    
        this._color = 'red';
        this._field = field;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    isColliding(x, y) {
        return x === this._x &&
               y === this._y
    }

}