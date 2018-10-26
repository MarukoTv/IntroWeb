function btnCalculer_onclick()
{
var ChoixVeterinaire,Total,NbrJrs,CoutToilettage,service;

ChoixVeterinaire = document.getElementById("lstVeterinaire").value;
NbrJrs= parseFloat(document.getElementById("txtNbreJours").value);


if(document.getElementById("radMidi").checked == true)
{
    CoutToilettage=5;
    service="avec";
}
else
{
    CoutToilettage=0;
    service="sans";
}
if( document.getElementById("radChien").checked == true)
{
    Total=18.50;

}
else
{
    Total=16.95;
}
Total=((Total*NbrJrs)+CoutToilettage)*1.14975;

console.log("Le total es de "+ Total.toFixed(2)+"$" + " avec le vétérinaire "+ ChoixVeterinaire + " Pour "+NbrJrs+" jours "+" et "+service+" toilettage ");
}

