document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("myAudio");
    audio.play();
});

document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the SEND button
    document.getElementById("sendButton").addEventListener("click", function() {
      // Clear input fields after clicking SEND
      alert("Your Message Send Successfully");
      document.getElementById("nameInput").value = "";
      document.getElementById("emailInput").value = "";
      document.getElementById("contactNoInput").value = "";
      document.getElementById("messageInput").value = "";
    });
    document.getElementById("cancelButton").addEventListener("click", function() {
        // Clear input fields after clicking CANCEL
        document.getElementById("nameInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("contactNoInput").value = "";
        document.getElementById("messageInput").value = "";
      });
  });
  