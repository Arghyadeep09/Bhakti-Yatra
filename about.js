document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("myAudio");
    audio.play();
    console.log("Audio is playing.");

    const text = "visiting";
    let i = 0;
    const typewriterElement = document.getElementById("typewriter");

    

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            console.log(`Adding character: ${text.charAt(i)}`);
            i++;
            setTimeout(typeWriter, 500); // Adjust typing speed here
        } else {
            setTimeout(() => {
                typewriterElement.innerHTML = '';
                i = 0;
                console.log("Restarting typewriter animation.");
                typeWriter();
            }, 1000); // Delay before restarting the typing animation
        }
    }

    typeWriter();
});



document.querySelector('.contact-form form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});