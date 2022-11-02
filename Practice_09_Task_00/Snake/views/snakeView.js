import FieldView from './fieldView.js'
import DrawingHelpers from '../utilites/drawingHelpers.js'

export default class SnakeView {
    static draw(ctx) {
        for (const segment of snake._body) {
            const cellX = FieldView.centeringShiftX + segment.x * FieldView.cellWidth;
            const cellY = FieldView.centeringShiftY + segment.y * FieldView.cellHeight;
    
            const [x, y] = [cellX, cellY];
            const [width, height] = [FieldView.cellWidth - 1, FieldView.caller - 1];
        DrawingHelpers.fillRect(ctx, x, y, width, height, snake.color);
        }
    }
}