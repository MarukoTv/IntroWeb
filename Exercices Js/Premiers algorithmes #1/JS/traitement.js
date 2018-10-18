function btnCalculer_onclick()
{ 
 	var PoidsLivre,kg;
 	PoidsLivre = parseFloat(document.getElementById("txtLivre").value);

    kg = PoidsLivre/2.2;

    console.log("Le nombre de kg est de "+kg);


}