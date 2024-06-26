img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("C:\Users\Naythan PC\Downloads\AI-Mario-Game-Student\AI-Mario-Game-Student\imgs\mario\mario05.png")
}

function setup() {
	canvas = createCanvas(650,400);
	initializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(600, 300);
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() 
{
	game()
	background("#D3D3D3");
	if(noseX < 300)
	{
		marioX = marioX - 1;
	}

	if(noseX > 300)
	{
		marioX = marioX + 1;
	}

	if(noseY < 150)
	{
		marioY = marioY - 1;
	}

	if(noseY > 150)
	{
		marioY = marioY + 1;
	}
	image(img, marioX, marioY, 40, 70);	
}

function modelLoaded()
{
	console.log('The Model Has Been Loaded')
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}