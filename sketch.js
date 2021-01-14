var car1,car2

function setup() {
  createCanvas(1200,800);
  car1=createSprite(650, 500, 40, 50);
  car1.shapeColor="green"
  car2=createSprite(740, 500, 90, 50);
  car2.shapeColor="orange"
}

function draw() {
  background("black");  
  car1.x=World.mouseX;
  car1.y=World.mouseY;

if(car1.x-car2.x < car1.width/2+car2.width/2 && car2.x-car1.x<car1.width/2+car2.width/2&&car1.y-car2.y<car1.width/2+car2.width/2&&car2.y-car1.y<car1.width/2+car2.width/2){
car1.shapeColor="blue"
car2.shapeColor="white"
}
else{
car1.shapeColor="green"
car2.shapeColor="orange"

}




  drawSprites();
}