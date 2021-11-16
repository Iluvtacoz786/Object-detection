var img=""
function preload(){
    img=loadImage("dog_cat.jpg")
}
function setup(){
canvas=createCanvas(500,400);
canvas.position(400,150);
}
function draw(){
    image(img,0,0,500,400)
    fill("red");
    text("Dog",200,380);
    noFill()
    stroke("red")
    rect(0,30,250,360)

    fill("red");
    text("Cat",400,380);
    noFill()
    stroke("red")
    rect(0,30,500,360)
}