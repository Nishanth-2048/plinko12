const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plinkos=[];
var particals;

var score =0;
var count = 0;
var gameState ="start";


function preload(){

}

function setup() {
	createCanvas(500, 400);
  
console.log(count);
  engine = Engine.create();
	world = engine.world;

	ground=new Ground(240,400,900,20);
	stand1=new Dvision(5,350,10,200);
	stand2=new Dvision(100,350,10,200);
	stand3=new Dvision(200,350,10,200);
	stand4=new Dvision(300,350,10,200);
	stand5=new Dvision(400,350,10,200);
	stand6=new Dvision(495,350,10,200);

	



	for (var i =35; i <=width; i=i+50) {
		plinkos.push(new Plinko(i,75,10));
	}
	  
	for (var i = 10; i <=width-10; i=i+50) {
		plinkos.push(new Plinko(i,110,10));
	}
	  
	for (var i = 35; i <=width; i=i+50) {
		plinkos.push(new Plinko(i,145,10));
	}
	  
	 for (var i = 10; i <=width-10; i=i+50) {
		plinkos.push(new Plinko(i,180,10));
	 }
  
}

function draw() {
  background("rgb(51,204,255)");  
  Engine.update(engine);

  
  if ( gameState =="start") {
	textSize(20);
	fill("black");  
	text("you have 15 chances to score more than 4000 ",40,250);
	text(" press 'space' to start ",40,300);
	if(keyCode === 32){
		gameState="drop";
	}
  }

  if ( gameState =="drop") {
	
	textSize(35)
	fill("black"); 
	text("Score : "+score,20,40);
	fill("black");
	textSize(35)
	text(" 200 ", 7, 300);
	text(" 200 ", 110, 300);
	text(" 500 ", 210, 300);
	text(" 100 ", 310, 300);
	text(" 100 ", 410, 300);

	
   
	ground.display();
	fill('#FF6F6F'); 
	stand1.display();
	fill('#FF6F6F');
	stand2.display();
	fill('#FF6F6F');
	stand3.display();
	fill('#FF6F6F');
	stand4.display();
	fill('#FF6F6F');
	stand5.display();
	fill('#FF6F6F');
	stand6.display();  

  


	for(var i=0;i<plinkos.length;i++){
	  plinkos[i].display();
	  }

	 if(particals!=null)
    {
		//for(var t=0;t<particals.length;t++){
			particals.display();

			//}
        
			if (particals.body.position.y>= 370)
			{
				
				if (particals.body.position.x >= 300 && particals.body.position.x <= 500) 
				{
					score=score+100;      
					particals=null;                       
					count=count+1;
					if ( count>= 15) gameState ="end";   
				}
	
				else if (particals.body.position.x >= 200 && particals.body.position.x <= 300 ) 
				{
					score = score + 500;
					particals=null;
					count=count+1;
					if ( count>= 15) gameState ="end";
				}
				
				else if (particals.body.position.x <= 195 && particals.body.position.x >= 0 )
				{
					score = score + 200;
					particals=null;
					count=count+1;
					if ( count>= 15)  gameState ="end";
				}          				
	        }
		}
	}

	//position


	if ( gameState =="end" && score < 4000) {
    
		textSize(30);
		text("GameOver ", 150, 250);
		text("press tab to start again", 150, 300);
		if(gameState==="end" && keyCode === 9){
			gameState="start";
			count=0;
			score=0;
		}
	} 
	if ( gameState =="end" && score > 4000) {
    
		textSize(30);
		text("You Won ", 150, 250);
		text("press tab to play again", 150, 300);
		if(gameState==="end" && keyCode === 9){
			gameState="start";
			count=0;
			score=0;
		}
	}
	
	


  drawSprites();
}

function keyPressed(){
	if(keyCode === 13 && gameState === "drop" ){
		particals = new Particals(mouseX, 10, 10, 10);	
	}
	}
//function mouseRealesed(){ key code for tab = 9
//key code for enter =13
//key code for shift =16
//}

	