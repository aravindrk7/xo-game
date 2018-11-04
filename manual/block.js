var count =0;
var win=0;
var win2=0;
function block(x,y,size)
{

this.x = x;
this.y = y;
this.s = s;
this.d = false;
this.e =false;
this.value=0;
this.sum=0;
this.sum1=0;
this.sum2=0;
this.sum3=0;
this.sum4=0;
this.sum5=0;
this.sum6=0;
this.sum7=0;

}
block.prototype.show =function()
{
	fill(255);
	rect(this.x,this.y,this.s,this.s,20);
	if(this.d)
	{
		fill('#ff0000');
		textSize(80);
		text("X",this.x +44,this.y +100);
	}
	if(this.e)
	{
		fill('#0000ff');
		textSize(80);
		text("O",this.x +44,this.y +100);
	}
	if(this.sum == 15 )
	{	
		win = 1;			
	}
	else if(this.sum == 21)
	{
		win2= 1;
	}
	if(this.sum1 == 15)
	{
		win = 1;
	}
	else if(this.sum1 == 21)
	{
		win2= 1;
	}
	if(this.sum2 == 15)
	{	
		win = 1;
	}
	else if(this.sum2 == 21)
	{
		win2= 1;
	}
	if(this.sum3 == 15)
	{
		win = 1;
	}
	else if(this.sum3 == 21)
	{
		win2= 1;
	}
	if(this.sum4 == 15)
	{	
		win = 1;
	}
	else if(this.sum4 == 21)
	{
		win2= 1;
	}
	if(this.sum5 == 15)
	{	
		win = 1;
	}
	else if(this.sum5 == 21)
	{
		win2= 1;
	}
	if(this.sum6 == 15)
	{			
		win = 1;	
	}
	else if(this.sum6 == 21)
	{
		win2= 1;
	}
	if(this.sum7 == 15)
	{	
		win = 1;
	}
	else if(this.sum7 == 21)
	{
		win2= 1;
	}
}

block.prototype.inside =function(x,y)
{
	return ((x >this.x && x<this.x + this.s) && (y >this.y && y<this.y + this.s));
}
block.prototype.dix =function()
{	if(count == 0)
	{
	this.d = true;
	count=1;
	}	
	else
	{
		this.e = true;
		count =0;
	}
	if(this.d)
		{
			this.value=5;
		}
		if(this.e)
		{
			this.value=7;
		}


}


block.prototype.check =function()
{
	this.sum=0;
	this.sum1=0;
	this.sum2=0;
	this.sum3=0;
	this.sum4=0;
	this.sum5=0;
	this.sum6=0;
	this.sum7=0;


	for(var i = 0;i < 3;i++)
	{	
		j=0;
		this.sum=this.sum+grid[i][j].value;
	}
	
 	for(var i = 0;i < 3;i++)
	{	
		j=1;
		this.sum1=this.sum1+grid[i][j].value;
	}

	for(var i = 0;i < 3;i++)
	{	
		j=2;
		this.sum2=this.sum2+grid[i][j].value;
	}

	for(var j = 0;j < 3;j++)
	{	
		i=0;
		this.sum3=this.sum3+grid[i][j].value;
	}

	for(var j = 0;j < 3;j++)
	{	
		i=1;
		this.sum4=this.sum4+grid[i][j].value;
	}

	for(var j = 0;j < 3;j++)
	{	
		i=2;
		this.sum5=this.sum5+grid[i][j].value;
	}

	for(var j = 0,i=0;j < 3;j++,i++)
	{	
		this.sum6=this.sum6+grid[i][j].value;
	}

	for(var j = 2,i=0;i < 3;j--,i++)
	{	
		this.sum7=this.sum7+grid[i][j].value;
	}

}