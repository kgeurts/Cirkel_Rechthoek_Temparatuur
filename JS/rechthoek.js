	function calculate()
	{
var field1=document.getElementById("num1").value;
var field2=document.getElementById("num2").value;

var result=parseFloat(field1)*parseFloat(field2);
var result1=(2)*parseFloat(field1)+(2)*parseFloat(field2);
var result2=(parseFloat(field1)*parseFloat(field1))+(parseFloat(field2)*parseFloat(field2));
var result2=(Math.sqrt(result2));
var result2=(Math.round(result2 *10) / 10);


if(!isNaN(result))
{
	document.getElementById("answer").innerHTML="De oppervlakte: " + result + " m²";
}
else{
	window.alert("Je input is incorrect!");
}

if(!isNaN(result1))
{
	document.getElementById("answer1").innerHTML="De omtrek: " + result1 + " m";
}
if(!isNaN(result2))
{
	document.getElementById("answer3").innerHTML="De diagonaal:" + result2 + " m";
}

}