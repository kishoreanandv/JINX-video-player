const videoPlayer = document.querySelector(".video-container");
// console.log(videoPlayer);
const video = videoPlayer.querySelector(".video");
const play = videoPlayer.querySelector(".play");
const volume = videoPlayer.querySelector(".volume");
const currentTime = videoPlayer.querySelector(".currentTime");
const totalTime = videoPlayer.querySelector(".totalTime");
const progressBox = videoPlayer.querySelector(".progress-box");
const progress = videoPlayer.querySelector(".progress");

function playPause(e) {
  const playing = video.paused ? "play" : "pause";
  video[playing]();
  const playButton = video.paused ? "▶" : "‖‖";
  play.textContent = playButton;
}

function volumeChange(e) {
  video.volume = e.target.value;
  // console.log("entering");
}
function timeChange() {
  let currentMinutes = Math.floor(video.currentTime / 60);
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
  let totalMinutes = Math.floor(video.duration / 60);
  let totalSeconds = Math.floor(video.duration - totalMinutes * 60);

  currentTime.innerHTML = `${
    currentMinutes < 10 ? "0" + currentMinutes : currentMinutes
  }:${currentSeconds < 10 ? "0" + currentSeconds : currentSeconds}`;
  totalTime.innerHTML = `${totalMinutes}:${totalSeconds}`;
}

function progressChange() {
  const level = (video.currentTime / video.duration) * 100;
  progress.style.width = `${level}%`;
}
function progressClick(e) {
  console.log(e);
  const progressClickUpdate =
    (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = progressClickUpdate;
}
play.addEventListener("click", playPause);
video.addEventListener("click", playPause);
volume.addEventListener("mousemove", volumeChange);
video.addEventListener("timeupdate", timeChange);
video.addEventListener("timeupdate", progressChange);
progress.addEventListener("click", progressClick);

// https://www.youtube.com/watch?v=yOw9-2kVJPQ-----still this to be done
