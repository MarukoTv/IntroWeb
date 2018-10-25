function btnCalculer_onclick()
{ 
 	var BilletTotal,Etudiant,Adulte,Vieux,Total;


    Etudiant  = parseFloat(document.getElementById("txtEtudiant").value);
    Adulte = parseFloat(document.getElementById("txtAdulte").value);
    Vieux = parseFloat(document.getElementById("txtVieux").value);
    BilletTotal =  parseFloat(document.getElementById("txtTotal").value);

    Total=(Adulte*20)+(Vieux*15)+(Etudiant*12);

   if(BilletTotal >= 5)
   {
       Total=Total*0.90;

   }




    console.log("Le total es de "+ Total.toFixed(2)+"$" );


}