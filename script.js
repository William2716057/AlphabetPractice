//variables
let flashCtx, flashcard, ctx, canvas;

// Display letters
function drawLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter = letters[Math.floor(Math.random() * letters.length)];

    flashCtx.clearRect(0, 0, flashcard.width, flashcard.height);
    flashCtx.font = '150px Arial';
    flashCtx.fillStyle = 'black'; 
    flashCtx.textAlign = 'center'; 
    flashCtx.textBaseline = 'middle';
    flashCtx.fillText(letter, flashcard.width / 2, flashcard.height / 2);
}

//slide functions
function slideFlashCard() {
    flashcard.style.transition = 'transform 0.5s ease';
    flashcard.style.transform = 'translateX(-400px)';

    setTimeout(() => {
        flashcard.style.transition = 'none'; 
        flashcard.style.transform = 'translateY(-400px)';

        drawLetter();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        requestAnimationFrame(() => {
            flashcard.style.transition = 'transform 0.5s ease';
            flashcard.style.transform = 'translateY(0)';
        });
    }, 500);
}

// Initialize after DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    canvas = document.getElementById('box');
    ctx = canvas.getContext('2d');
    flashcard = document.getElementById('flashcard');
    flashCtx = flashcard.getContext('2d');

    //positions on screen
    let lastX = 0;
    let lastY = 0;
    let isDrawing = false;

    // Drawing
    canvas.addEventListener('mousedown', function (e) {
        isDrawing = true;
        lastX = e.offsetX;
        lastY = e.offsetY;
    });

    canvas.addEventListener('mousemove', function (e) {
        if (isDrawing) {
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 16;
            ctx.stroke();

            lastX = e.offsetX;
            lastY = e.offsetY;
        }
    });

    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);


    document.querySelector('button:nth-of-type(2)').addEventListener('click', function () {
        slideFlashCard();
    });

    // Initialise letters
    drawLetter();
});