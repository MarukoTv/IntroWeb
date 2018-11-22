
function btnCalculer_onclick()
{
    if (validerChampsObli()===true)
    {
        afficherInfo();
    }


}
function calculerOpera(Nbr1,Nbr2,Operateur)
{
    var Total;
    switch(Operateur)
    {
        case "*": Total=Nbr1*Nbr2;
            break;
        case "/": Total=Nbr1/Nbr2;
            break;
        case "+":Total=Nbr1+Nbr2;
            break;
        case "-": Total=Nbr1-Nbr2;
            break;
        default: Operateur="Entrez une opération (-,+,/,*)";
            break;
    }
    return Total;
}
function afficherInfo()
{
    Nbr1=parseFloat(document.getElementById("txtNbre1").value);
    Nbr2=parseFloat(document.getElementById("txtNbre2").value);
    Operateur=(document.getElementById("txtOperateur").value);
    Total=calculerOpera(Nbr1,Nbr2,Operateur);
    console.log("le total avec l'operateur "+Operateur+" est de: "+Total);
    document.getElementById("lblMessage").innerHTML="le total avec l'operateur "+Operateur+" est de: "+Total;
}
function validerChampsObli()
{
    var valide=false;
 if(valideExist("txtNbre1")===true && valideExist("txtNbre2")===true&&valideExist("txtOperateur")===true)
 {
     valide=true;
 }

    return valide;
}
function valideExist(nomId)
{
    var valide =true;
    if (document.getElementById(nomId).value ==="")
    {
        valide=false;
        document.getElementById(nomId).style.backgroundColor="red";
    }
    else {
        valide=true;
        document.getElementById(nomId).style.backgroundColor="white";
    }
    return valide;
}