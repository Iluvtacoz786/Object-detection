var img=""
var status=""
object=[]
function preload(){
    img=loadImage("dog2cat2.jpeg")
}
function setup(){
canvas=createCanvas(500,400);
canvas.position(400,150);
objectDetector=ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("status").innerHTML="status: detecting object"

}
function draw(){
    image(img,0,0,500,400)
    if(status!=""){
        for(i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="Status: Object detected"
            fill("red");
            text(object[i].label,object[i].x,object[i].y);
            noFill()
            stroke("red")
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
    }
   

   
}
function modelLoaded(){
    console.log("model is loaded")
    status=true;
    objectDetector.detect(img,gotResult)
}
function gotResult(error, result){
if(error){
console.log(error)
}
else{
    object=result;
    console.log(result)
}
}