var bg,waitimg,play,about,home,restartimg,playerimg,treeImg,playerLeft,axeImg,zombie,heartImg,winImg

var gameState="wait"
var logo
var wood,tree,axe
var health=10;
var woodscore=0
var fire,fireimg,fireimg2
var hut,hutimg,hutimg2
var hutBuilt="FALSE"
var treeGroup
var timg1,timg2,timg3,timg4,timg5,timg6
var rand
var axeGroup
var fonts
var gamemusic


//load images here
function preload(){
waitimg=loadImage("bg1.jpg")
gamemusic=loadSound("SofterSound.mp3")
playimg=loadImage("bg1.png")
aboutimg=loadImage("bga.jpg")
aboutpopimg=loadImage("popupzombie.png")
//endbg=loadImage("zombiewin.gif")
restartimg=loadImage("restart.png")
playerimg=loadAnimation("R1.png","R2.png","R3.png","R4.png","R5.png","R6.png","R7.png")
playerwinimg=loadAnimation("endplayer.png","endplayer.png","endplayer.png","endplayer.png")
playerLeft=loadAnimation("R1left.png","R2left.png","R3left.png","R4left.png","R5left.png","R6left.png","R7left.png")
treeImg=loadImage("tree1.gif");
axeSwing=loadImage("axe.gif");
zombieImg=loadAnimation("w1.png","w2.png","w3.png","w4.png","w5.png","w6.png");
woodimg=loadImage("woodlog.png")
hutimg2=loadAnimation("hut/h4.png","hut/h4.png","hut/h4.png")
fireimg2=loadImage("fire/f1.png")
boximg=loadImage("scorezombie.png")
box2img=loadImage("scorezombie.png")
timg1=loadImage("t1.png")
timg2=loadImage("t2.png")
timg3=loadImage("t3.png")
timg4=loadImage("t4.png")
timg5=loadImage("t5.png")
timg6=loadImage("t6.png")
zombietouch=loadSound("hit.mp3")
winImg=loadImage("survived.png")

lostimg=loadImage("lost.png")
lost1img=loadImage("lost1.png")


fireimg=loadAnimation("fire/f1.png","fire/f2.png","fire/f3.png","fire/f4.png")
hutimg=loadAnimation("hut/h1.png","hut/h1.png","hut/h1.png","hut/h1.png","hut/h1.png","hut/h1.png","hut/h2.png","hut/h2.png","hut/h2.png","hut/h2.png","hut/h2.png","hut/h2.png","hut/h2.png","hut/h2.png","hut/h2.png","hut/h2.png","hut/h3.png","hut/h3.png","hut/h3.png","hut/h3.png","hut/h3.png","hut/h3.png","hut/h3.png","hut/h3.png","hut/h3.png","hut/h3.png","hut/h3.png","hut/h3.png","hut/h3.png","hut/h3.png","hut/h3.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png","hut/h4.png",)
heartImg=loadImage("heart_1.png")

fonts=loadFont("chiller.ttf")
//playerimg=loadImage("zombie.png")

}

function setup(){
    createCanvas(displayWidth,displayHeight)
    textFont(fonts)
 
    lost=createSprite(windowWidth/2,windowHeight/4)   
lost1=createSprite(width/2,height/2)    

lost.addImage(lostimg)
lost.scale=2
lost1.addImage(lost1img)
//lost.scale=0.5
lost.visible=false
lost1.visible=false



/*wood= createSprite(windowWidth/4,100)
wood.addImage(woodimg)
wood.scale=0.5
wood.visible=false;*/

player=createSprite(windowWidth/2,windowHeight/2)
player.addAnimation("walk",playerimg)
player.addAnimation("left",playerLeft)
player.addAnimation("win",playerwinimg)
player.scale=2.1
player.visible=false


hut =createSprite(player.x,player.y);
hut.visible=false;
hut.addAnimation("build",hutimg)
hut.addAnimation("end",hutimg2)


logo=createImg("logo.png")
logo.position(windowWidth/2-250,windowHeight/4)
logo.size(500,500)
logo.hide()

play=createImg("play.png")
play.position(50,20)
play.size(100,100)



about=createImg("about2.png")
about.position(50,120)
about.size(100,100)


home=createImg("back.png")
home.position(50,windowHeight-100)
home.size(100,100)
home.hide()

popup1=createSprite(windowWidth/2,windowHeight/2)
popup1.addImage(aboutpopimg)
popup1.visible=false
popup1.scale=1.75




zombie=createSprite(200,200,50,50);
zombie.addAnimation("walk",zombieImg)
zombie.visible=false;


box=createSprite(windowWidth-(windowWidth/6),100)
box.addImage(boximg)
heart=createSprite(box.x-(box.width/4),box.y);
box.width=(heart.width)+100
box.height=(heart.height)+100
//box.shapeColor="green"
heart.addImage(heartImg);
heart.scale=0.45;
heart.visible=false
box.visible=false

box2=createSprite(windowWidth/6,100)
box2.addImage(box2img)
wood=createSprite(box2.x-(box2.width/4),box2.y);
wood.scale=0.35
wood.visible=false
box2.visible=false

box2.width=(wood.width)+100
box2.height=(wood.height)+100
//box.shapeColor="green"
wood.addImage(woodimg);
/*heart.scale=0.45;
heart.visible=false
box2.visible=false*/


fire=createSprite(windowWidth/4,windowHeight/2-windowHeight/4)
fire.addImage(fireimg2);
fire.scale=0.3
fire.visible=false


win=createSprite(windowWidth/2,windowHeight/2+50)
win.addImage(winImg)
win.scale=0.2;
win.visible=false

treeGroup= new Group()
axeGroup= new Group()



}



function draw(){

    if (gameState==="wait"){
    background(waitimg)
   // player.visible=false
   popup1.visible=false
   player.visible=false
logo.show()
wood.visible=false;
heart.visible=false
box.visible=false
box2.visible=false
}

if(play.mousePressed(()=>{
gameState="play"
//player.visible=true
home.show()



}))




if(home.mousePressed(()=>{
    gameState="wait"
    }))

if(about.mousePressed(()=>{
    gameState="about"
    //popup1.visible=true
    wood.visible=false;
    heart.visible=false
box.visible=false
box2.visible=false
player.visible=false
zombie.visible=false
zombie.velocityX=
axe.visible=false
zombie.velocityY=0
tree.visible=false

    }))

if(gameState==="play"){
    player.velocityX=0
background(playimg)
//image(playimg,0,0,4*windowWidth,2*windowHeight)

gamemusic.play()
logo.hide()
popup1.visible=false
player.visible=true
wood.visible=true;
box2.visible=true


heart.visible=true
box.visible=true

//zombie.debug=true
//player.debug=true

zombie.setCollider("circle",0,0,(zombie.width/3))
player.setCollider("circle",0,0,(player.width/4))
spawntrees()

if(keyDown("space")){
  
  for(i=0;i<=(treeGroup.length)-1;i++){
//for(a=0;a<=(axeGroup.length)-1;a++){
   if (player.isTouching(treeGroup.get(i))){
  axe.visible=true;
    if(frameCount%2===0){
      woodscore=woodscore+2; } 
      
    } axeGroup.destroyEach()
    treeGroup.get(i).remove()
 //   }
    
   }
 }
   
 
if(keyDown("DOWN_ARROW")){
  player.y +=115
 
}if(keyDown("UP_ARROW")){
  player.y -=115
 
}if(keyDown("LEFT_ARROW")){
  player.x -=115
  player.changeAnimation("left",playerLeft);
  
}if(keyDown("RIGHT_ARROW")){
  player.x +=115
  player.changeAnimation("walk",playerimg);
  
}
if(player.x>windowWidth){
  player.x=10
}
if(player.x<0){
  player.x=windowWidth-20
}
if(player.y<0){
  player.y=windowHeight-20 }
  if(player.y>windowHeight){
    player.y=10 }


       

    if(woodscore>=5 && hutBuilt==="FALSE"){
      background(playimg)
      hut.x=player.x+100
      hut.y=player.y+100
      hut.visible=true;
      hut.addAnimation("build",hutimg)
           hutBuilt="TRUE";
      woodscore=woodscore-5
      
win.visible=true
player.velocityX=0
player.velocityY=0
zombie.velocityX=0
zombie.velocityY=0
home.hide()
play.hide()
about.hide()
treeGroup.destroyEach()
axeGroup.destroyEach()
zombie.destroy()
player.changeAnimation("win",playerwinimg)
player.scale=0.5
gameState="over"
      
    }

    if(zombie.isTouching(player)){
      health=health-0.2;
      zombietouch.play()
    }

    if(health<0){
     background(playimg)
      lost.visible=true
      lost1.visible=true
gameState="end"
background(playimg)
player.destroy();
        zombie.destroy();
        treeGroup.destroyEach()
        axeGroup.destroyEach()
        home.hide()
        play.hide()
about.hide()
    
    }
 

}

//camera.x=player.x;
//camera.y=player.y





//camera.position.x=player.position.x



if(gameState==="about"){
   // background(aboutimg)}

   popup1.visible=true
   logo.hide()

    }
    

   

 /*   if(keyDown("space")&&player.isTouching(tree)){
      axe.visible=true;
        if(frameCount % 5===0){
          woodscore=woodscore+1;  
        }*/
        
  

    //if(keyWentUp("space")){
      //axe.visible=false;
    //}

 

   /* if(hutBuilt==="TRUE"){
      hut.changeAnimation("end",hutimg2)
      gameState="win";
    }*/

    drawSprites()

    if(gameState==="about"){
      textSize(35)
      stroke(5)
      strokeWeight(10)
      fill("red")
      text("You got stuck in the land of ZOMBIES.",popup1.x-(popup1.width/2.25),popup1.y-(popup1.height/2))
      textSize(30)
      strokeWeight(5)
      text("You were lucky to survive so far! But nomore now....\n          A zombie has spotted you.",popup1.x-(popup1.width/2),popup1.y-(popup1.height/2)+50)
      text("\nYou need to save yourself by lighting a fire and then build a house.\nYou need to cut the trees to collect the woods for fire and hut.\nOnce your house is buit you are safe.\nBe mindful with your AXE!!\nNot every blow will get you wood .\n It's unnecessary usuage makes trees disappear.\nUse ARROW KEYS to move in different directions.\nUse SPACE BAR to enable AXE...SAVE YOURSELF...",popup1.x-(popup1.width/1.5),popup1.y-(popup1.height/2)+80)
      textSize(50)
      stroke(5)
      strokeWeight(10)
      text("...SAVE YOURSELF...",popup1.x-(popup1.width/2.25),popup1.y-(popup1.height/2)+450)
 
 
 
    }
    
/*if (gameState==="win"){
background(playimg)
win.visible=true
player.velocityX=0
player.velocityY=0
zombie.velocityX=0
zombie.velocityY=0
home.hide()
play.hide()
about.hide()
treeGroup.destroyEach()
axeGroup.destroyEach()

}*/
if (gameState==="end"){
  player.destroy();
        zombie.destroy();
        treeGroup.destroyEach()
        axeGroup.destroyEach()
        home.hide()
        play.hide()
about.hide()
}
    if(gameState==="play"||gameState==="over"|| gameState==="end"){
        textSize(50);
        stroke("black")
        strokeWeight(4)
    fill("red");
    
    text(" :"+woodscore,wood.x+50, wood.y+10)
      textSize(38);
        stroke("black")
        strokeWeight(4)

        fill("black")
        stroke("red")
    text(" :"+Math.round(health),heart.x+35,heart.y+5);
   
    zombie.visible=true;

      wood.visible=true;



    
     zombie.bounceOff(player);
    zombie.velocityX = -2;
    if(woodscore===2 && !fire.visible){
fire.visible=true     
      woodscore -= 2
    }



    zombie.pointTo(player.x,player.y)
    zombie.rotateToDirection= true;
    zombie.VelocityX=-3;

   



    }


  }

function spawntrees(){

if(frameCount%200 ===0){

  tree=createSprite(windowWidth/2,200)
    tree.scale=1;
    tree.x=Math.round(random(100,windowWidth-100))
    tree.y=Math.round(random(200,windowHeight-100))
    axe=createSprite(1100,300);
axe.addImage(axeSwing);
//axe.visible=false;
axe.scale=0.6;
axe.x=tree.x
axe.y=tree.y+20
//tree.debug=true
  rand= Math.round(random(1,6))
  switch(rand){
 
    case 1: tree.addImage(timg1);
    break;
    
    case 2: tree.addImage(timg2);
    break;
    
    case 3: tree.addImage(timg3);
    break;
 
    case 4: tree.addImage(timg4);
    break;
 
    case 5: tree.addImage(timg5);
    break;
 
    case 6: tree.addImage(timg6);
    break
 
    default:
      break;
  }
  treeGroup.add(tree)
  axeGroup.add(axe)
 
      
 }



  
}