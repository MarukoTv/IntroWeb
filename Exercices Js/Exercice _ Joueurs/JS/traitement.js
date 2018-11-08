var Nom,Points,moyenne,i,meilleurPointage;
var tabPoint = new Array(nombreNom);
var tabJoueur = new Array(nombreNom);
function btnRechercher_onclick()
{
    calculerJoueurs();
}
function  btnAjouter_onclick()
{

}
function btnTrouverMoy_onclick()
{

}
function btnTrouverMeilleur_onclick()
{

}
function btnTrouverPire_onclick()
{

}
function saisirInformation()
{
    Nom=Document.getElementById("btnRechercher").value;
    Points= parseInt(document.getElementById("txtPoints").value);
}
function calculerJoueurs()
{
    nombreNom+=1;
    document.getElementById("lblJoueur").innerHTML="Le nom du joueur est " + nombreNom;
}
function saisirMoyenne ()
{
for(i=0;i<tabPoint.length;i++)
{
moyenne+=Points;
}
moyenne=moyenne/tabPoint.length;
    document.getElementById("lblReponse").innerHTML="La moyenne est de  " + moyenne;
}
function SaisirMeilleurPointage()
{
    for(i=0;i<tabPoint.length;i++)
    {
      if(i<=tabPoint[i])
      {
          meilleurPointage=tabPoint[i];

      }
    }
    document.getElementById("lblReponse").innerHTML="Le meilleur pointage est de  " + meilleur + "réalisé par "+ nom;
}