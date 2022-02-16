
var s1,s2,s3,s4;
var pic1;
var gameState=0;
var startButton,nextButton;
var q=1;
var op1,op2,op3,op4;
var score=0,life=2;
var questionShow=true;
var pic2;
var lifeImg;

function preload(){
  s1=loadSound("ButterRemix.mp3");
  s2=loadSound("DynamiteRemix.mp3");
  s3=loadSound("Idol.mp3");
  s4=loadSound("PTD.mp3");
  pic1=loadImage("btspic1.png")
  pic2=loadImage("rm.png");
lifeImg=loadImage("life.png")
}

function setup() 
{
  createCanvas(windowWidth,windowHeight);
  if(gameState==0){
  startButton=createButton("START QUIZ")
  startButton.position(width/2-400,450)
  startButton.class("customButton")

  songButton1=createButton("Butter ft Megan")
  songButton1.position(width/2+400,50)
  songButton1.class("songButton")

  songButton2=createButton("Dynamite(Tropical Remix)")
  songButton2.position(width/2+400,110)
  songButton2.class("songButton")

  songButton3=createButton("Idol")
  songButton3.position(width/2+400,170)
  songButton3.class("songButton")

  songButton4=createButton("Permission To Dance")
  songButton4.position(width/2+400,230)
  songButton4.class("songButton")
  }

  

 
  
}

function draw() 
{
  background("Purple");
   if(gameState==0){
  textSize(40)
  strokeWeight(4)
  fill("black")
  text("BTS QUIZ" ,windowWidth/2-100,50)
  textSize(30)
  text("Rules For The Quiz" , 50,150)
   fill("white")
  textSize(20)
  text("1. Every question will have 4 options, you will get 2 chances to select the correct answer." , 50,200)
  text("2. For every correct answer 50 points will be rewarded" , 50,250)
  text("3. For every question you will get 60 seconds(i.e 1 minute) to answer" , 50 ,300)
  text("4. Bonus questions will be given to earn extra chance" , 50 ,350)
  image(pic1,width/2+100,height/2)
  

songButton1.mouseClicked(()=>{
  s1.loop();
  s2.pause();
  s3.pause();
  s4.pause();
})

songButton2.mouseClicked(()=>{
  s2.loop();
  s1.pause();
  s3.pause();
  s4.pause();
})

songButton3.mouseClicked(()=>{
  s3.loop();
  s1.pause();
  s2.pause();
  s4.pause();
})

songButton4.mouseClicked(()=>{
  s4.loop();
  s1.pause();
  s2.pause();
  s3.pause();
})

} 

startButton.mouseClicked(()=>{
  gameState=1;
  q=1;
  
  songButton1.hide()
  songButton2.hide()
  songButton3.hide()
  songButton4.hide()
  startButton.hide()
})

  

  if(life>0){
if(gameState===1){
  fill("white")
  textSize(20)
  text("SCORE : "+score,width-150,50);
  textSize(20)
  text("LIFE : "+life,width-100,100);

  if(questionShow){
  if(q==1){
    question("1. In Which Year Did BTS Debut?")
   options(2012,2013,2014,2015)
  answer=2;
   questionShow=false

  }

  if(q==2){
    question("2. How many members are there in BTS?")
    options(5,6,7,8)
   answer=3;
    questionShow=false
  }
  if(q==3){
    question("3. Who is the leader of BTS?")
    options("Rm","Jin","Jk","Suga")
   answer=1;
    questionShow=false
  }

  if(q==4){
    question("4. Who are the visuals of BTS?")
    options("Jimin,Jk","Jin,V","Rm,Suga","Jhope,Suga")
   answer=2;
    questionShow=false
  }

  if(q==5){
    question("5. What is the full form of BTS?")
    options("Break The Silence","Behind The Scenes","Bangtan Sonyonden","Bangtan Sonyeondan")
   answer=4;
    questionShow=false
  }

  if(q==6){
    question("6. Guess the member in the picture?")
    options("Rm","Jk","Jin","Suga")
   answer=1;
   image(pic2,100,200)
   pic2.scale=0.5
    questionShow=false
  }


}


op1.mouseClicked(()=>{
  if(answer==1){
    ans=createElement('h2' , "You guessed the right answer")
    ans.position(width/2-500,height-150)
    score +=50;
  }
  else{
    ans=createElement('h2' , "Your answer is incorrect")
    ans.position(width/2-500,height-200)
    life -=1;
  }
})

op2.mouseClicked(()=>{
  if(answer==2){
    ans=createElement('h2' , "You guessed the right answer")
    ans.position(width/2-500,height-150)
    score +=50;
  }
  else{
    ans=createElement('h2' , "Your answer is incorrect")
    ans.position(width/2-500,height-200)
    life -=1;
  }
})

op3.mouseClicked(()=>{
  if(answer==3){
    ans=createElement('h2' , "You guessed the right answer")
    ans.position(width/2-500,height-150)
    score +=50;
  }
  else{
    ans=createElement('h2' , "Your answer is incorrect")
    ans.position(width/2-500,height-200)
    life -=1;
  }
})

op4.mouseClicked(()=>{
  if(answer==4){
    ans=createElement('h2' , "You guessed the right answer")
    ans.position(width/2-500,height-150)

    score +=50;
  }
  else{
    ans=createElement('h2' , "Your answer is incorrect")
    ans.position(width/2-500,height-200)
    life -=1;
  }
})


nextButton.mouseClicked(()=>{
  q +=1;
  questionShow=true
})  
}
  }

if(life<=0){
  gameState=2
}

if(gameState==2){
 gameOver();
}
}


function options(o1,o2,o3,o4){
      
   op1=createButton(o1);
op1.position(width/2-400,height-400);
op1.class("optionButton");

op2=createButton(o2);
op2.position(width/2+100,height-400);
op2.class("optionButton");

op3=createButton(o3);
op3.position(width/2-400,height-300);
op3.class("optionButton");

op4=createButton(o4);
op4.position(width/2+100,height-300);
op4.class("optionButton");

nextButton=createButton("NEXT");
nextButton.position(width/2+300,550);
nextButton.class("nextButton");


}

function question(qt){
 que=createElement('h2' , qt)
 que.position(width/2-250,100)

}

function gameOver() {
  swal({
    title: `Game Over`,
    text: "Oops you lost the quiz....!!!",
    imageUrl:
     "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    confirmButtonText: "Thanks For Playing"
  });
}


