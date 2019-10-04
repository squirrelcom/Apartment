var tvOn = false;

function printImage() {
    
    if (tvOn === false){
        document.getElementById("screen").src="./images/05.gif";
        tvOn = true;
        console.log(tvOn);
    } else if (tvOn === true){
        document.getElementById("screen").src="./images/screen.png";
        tvOn = false;
        console.log(tvOn);
    }
}