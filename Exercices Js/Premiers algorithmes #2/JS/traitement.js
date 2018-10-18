function btnCalculer_onclick()
{ 
 	var MoyKmMois,TotKm;
 	MoyKmMois = parseFloat(document.getElementById("txtMoyKm").value);

    TotKm = MoyKmMois*60;

    console.log("Le nombre de kg est de "+TotKm);


}