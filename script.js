document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('box');
    const ctx = canvas.getContext('2d');

    // Draw something simple to test the canvas
    canvas.addEventListener('mousemove', function (e) {
        ctx.fillStyle = 'black';
        ctx.fillRect(e.offsetX, e.offsetY, 2, 2);  // Draw a small square for testing
    });
});