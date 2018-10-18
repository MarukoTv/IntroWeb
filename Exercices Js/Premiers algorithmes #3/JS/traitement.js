function btnCalculer_onclick()
{ 
 	var ArgentCan,TauxChangeEuro,Euro;
 	ArgentCan = parseFloat(document.getElementById("txtArgent").value);
    TauxChangeEuro = parseFloat(document.getElementById("txtEuro").value);
    Euro = ArgentCan*TauxChangeEuro;

    console.log("Le nombre de kg est de "+Euro);


}