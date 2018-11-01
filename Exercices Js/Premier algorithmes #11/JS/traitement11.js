function btnCalculer_onclick()
{ 
 	var Note1, Note2, Signe;
    Note1  = parseFloat(document.getElementById("txtNbre1").value);
    Note2 = parseFloat(document.getElementById("txtNbre2").value);

if((Note1>=0) && (Note2>=0) || (Note1<=0) && (Note2<=0))
{
    Signe="Positif"
}
else
{
    Signe="Négatif"
}
    console.log("Le signe est "+Signe);
    document.getElementById("lblMessage").innerHTML="Le signe est "+Signe;
}