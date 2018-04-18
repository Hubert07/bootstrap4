/*jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

ctx.fillStyle="#ff0000";
ctx.fillRect(0, 0, 100, 100);
ctx.fillRect(200, 0, 100, 100);
ctx.fillRect(100, 100, 100, 100);
ctx.fillRect(0, 200, 100, 100);
ctx.fillRect(200, 200, 100, 100);


ctx.clearRect(10, 10, 50, 50);

ctx.strokeRect(50, 50, 50, 50);
