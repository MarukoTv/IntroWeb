function btnCalculer_onclick()
{

    var Note1, Note2,Note3,Note4;

    Note1  = parseFloat(document.getElementById("txtNbre1").value);
    Note2 = parseFloat(document.getElementById("txtNbre2").value);
    Note3 = parseFloat(document.getElementById("txtNbre3").value);
    Note4=3;

    if((Note1>=Note2) && (Note2 !=  Note3))
    {
        Note4=Note4+(2*Note1);
    }
    else if((Note1== Note2) || (Note2>Note3 ))
    {
        Note4=Note4+Note1;
    }
    else
    {
        Note4=((Note4*Note2)/Note1)-Note3;
    }
    console.log("La valeur de du dernier nombre est "+Note4);
    document.getElementById("lblMessage").innerHTML="La valeur de du derneir nombre est "+Note4;
}
