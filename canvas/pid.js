
function pint(){

	var can = document.getElementById("canss");
	var cxt;
	
	cxt	= can.getContext("2d");
	
	cxt.lineWidth = 1;
	cxt.strokeStyle = "#AA394C";
	cxt.beginPath();
	var value = 0;
	for(var i=0;i<300;i++)
	{
		
		cxt.moveTo(i,value);
		value = PID(value,600);
		value = 300;
		cxt.lineTo(i+1,value);
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
