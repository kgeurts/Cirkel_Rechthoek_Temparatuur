function calculate()
	{
var nummer1=document.getElementById("num1").value;
var fahrenheit=((9)*parseFloat(nummer1)/(5))+(32);
var Kelvin = (parseFloat(nummer1)+(273))

if(!isNaN(fahrenheit))
{
	document.getElementById("fahrenheit").innerHTML="Graden fahrenheit: " + fahrenheit + " ℉";
}
if(!isNaN(Kelvin))
{
	document.getElementById("Kelvin").innerHTML="Graden Kelvin: " + Kelvin + " K";
}
else{
	window.alert("Je input is incorrect!");
}
}

function calculate2(){
var nummer2=document.getElementById("num2").value;

var celsius=parseFloat(nummer2)-(273);



if(!isNaN(celsius))
{
	document.getElementById("celsius").innerHTML="Graden celsius: " + celsius + " °C";
}
else{
	window.alert("Je input is incorrect!");
}

}