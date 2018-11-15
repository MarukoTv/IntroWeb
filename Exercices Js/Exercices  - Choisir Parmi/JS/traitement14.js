var Nbr1,Nbr2,Operateur,Total;
function btnCalculer_onclick()
{
    if (validerChampsObli()===true)
    {
        afficherInfo(NomID);
    }


}
function calculerOpera(Nbr1,Nbr2,Operateur)
{

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
}
function afficherInfo()
{
    Nbr1=parseFloat(document.getElementById("txtNbre1").value);
    Nbr2=parseFloat(document.getElementById("txtNbre2").value);
    Operateur=(document.getElementById("txtOperateur").value);
    calculerOpera(Nbr1,Nbr2,Operateur);
    console.log("le total avec l'operateur "+Operateur+" est de: "+Total);
    document.getElementById("lblMessage").innerHTML="le total avec l'operateur "+Operateur+" est de: "+Total;
}
function validerChampsObli()
{
    var valide=false;


    return valide;
}
function valideExist(NomID)
{
    var valide =true;
    if (document.getElementById().value == "")
    {

    }
    return valide;
}