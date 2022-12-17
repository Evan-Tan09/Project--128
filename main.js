noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
rightWristY = 0;
leftWristY = 0;
song1 = "";
song2 = "";
function preload() {
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("Model Loaded");
}
function gotPoses(results) {
    if (results.length > 0) {
        //console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        leftWristY = results[0].pose.leftWrist.y;
        console.log(leftWristX);
        console.log(rightWristX);
        console.log(leftWristY);
        console.log(rightWristY);
    }
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function play() {
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}
function stop() {
    song2.stop();
}


