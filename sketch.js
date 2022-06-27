var box, mountains, ball, ballImg, basket, basketImg;
var resetImg, ground, thumb
var Play=1
var End=0
var gameState=Play
var score=0
var reset


function preload(){
mountains=loadImage("snowy_mountain.jpg")
ballImg=loadImage("ball.png")
basketImg=loadImage("basket.png")
resetImg=loadImage("reset.png")
thumbImg=loadImage("thumbs.png")
}


function setup() {
createCanvas(1400,700);
box=createSprite(1000, 700,1400,700)
box.addImage(mountains)
box.scale=4

ball=createSprite(100,650,50,50)
ball.addImage(ballImg)
ball.scale=.05
ball.setCollider("rectangle",0,0, 200, 200)
ball.debug=true


basket=createSprite(700,600,50,50)
basket.addImage(basketImg)
basket.scale=.4

reset=createSprite(100,100,50,50)
reset.addImage(resetImg)
reset.scale=.05

ground=createSprite(700,720,1400,100)

thumb=createSprite(700,350,50,50)
thumb.addImage(thumbImg)
thumb.scale=.2



}

function draw() {
  

  if(gameState===Play){
    
    ground.visible=false

    reset.visible=false

    thumb.visible=false

    

  
  
   if(keyDown("UP_ARROW")){
        ball.velocityY=-12
      }

      ball.velocityY=ball.velocityY+ 0.8
  
      if(keyDown("Right_Arrow")){
        ball.velocityX=5
      }

      if(ball.isTouching(basket)){
        gameState=End
        }
    }
  
    if(gameState===End){

      reset.visible=false

      ball.velocityX=0
      ball.velocityY=0

      thumb.visible=true


    
  
    


}

    
 ball.collide(ground)

    drawSprites()
    text("Score="+score, 1200, 100)
  }