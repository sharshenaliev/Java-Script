import AppleView from './appleView.js';
import DrawingHelpers from '../utilites/drawingHelpers.js'

export default class FieldView {
    static cellWidth  = 20;
    static cellHeight = 20;
    static centeringShiftX;
    static centeringShiftY;

    static recalculateDrawingSizes(screenWidth, screenHeight, field) {
        const fieldPixelWidth  = field.width * cellWidth;
        const fieldPixelHeight = field.height * cellHeight;
        this.centeringShiftX = (screenWidth - fieldPixelWidth) / 2;
        this.centeringShiftY = (screenHeight - fieldPixelHeight) / 2;
    }

    static draw(ctx) {
        for (let i = 0; i < this._height; i++) {
            for (let j = 0; j < this._width; j++) {
                const cellX = centeringShiftX + j * cellWidth; 
                const cellY = centeringShiftY + i * cellHeight;

                const [x, y] = [cellX, cellY];
                const [width, height] = [this.cellWidth - 1, this.cellHeight - 1];
                DrawingHelpers.fillRect(ctx, x, y, width, height, field.color);
            }
        }

        if (field._apple) {
            AppleView.draw(ctx, field.apple);
        }
    }
}