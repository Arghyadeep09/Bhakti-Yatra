//Function to expand the card and show the rest of the information..

function cardExpand(button) {
    const card = button.closest('.card');           //CLOSEST A TYPE OF FUNCTION WHICH TARGETS NEAREST ANCESTOR OF AN ELEMENT           
    const dots = card.querySelector('.dots');      // REFERRING TO 3 DOTS
    const rest = card.querySelector('.rest');     //  REMAINING PART OF THE DESCRIPTION 

    //JAB CARD KHULA NAHI HAI 

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        button.innerHTML = "Read More";
        rest.style.display = "none";
    } 
    
    //JAB CARD KHUL GAYA
    else {
        dots.style.display = "none";
        button.innerHTML = "Read less";
        rest.style.display = "inline";
    }
}
/*--------------------------------*/