if (document.images) {
    img_on  = new Image();  
    img_on.src ="images/ok.jpg";

    img_off = new Image();
    img_off.src="images/ook.jpg";
}

function handleOver() { 
    if (document.images)
        document.emailButton.src = img_on.src;
}

function handleOut() {
    if (document.images)
        document.emailButton.src = img_off.src;
}
