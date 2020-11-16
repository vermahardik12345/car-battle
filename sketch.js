var car,car2,car3,car4,car5,car6;
var target,target2,target3,target4,target5,target6;
var wall,wall2,wall3,wall4;

function setup(){
    createCanvas(600,600);
    car=createSprite(50,550,20,20);
    car.shapeColor="blue";

    target=createSprite(50,50,20,20);
    target.shapeColor="red";

    wall=createSprite(100,300,10,600);
    wall.shapeColor="green";

    car2=createSprite(150,550,20,20);
    car2.shapeColor="blue";

    target2=createSprite(150,50,20,20);
    target2.shapeColor="red";

    wall2=createSprite(200,300,10,600);
    wall2.shapeColor="green";

    car3=createSprite(250,550,20,20);
    car3.shapeColor="blue";

    target3=createSprite(250,50,20,20);
    target3.shapeColor="red";

    wall3=createSprite(300,300,10,600);
    wall3.shapeColor="green";

    car4=createSprite(350,550,20,20);
    car4.shapeColor="blue";

    target4=createSprite(350,50,20,20);
    target4.shapeColor="red";

    wall4=createSprite(400,300,10,600);
    wall4.shapeColor="green";

    car5=createSprite(450,550,20,20);
    car5.shapeColor="blue";

    target5=createSprite(450,50,20,20);
    target5.shapeColor="red";

    wall5=createSprite(500,300,10,600);
    wall5.shapeColor="green";

    car6=createSprite(550,550,20,20);
    car6.shapeColor="blue";

    target6=createSprite(550,50,20,20);
    target6.shapeColor="red";


}
function draw(){
    background("black");

    car.velocityY=-3;
    car2.velocityY=-3;
    car3.velocityY=-3;
    car4.velocityY=-3;
    car5.velocityY=-3;
    car6.velocityY=-3;

if(car.y-target.y<target.height/2+car.height/2&&car2.y-target2.y<target2.height/2+car2.height/2){
    car.velocityY=0;
    car2.velocityY=0;
    car.shapeColor="yellow";
    target.shapeColor="orange";
    car2.shapeColor="yellow";
    target2.shapeColor="orange";
    textSize(20);
    fill("cyan");
    text("CARS CRASHED",300,300);

}else{
    car.velocityY=-3;
    car2.velocityY=-3;
}
if(car3.y-target3.y<target3.height/2+car3.height/2&&car4.y-target4.y<target4.height/2+car4.height/2){
    car3.velocityY=0;
    car4.velocityY=0;
    car3.shapeColor="yellow";
    target3.shapeColor="orange";
    car4.shapeColor="yellow";
    target4.shapeColor="orange";

}else{
    car3.velocityY=-3;
    car4.velocityY=-3;
}
if(car5.y-target5.y<target5.height/2+car5.height/2&&car6.y-target6.y<target6.height/2+car6.height/2){
    car5.velocityY=0;
    car6.velocityY=0;
    car5.shapeColor="yellow";
    target5.shapeColor="orange";
    car6.shapeColor="yellow";
    target6.shapeColor="orange";

}else{
    car5.velocityY=-3;
    car6.velocityY=-3;
}


    drawSprites();
}
