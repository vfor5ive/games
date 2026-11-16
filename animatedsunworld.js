//custom variable for x coordinate of cloud
//custom variable for shooting stars
let lineXone = 0;
let lineYone = 0;
let cloudOneX = 50;

function setup() {
  //creates a canvas 600 pixels wide
  //and 400 pixels high
    


  createCanvas(400, 400);
}
function draw() {
  //sky blue background
  background(135, 206, 235);
  //sunbody
  fill("yellow");
  stroke("blue");
  strokeWeight(2);
  rect(1, 230, 400, 300);
  
  fill("yellow")
   stroke("yellow")
  strokeWeight(20)
  circle(350, 30, 100);
  rect(233, 80, 300, 300);
stroke("blue");
  strokeWeight(20);
  rect(300, 10, 400, 10);

  fill("blue");
stroke("blue");
  strokeWeight(20);
  ellipse(400, 0, 260, 40, 400);
  
   

  //cloud
fill(255);
    stroke("yellow");
  strokeWeight(14);
ellipse(330, 43, 71, - frameCount % 40);



  //cloud
fill(255);
    stroke("yellow");
  strokeWeight(14);
ellipse(380, 43, 71, - frameCount % 40);


    textSize(95);
   text("🌞", mouseX, mouseY);
  text("🌞", - frameCount % 80, mouseY);
  textSize(55);
   text("🌞", 15, 50);
  text("🌞", 10, 100);
 text("🌞", 15, 150);
   text("🌞", 10, 200);
   text("🌞", 15, 250);
   textSize(25);
   text("🌞🌞🌞🌞🌞🌞🌞🌞🌞🌞", 3, 230);


    

}
