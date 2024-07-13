document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("myAudio");
    var video = document.getElementById("myVideo");

    audio.play();
    video.play();
});


document.querySelector('.contact-form form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});