document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('box');
    const ctx = canvas.getContext('2d');

    let lastX = 0;
    let lastY = 0;
    let isDrawing = false;  // Track mouse up or down


    canvas.addEventListener('mousedown', function (e) {
        isDrawing = true;  // is pressed
        lastX = e.offsetX;  // update position
        lastY = e.offsetY;
    });

    // Draw lines 
    canvas.addEventListener('mousemove', function (e) {
        if (isDrawing) {  
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.strokeStyle = 'black'; 
            ctx.lineWidth = 16; 
            ctx.stroke();  // Render 

            // Update the last position 
            lastX = e.offsetX;
            lastY = e.offsetY;
        }
    });

    // Stop drawing when released
    canvas.addEventListener('mouseup', function () {
        isDrawing = false;  // Mouse button released
    });


    canvas.addEventListener('mouseout', function () {
        isDrawing = false;  // Stop drawing if the cursor leaves the canvas
    });
});