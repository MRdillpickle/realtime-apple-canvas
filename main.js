apple = "";
screen_w = 0;
screen_H = 0;
speak_data = "";
to_number = "";
x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
to_number = Number(content);
if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Started Drawing apple";
} else{
    document.getElementById('status').innerHTML = "The Speach not rec a number";
}
}

function setup() {
 screen_w = window.innerWidth;
 screen_H = window.innerHeight;
 createCanvas(screen_w,screen_H - 150);
 canvas.center();

}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    document.getElementById("Status").innerHTML = to_number + "apples Drawn";
    speak_data = to_number + "apples drawn";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}