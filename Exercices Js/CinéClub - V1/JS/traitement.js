function btnCalculer_onclick()
{ 
 	var PrixBase,Age,Rabais,Total;


   PrixBase  = parseFloat(document.getElementById("txtBasePrix").value);
    Age = parseFloat(document.getElementById("txtAge").value);


    if(Age<=16)
    { if(  document.getElementById("radMidi").checked == true)
        Rabais=0.4;
    else
    {
        Rabais=0.6;
    }
    }
     else if(Age>16 ){ if( document.getElementById("radMidi").checked == true)
    {
      Rabais=0.7;
    }
    else{
         Rabais=1;
    }
    }



    Total= PrixBase*Rabais;

    console.log("Le total es de "+ Total.toFixed(2)+"$" );


}