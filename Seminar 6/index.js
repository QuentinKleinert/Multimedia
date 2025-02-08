
//Aufgabe 1
const canvas = document.getElementById("my-rectangle");
if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = 'red';
    ctx.lineWidth = 10;
    ctx.fillRect(50, 50, 200, 100); //x, y, width, heigt
}


//Aufgabe 2
const canvas_text_1 = document.getElementById('canvas1-text');
const canvas_text_2 = document.getElementById('canvas2-text');
if (canvas_text_1.getContext) {
    const ctx1 = canvas_text_1.getContext('2d');  
    ctx1.font = '20px Arial';
    ctx1.fillStyle = 'blue';
    ctx1.fillText('Dies ist ein kurzer Text im Canvas.', 10, 50);
}
if (canvas_text_2.getContext) {
    const ctx2 = canvas_text_2.getContext('2d');  
    ctx2.font = '20px Arial';
    ctx2.fillStyle = 'red';
    ctx2.fillText('Dies ist ein sehr langer Text, der die Grenzen des Canvas überschreitet, um zu sehen, was passiert.', 10, 50);
}

//Aufgabe 3
const canvas_picture = document.getElementById("picture-canvas");

function load() {
    if (canvas_picture.getContext) {
        const ctxp = canvas_picture.getContext("2d");
        const img = new Image();

        // Das Bild laden und sicherstellen, dass es fertig ist, bevor es gezeichnet wird
        img.onload = function () {
            ctxp.drawImage(img, 0, 0, canvas_picture.width, canvas_picture.height);

            // 3.6: Über das Bild zeichnen
            ctxp.strokeStyle = 'red';
            ctxp.lineWidth = 5;

            // Rechteck zeichnen
            ctxp.beginPath();
            ctxp.moveTo(50, 50);
            ctxp.lineTo(450, 50);
            ctxp.lineTo(450, 350);
            ctxp.lineTo(50, 350);
            ctxp.lineTo(50, 50);
            ctxp.stroke();

            // Vertikale Linie in der Mitte
            ctxp.beginPath();
            ctxp.moveTo(250, 50);
            ctxp.lineTo(250, 350);
            ctxp.stroke();
        };

        // Bildquelle setzen, nachdem der onload-Handler definiert wurde
        img.src = "https://placehold.co/600x400";
    }
}
load();

//Aufgabe 4

