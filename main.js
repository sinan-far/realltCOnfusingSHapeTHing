function preload(){
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
    video.size(200,200);
}

function draw() {
    image(video, 200 , 150 , 200,200 ); 
    fill(0,0,0)
    rect(100,100,450,20);
    rect(100,400,450,20);
    rect(100,100,20,300);
    rect(530,100,20,300);
    fill(80, 200, 120);
    circle(100,110,60);
    circle(550,110,60);
    circle(100,400,60);
    circle(550,400,60);

}