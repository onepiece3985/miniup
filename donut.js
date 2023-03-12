var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
// ctx.arc(200, 75, 50, 1.5 * Math.PI, 1.5 * Math.PI * 0.999);
ctx.arc(150, 75, 50, 4.71239, 0.75 * 6.28319 - (90 * Math.PI / 180));
ctx.lineWidth = 16;
ctx.lineCap = "round";
ctx.strokeStyle = "#0081F5"
ctx.stroke();
// ctx.rotate(20 * Math.PI / 180);