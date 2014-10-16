function setup()
 {
  createCanvas(800, 600);
  background(0);
}

  function draw()
{
  background(0);
  fill(255);
   ellipse(mouseX, mouseY, 100, 100);

   drawDonut1(168, 239, 76, 100, 100);
   drawDonut1(250, 110, 8, 300, 100);
   drawDonut1(254, 243, 65, 400, 200);
   drawDonut1(34, 247, 129, 500, 300);
}


function drawDonut1(R, G, B, X, Y)
{
  //doughnut #1
   fill(R, G, B);
   ellipse(X, Y, 200, 200);
   fill(0);
   ellipse(X, Y, 120, 120);
}




