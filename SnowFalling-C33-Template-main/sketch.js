var snow, snowGroup, snowImg

function preload() {
  bgImg = loadImage("snow2.jpg")
  snowImg = loadImage("snow4.webp")
}

function setup() {
  createCanvas(1500,650);
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
snowGroup = new Group();
}

function draw() {
  background(255,255,255);  
  snowfall()
  drawSprites();
}

function snowfall(){
  if(frameCount%50===0){

    //giving random x and y positions for zombie to appear
    snow = createSprite(random(0,1500),0,40,40)
    snow.addImage(snowImg);
    snow.scale = 0.15
    snow.velocityY = +3
    snow.debug= true
    
   
    snow.lifetime = 400
   snowGroup.add(snow)
  }

}