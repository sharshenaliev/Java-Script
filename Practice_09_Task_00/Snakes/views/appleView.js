import FieldView from './fieldView.js';
import DrawingHelpers from '../utilites/drawingHelpers.js'

export default class AppleView {
    static draw(ctx, apple) {
        
        const cellX = centeringShiftX + apple._x * cellWidth;
        const cellY = centeringShiftY + apple._y * cellHeight;

        const [x, y] = [cellX, cellY];
                const [width, height] = [FieldView.cellWidth - 1, FieldView.cellHeight - 1];
                DrawingHelpers.fillRect(ctx, x, y, width, height, apple.color);
    }
}