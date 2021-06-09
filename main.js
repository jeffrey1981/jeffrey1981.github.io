var modal = document.getElementById("video-modal");
var btn = document.getElementById("video-modal-trigger");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
  iframe = document.getElementById('youtube-video-iframe');
  iframe.contentWindow.postMessage('{"event": "command", "func":"' +  'pauseVideo' + '", "args": ""}', '*');
}

span.onclick = function() {
  closeModal()
}

window.onclick = function(event) {
  if (event.target == modal) {
   closeModal()
  }
}