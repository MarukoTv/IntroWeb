function btnCalculer_onclick()
{ 
 	var PrixBase,Age,ChoixFilm,Total,Rabais,Heure;

    ChoixFilm = document.getElementById("lstFilm").value;
   PrixBase  = parseFloat(document.getElementById("txtBasePrix").value);
    Age = parseFloat(document.getElementById("txtAge").value);


    if(Age<=16 &&  document.getElementById("chkSession").checked == true )
    {
    if(  document.getElementById("radMidi").checked == true)
        {
            Heure ="midi";
        Rabais=0.40;
        }
        else
        {
            Heure="soir";
        Rabais=0.60;
        }

    }
     else if(Age>16 &&  document.getElementById("chkSession").checked == true)
     {
        if( document.getElementById("radMidi").checked == true)
        {
            Heure ="midi";
      Rabais=0.70;
        }
         else{
            Heure="soir";

        }

    }
      else if( document.getElementById("chkSession").checked == true)
    {
        Rabais=1;
        Heure ="midi";
    }
      else {
        Rabais=1;
        Heure="soir";
    }

    Total= PrixBase*Rabais;

    console.log("Le total es de "+ Total.toFixed(2)+"$"+  " pour le film " + ChoixFilm + " qui est le " + Heure +" et qui est âgé de " + Age );

}