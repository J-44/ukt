noseY= 0;
noseX=0;
function preload(){
  clown=loadImage('https://i.postimg.cc/WbTkgjb4/mustache.png')
}
function setup(){
  canvas = createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.size(300,300);
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotposes);
}
function gotposes(results){
  if(results.length > 0){
    console.log("Results");
    noseX=results[0].pose.nose.x-24;
    noseY=results[0].pose.nose.y;
    console.log("Munchi X ="+noseX);
    console.log("Munchi Y ="+noseY);
  }

}
function modelLoaded(){
  console.log("Posenet is initialized");
}
function draw(){
  image(video,0,0,300,300);
  image(clown,noseX,noseY,50,30); 
}
function takeSnapshot(){
  save('munchi.png');
}