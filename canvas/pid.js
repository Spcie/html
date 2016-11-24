
var AxislengthX = 450;
var AxislengthY = 350;
var OriginX = 40; 
var OriginY = 500;
	
function DrawChart(){
	var can = document.getElementById("canss");
	var cxt = can.getContext("2d");
	
	var AxislengthX = window.AxislengthX;
	var AxislengthY = window.AxislengthY;
	var OriginX = window.OriginX; 
	var OriginY = window.OriginY;
	
	cxt.lineWidth = 2;
	cxt.strokeStyle = "#000000";
	cxt.beginPath();
	//Y Axis
	cxt.moveTo(OriginX,OriginY);
	cxt.lineTo(OriginX,OriginY-AxislengthY);
	cxt.lineTo(OriginX-9,OriginY-AxislengthY+12);
	cxt.moveTo(OriginX,OriginY-AxislengthY);
	cxt.lineTo(OriginX+9,OriginY-AxislengthY+12);
	//X Axis
	cxt.moveTo(OriginX,OriginY);
	cxt.lineTo(OriginX+AxislengthX,OriginY);
	cxt.lineTo(OriginX+AxislengthX-12,OriginY+9);
	cxt.moveTo(OriginX+AxislengthX,OriginY);
	cxt.lineTo(OriginX+AxislengthX-12,OriginY-9);
	//Scale Y
	cxt.moveTo(OriginX,OriginY-100);
	cxt.lineTo(OriginX+8,OriginY-100);
	cxt.moveTo(OriginX,OriginY-200);
	cxt.lineTo(OriginX+8,OriginY-200);
	cxt.moveTo(OriginX,OriginY-300);
	cxt.lineTo(OriginX+8,OriginY-300);
	//cxt.moveTo(OriginX,OriginY-400);
	//cxt.lineTo(OriginX+8,OriginY-400);
	
	//Scale X
	cxt.moveTo(OriginX+100,OriginY);
	cxt.lineTo(OriginX+100,OriginY-8);
	cxt.moveTo(OriginX+200,OriginY);
	cxt.lineTo(OriginX+200,OriginY-8);
	cxt.moveTo(OriginX+300,OriginY);
	cxt.lineTo(OriginX+300,OriginY-8);
	cxt.moveTo(OriginX+400,OriginY);
	cxt.lineTo(OriginX+400,OriginY-8);
	
	cxt.stroke();
	cxt.closePath();
	
	pint();
	
}
function Transform(Rx,Ry){
	var x,y;
	
	x = window.OriginX + Rx;
	y = window.OriginY - Ry;
	
	
	return {"x":x,"y":y};
}
function pint(){

	var can = document.getElementById("canss");
	var cxt;
	
	cxt	= can.getContext("2d");
	
	cxt.lineWidth = 1;
	cxt.strokeStyle = "#AA394C";
	cxt.beginPath();
	var a;
	a = Transform(0,0);
	cxt.moveTo(a.x,a.y);
	a = Transform(300,400);
	cxt.lineTo(a.x,a.y);
	var value = 0;
	for(var i=0;i<600;i++)
	{
		
		cxt.moveTo(i,value);
		value = PID(value,600);
		value = 300;
		cxt.lineTo(i,value);
		cxt.stroke();
		//ctx.closePath();
	}
	
}

var integral=0;
var preerr=0;

function PID(vi,vt)
{
	var kp = 3.0;
	var ki = 0.0001;
	var kd = 80.0;
	
	var error;
	integral += error;
	var derivative = error - preerr;
	preerr = error;
	
	return (kp*error + ki*integral + kd*derivative);
	
}
