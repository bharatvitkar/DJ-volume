song="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
function preload()
{
song=loadSound("music.mp3");
}

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
  
} 

function gotPoses(results)
{
  if(results.length>0)
  {
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    console.log("leftwristx = "+leftwristx+"leftwristy = "+leftwristy);
   rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    console.log("rightwristx = "+rightwristx+"rightwristy = "+rightwristy);
  }
}

function modelLoaded()
{
  console.log('poseNet is initialized');
}

function draw()
{
    image(video,0,0,600,500);
   fill("#e61405");
   stroke("#e61405");
   circle(leftwristx,leftwristy,20);
   leftwristynumber=Number(leftwristy);
   removedecimal=floor(leftwristynumber);
   volume=removedecimal/500;
   document.getElementById("volume").innerHTML="volume = "+volume;
   song.setVolume(volume);
}

function play()
{
  song.play();
 song.setVolume(1);
 song.rate(1);
}


