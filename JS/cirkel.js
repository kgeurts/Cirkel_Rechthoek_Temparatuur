	function calculate()
	{
var pi = Math.PI;
var nummer1=document.getElementById("num1").value;

var antwoord=(pi)*parseFloat(nummer1)*parseFloat(nummer1);
var antwoord1=(2)*(pi)*parseFloat(nummer1);
var antwoord=(Math.round(antwoord *10) / 10);
var antwoord1=(Math.round(antwoord1 *10) / 10);

if(!isNaN(antwoord))
{
	document.getElementById("uitkomst").innerHTML="De oppervlakte: " + antwoord + " m²";
}
else{
	window.alert("Je input is incorrect!");
}

if(!isNaN(antwoord1))
{
	document.getElementById("uitkomst1").innerHTML="De omtrek: " + antwoord1 + " m";
}

}