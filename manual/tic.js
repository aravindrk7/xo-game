var canvas;
var grid;
var s =140;
var p = false;
var score1 = 0;
var score2 = 0;
var done =1;
function setup()
{
	canvas = createCanvas(421,421);
	var x = (windowWidth - 421) / 2;
	var y = (windowHeight - 421) / 2;
	canvas.position(x,y);
	grid = arr();
	//grid =new block(40,40,40);
	for(var i = 0;i < 3;i++)
	{
		for(var j = 0;j < 3;j++)
		{
			grid[i][j] = new block(i*s,j*s,s); 
		}
	}
	var button=createButton("NEW GAME");
	button.position(0,550);
	button.mousePressed(newgame);
	counter1 = select('#counter1');
	counter2 = select('#counter2');
}
function newgame()
{
	for(var i = 0;i < 3;i++)
	{
		for(var j = 0;j < 3;j++)
		{
			grid[i][j] = new block(i*s,j*s,s); 
		}
	}
	win=0;
	win2=0;
	done =1;
}
function draw()
{
	background(0);
	//grid.show();
	counter1.html(score1);
	counter2.html(score2);
	for(var i = 0;i < 3;i++)
	{
		for(var j = 0;j < 3;j++)
		{
			grid[i][j].show(); 
		}
	}
	if(win && done)
	{
		score1++;
		done=0;
	}
	if(win2 && done)
	{
		score2++;
		done=0;
	}
}

function mousePressed()
{
	
if(!win && !win2)
{	
	for(var i = 0;i < 3;i++)
	{
		for(var j = 0;j < 3;j++)
		{
			if(grid[i][j].inside(mouseX,mouseY))
			{	
				if(!grid[i][j].d && !grid[i][j].e)
				{
				grid[i][j].dix();
				}
				grid[i][j].check();

			}
		}
	}

}
}
function arr()
{
	var array = new Array(3);
	for(var i = 0;i < array.length;i++)
	{
		array[i] = new Array(3);
	}
	return array;
}

