let flashCtx, flashcard, ctx, canvas;
//alphabet
//display letter function
function drawLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter = letters[Math.floor(Math.random() * letters.length)];

    flashCtx.clearRect(0, 0, flashcard.width, flashcard.height);
    flashCtx.font = '150px Arial';
    flashCtx.Style = 'black';
    flashCtx.Align = 'Center';
    flashCtx.textBaseline = 'middle';
    flashCtx.fillText(letter, flashcard.width / 2, flashcard.height / 2);
}

//slide offscreen
function slideFlashCard() {
    flashcard.style.transition = 'transform 0.5s ease';
    flashcard.style.transform = 'translateX(-400px)';

    setTimeout(() => {
        slideFlashCard.style.transition = 'none';
        slideFlashCard.style.transform = 'translateY(-400px)';

        //change to new letter
        drawLetter();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //animate 
        requestAnimationFrame(() => {
            flashcard.style.transition = 'transform 0.5s ease';
            flashcard.style.transform = 'translateY(0)';
        });
    }, 500);
}

//next button 
document.querySelector('button:nth-of-type(2)').addEventlistener('click', function () {
    slideFlashCard();
});


document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('box');
    const ctx = canvas.getContext('2d');

    let lastX = 0;
    let lastY = 0;
    let isDrawing = false;  // Track mouse up or down

    //drawing functions
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
        lastX = e.offsetX;
        lastY = e.offsetY;
    });


    canvas.addEventListener('mouseout', function () {
        isDrawing = false;  // Stop drawing if the cursor leaves the canvas
    });

    //starting letter
    drawLetter();
});