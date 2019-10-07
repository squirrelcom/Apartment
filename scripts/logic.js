var tvOn = false;

function printImage() {
    
    if (tvOn === false){
        document.getElementById("screen").src="../images/05.gif";
        tvOn = true;
        console.log(tvOn);
    } else if (tvOn === true){
        document.getElementById("screen").src="../images/screen.png";
        tvOn = false;
        console.log(tvOn);
    }
}

function closeBlinds(){
        var num =Math.floor((Math.random() * 5) + 1);
        console.log(num);
    document.getElementById("Blinds").src="../images/Blinds0"+num+".png";
}