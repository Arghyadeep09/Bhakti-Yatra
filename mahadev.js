document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("myAudio");
    var video = document.getElementById("myVideo");

    audio.play();
    video.play();
});

document.getElementById("hamburgerBtn").onclick = function() {
    var links = document.getElementById("navbarLinks");
    if (links.classList.contains("active")) {
      links.classList.remove("active");
    } else {
      links.classList.add("active");
    }
  };
  
