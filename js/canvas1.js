/*jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

// ctx.fillStyle="#ff0000";
// ctx.fillRect(0, 0, 100, 100);
// ctx.fillRect(200, 0, 100, 100);
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillRect(0, 200, 100, 100);
// ctx.fillRect(200, 200, 100, 100);
ctx.fillRect(25, 25, 100, 100);


ctx.clearRect(45, 45, 60, 60);

// for (var i = 0; 1 < 10; i++) {
//   ctx.strokeRect(50 + i * 2, 50 + i * 2, 50 - i * 2, 50 - i * 2);
// }


ctx.font = 'italic bold 30px arial';
ctx.textBaseline = 'middle';
ctx.fillText('Witaj w Cnavas', 5, 145);

ctx.font = 'italic blod 30px arial';
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';
ctx.fillText('Jakis tekst', 90, 185);

//kolor
ctx.fillStyle = "#00fffb";


//koło
ctx.fillStyle = "#00fffb";
ctx.beginPath();

ctx.arc(150, 150, 50, 0, 2*Math.PI);
ctx.fill();


//koordyanty środka to te pierwsze 2
//
ctx.strokeStyle = '#ffffff';
ctx.arc(150, 150, 40, 0, 2*Math.PI);
ctx.stroke();
