//Hides the  example label button
document.getElementById("text-body").style.display = "none";

//Hides the  image
//document.getElementById("warning-body").style.display = "none";

//inputId = document.getElementById('input-width-2');
//WBId = document.getElementById('warning-body');
//inputId.addEventListener('keyup', function onEvent(e) {
 //   if (e.keyCode === 13) {
 //       $("#warning-body").fadeIn();
 //   }
//});

//$('#input-width-2').keypress(function(e){
    //if (e.keyCode == 13) {
        
       // $('#warning-body').fadeIn();
    //}
//});

//$('#input-width-2').keypress(function(e){
   // if (e.keyCode == 13) {
      //  $("warning-body").fadeIn();
        //$('#warning-body').fadeIn();
    //}
//});


var menu = document.getElementById("input-width-2"); //menu selector handler
menu.addEventListener("change",numberFact);
menu.addEventListener("change",numberFact);

function numberFact(event) {
    $('#text-body').fadeIn();
    if  (menu.value > 9) {
        document.getElementById('warning-title').innerHTML = "Oh no, the sugar is too high.." ;
        document.getElementById('warning-body').innerHTML = "You better take some insulin" ;
        document.getElementById("warning-title").style.backgroundColor = "#FFEB3C";
        document.getElementById("warning-title").style.color = "black";
        document.getElementById("text-body").style.backgroundColor = "#FFFAC3";
    } 
    else if (menu.value < 4) {
        document.getElementById('warning-title').innerHTML = "Your sugar level is too low..";
        document.getElementById("warning-body").innerHTML = "Consider eating something..";
    }
    else {
        document.getElementById('warning-title').innerHTML = "All is good";
        document.getElementById("warning-body").innerHTML = "Keep it up";
        document.getElementById("warning-title").style.backgroundColor = "#005EB8";
        document.getElementById("warning-title").style.color = "white";
        document.getElementById("text-body").style.backgroundColor = "#D8DDE0";
    }
}
