var canvas;
var grid;
var s =140;
var p = false;
var score1 = 0;
var score2 = 0;
var done =1;
var time=1;
var stop1;
var rani;
var ranj;
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
			grid[i][j] = new ai(i*s,j*s,s); 
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
			grid[i][j] = new ai(i*s,j*s,s); 
		}
	}
	win=0;
	win2=0;
	done =1;
	count=0;	
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
				var k=grid[i][j].check();	
				if(k!=15 && count!=9)
				stop1=setInterval(automatic(),1000);
				function automatic()
				{	
					rani=floor(random(0,3));
					ranj=floor(random(0,3));
					/*console.log(grid[i][j].sum);
					if(grid[i][j].sum==10)
					{
						rani=2;
						ranj=0;
					}
					else*/
					{
					while(grid[rani][ranj].d || grid[rani][ranj].e)
					{
						rani=floor(random(0,3));
						ranj=floor(random(0,3));
					}
				}
					grid[rani][ranj].dio();
					//grid[i][j].check();
					clearInterval(stop1);
				}
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

