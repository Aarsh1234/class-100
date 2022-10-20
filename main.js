var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML=recognition.start();
}
Webcam.set({
    width: 250,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 camera=document.getElementById("camera");
 Webcam.attach( '#camera' );
recognition.onresult=function (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content=="selfie")
    {
        console.log("takingselfie");
        speak();
    }
}
function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+ data_uri + '">';
    });
}
function speak(){
    var synth=window.speechSynthesis;
   speak_data="taking selfie in 5 seconds";
   var utter_this=new SpeechSynthesisUtterance(speak_data);
   synth.speak(utter_this);
   setTimeout(function(){
       take_snapshot();
       save();
   }, 5000);
}
function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie_image").src;
    link.href=img;
    link.click();

}