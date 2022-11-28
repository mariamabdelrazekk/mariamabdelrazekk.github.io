var video = document.getElementById("OneVideo");
var btn1 = document.getElementById("VideoButton");
var btn2 = document.getElementById("BackButton");
var btn3 = document.getElementById("NextButton");

function myFunction1() {
  if (video.paused) {
    video.play();
    btn1.innerHTML = "Pause";
  } else {
    video.pause();
    btn1.innerHTML = "Play";
  }
}