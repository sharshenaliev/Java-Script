
export default class SnakesModel {
    constructor(field) {
        this._snakes = {}
        this._spawnPoints = [
            {'x': 0,                'y': 0,                  'dx':  1,  'dy': 0 },
            {'x': field.width - 1,  'y': 0,                  'dx': -1,  'dy': 0 },
            {'x': field.width - 1,  'y': field.height - 1,   'dx': -1,  'dy': 0 },
            {'x': 0,                'y': field.height - 1,   'dx':  1,  'dy': 0 }
    ];
        this._field = field
    }

    spawSnake(id) {
        const spawnPoint = this._spaqPoints.shift();
        if (!spawnPoint) {
            return undefined;
        }
    
        const snake = this._snakes[id] = 
            new SnakesModel(
                spawnPoint.x, spawnPoint.y,
                spawnPoint.dx, spawnPoint.dy,
                3,
                this._field
            );

        return snake;
    }

    move() {
        
    }
}