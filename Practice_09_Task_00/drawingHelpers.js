const cellWidth  = 40;
const cellHeight = 40;
let centeringShiftX;
let centeringShiftY;

function initDrawingData(screenWidth, screenHeight) {
    const fieldPixelWidth  = field.width * cellWidth;
    const fieldPixelHeight = field.height * cellHeight;
    centeringShiftX = (screenWidth - fieldPixelWidth) / 2;
    centeringShiftY = (screenHeight - fieldPixelHeight) / 2;
}

function clearScreen(ctx, screenWidth, screenHeight) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.rect(0, 0, screenWidth, screenHeight);
    ctx.fill(); 
}