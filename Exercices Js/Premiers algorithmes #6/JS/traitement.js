function btnCalculer_onclick()
{ 
 	var Un,Cinq,Dix,Vc,Total;

    Un =document.getElementById("txtUn").value;
    Cinq = parseFloat(document.getElementById("txtCinq").value);
    Dix = parseFloat(document.getElementById("txtDix").value);
    Vc = parseFloat(document.getElementById("txtVc").value);

    Total= (Un*1/100)+(Cinq*5/100)+(Dix*10/100)+(Vc*25/100);

    console.log("Le total es de "+ Total.toFixed(2)+"$" );


}