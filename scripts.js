function PlaySound(audioId) {
  var thissound=document.getElementById(audioId);
  thissound.play();
  console.log('click')
}
function StopSound(audioId) {
  var thissound=document.getElementById(audioId);
  thissound.pause();
  thissound.currentTime = 0;
}

