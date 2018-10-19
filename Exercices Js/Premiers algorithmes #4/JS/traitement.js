function btnCalculer_onclick()
{ 
 	var Destination,Distance,Consommation,PrixLitre,Cout;

    Destination =document.getElementById("txtDestination").value;
    Distance = parseFloat(document.getElementById("txtDistance").value);
    Consommation = parseFloat(document.getElementById("txtConsommation").value);
    PrixLitre = parseFloat(document.getElementById("txtPrixLitre").value);

    Cout= Distance*(Consommation/100)*PrixLitre;

    console.log("Le nombre de kg est de "+ Cout.toFixed(2)+"$"+"pour aller à "+ Destination );


}