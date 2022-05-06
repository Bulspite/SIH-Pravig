
var i = 0;
var txt = 'Under North Eastern Counsil, Ministry Of Doner!';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("Home-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}typeWriter();
