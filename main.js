Webcam.set({
    width: 350,
    height: 300 
});
Webcam.attach('camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image' src="+data_uri+">";

    });
}
console.log("ml5 version=",ml5.version);
classifier=ml5.imageClassifier(" teachablemachine.withgoogle.com/models/ZZUbZeAIb/",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}