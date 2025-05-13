document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('box');
    const ctx = canvas.getContext('2d');

    let lastX = 0;
    let lastY = 0;


    canvas.addEventListener('mousedown', function (e) {
        if (lastX !== 0 || lastY !== 0) { 
            ctx.beginPath();
            ctx.moveTo(lastX, lastY); 
            ctx.lineTo(e.offsetX, e.offsetY); 
            ctx.strokeStyle = 'black';  
            ctx.lineWidth = 2; 
            ctx.stroke();  
        }

       
        lastX = e.offsetX;
        lastY = e.offsetY;
    });
});