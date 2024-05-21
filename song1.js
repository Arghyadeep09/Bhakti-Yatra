document.addEventListener("DOMContentLoaded", function() {
    let play = document.getElementById("openPageButton");
  
    function solve() {
      localStorage.setItem('playAudio', 'true');
      window.location.href = "hanuman.html";
    }
  
    play.addEventListener("click", solve);
  });