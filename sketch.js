//Create variables here
var Dog,happyDog,database,foodS,foodStock;
var database;

function preload()
{
	dog = loadImage("images/dogImg.png");
  
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP-ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
  }
  drawSprites();
  textSize('50')

}




function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

