song1="";
song2="";
leftWristX=0;
leftWristY=0;  
rightWristX=0;
writeWristY=0; 


function preload()
{
    song1 = loadSound("unity.mp3");
    song2 = loadSound("cool.mp3");
}

function setup()
{
canvas=createCanvas(600,500);
canvas.position(650,300);

video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded); 
poseNet.on('pose', gotPoses);
}

function draw()
{
image(video, 0,0,600,500);
}

function play()
{
    song1.play();
    song2.play();

    song1.setVolume(1);
    song2.rate(1);
    song1.setVolume(1);
    song2.rate(1);
}

function modelLoaded()
{
    console.log('posenet is activated.');
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    leftWristX=results[0].pose.leftWrist.X;
    leftWristY=results[0].pose.leftWrist.Y;
    console.log("leftwristX="+leftWristX+"leftwristY="+leftWristY);

    console.log(results);
    rightWristY=results[0].pose.rightWrist.Y;
    rightWristX=results[0].pose.rightWrist.X;
    console.log("rightwristX="+leftWristX+"rightwristY="+leftWristY);



}
}