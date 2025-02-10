
//Aufgabe 1
const canvas_r = document.getElementById("my-rectangle");
if (canvas_r.getContext) {
    const ctx = canvas_r.getContext("2d");
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
function clock() {
  const now = new Date();
  const canvas = document.getElementById("canvas-clock");
  const ctx = canvas.getContext("2d");
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // Hour marks
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  const sec = now.getSeconds();
  // To display a clock with a sweeping second hand, use:
  // const sec = now.getSeconds() + now.getMilliseconds() / 1000;
  const min = now.getMinutes();
  const hr = now.getHours() % 12;

  ctx.fillStyle = "black";

  // Write image description
  canvas.innerText = `The time is: ${hr}:${min}`;

  // Write Hours
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
  );
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // Write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // Write seconds
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = "rgb(0 0 0 / 0%)";
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#325FA2";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);



