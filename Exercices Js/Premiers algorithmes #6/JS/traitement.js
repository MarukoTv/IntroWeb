function btnCalculer_onclick()
{ 
 	var Revenus,Loyer,Nourriture,Deplacements,Reste;

    Revenus =document.getElementById("txtRevenus").value;
    Loyer = parseFloat(document.getElementById("txtLoyer").value);
    Nourriture = parseFloat(document.getElementById("txtNourriture").value);
    Deplacements = parseFloat(document.getElementById("txtDeplacements").value);

    Reste = (Revenus-Loyer-Nourriture-Deplacements)/4.33;

    console.log("Votre revenus mensuels est de "+ Reste.toFixed(2)+"$" );


}