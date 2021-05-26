function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(450, 450);
    canvas.position(660, 100);
    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose', gotposes)
}

function draw() {
    background("#38ffb6");
}

function modelloaded() {
    console.log('posenet is initialized');
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
    }
}