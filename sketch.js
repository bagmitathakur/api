const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
   if(backgroundImg){
       background(backgroundImg);
   }

    Engine.update(engine);

    getBackgroundImg();



}

async function getBackgroundImg(){

    // write code to fetch time from API
var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")

    //change the data in JSON format
var responseJSON=await response.json();
    // write code slice the datetime
var time=responseJSON.time;
var hr=time.slice(11,19)

    // add conditions to change the background images from sunrise to sunset
    if(hr>=4&&hr<=5){
        bg="sunrise1.png";


    }
    if(hr>5&&hr<=6){
        bg="sunrise2.png";
    }
    if(hr>=6&&hr<=7){
        bg="sunrise3.png";
    }

 if(hr>=7&&hr<=9){
        bg="sunrise4.png";
    }
    if(hr>=9&&hr<=11){
        bg="sunrise5.png";
    }
    if(hr>=11&&hr<14){
        bg="sunrise6.png";
    }
    if(hr>=15&&hr<=16){
        bg="sunset7.png";
    }
    if(hr>=16&&hr<=17){
        bg="sunset8.png";
    }
    if(hr>=17&&hr<=19){
        bg="sunset10.png";
    }
    if(hr>=19&&hr<=20){
        bg="sunset11.png";
    }
    if(hr>=20&&hr<=23){
        bg="sunset11.png";
    }
    if(hr>=23&&hr<=3){
        bg="sunset12.png";
    }
    
  
  
  

    //load the image in backgroundImg variable here
    backgroundImg=loadImg(bg);

}
