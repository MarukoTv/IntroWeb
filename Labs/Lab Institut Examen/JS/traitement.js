var tabNom = new Array(5);
var tabAge = new Array(5);
var noms,prenom,ages;

function frmMembre_onsubmit()
{
    var valider=false;
    if(validerChampsObli()===true)
    {
        if(validerFormat()===true)
        {
           total=validerInfo();

            if(confirm("Voulez-vous vraiment vous inscrire? "+" Cela va vous coûter "+total+"$") === true)
            {

                valider=true;
            }
        }
        else

            valider=false;

    }
    else
        valider=false;

    return valider;



}

function validerChampsObli()
{
    var tabnomId=new Array("txtNom","txtPrenom","txtAdresse","txtVille","txtTel","txtAge");
    var valider=true;
    var i;
    for(i=0;i<tabnomId.length;i++)
   {
    if(valideExist(tabnomId[i])===false)
    {
        valider=false;
    }

}
    return valider;
}
function validerInfo()
{
    var type;
    var total;
    type=document.getElementById("type").value;
    switch(type)
    {
        case "adulte": total=90;
            break;
        case "étudiant":
        total=60;break;
        case"retraité":total=80;
            break;
    }
    return total;
}
function valideExist(nomId)
{
    var valider =true;
    if (document.getElementById(nomId).value ==="")
    {
        valider=false;
        document.getElementById("lblMessageErreur").innerHTML="Veuillez entrer toutes les champs obligatoires";

    }
    else {
        valider=true;
        document.getElementById("lblMessageErreur").innerHTML="";
    }
    return valider;
}
function validerFormat()
{
var valider=true;
     if(valideTel(document.getElementById("txtTel").value) === false)
     {
    document.getElementById("txtTel").style.borderColor = "red";
    valider=false;
     }
     else {
         document.getElementById("txtTel").style.borderColor = "";
     }
    if(codePermanent(document.getElementById("txtCodePerm").value) === false)
    {
    document.getElementById("txtCodePerm").style.borderColor = "red";
    valider=false;
    }
    else {
        document.getElementById("txtCodePerm").style.borderColor = "";
    }
    if(age(document.getElementById("txtAge").value) === false)
    {
        document.getElementById("txtAge").style.borderColor = "red";
        valider=false;
    }
    else {
        document.getElementById("txtAge").style.borderColor = "";
    }
    if(nomPrenomVille(document.getElementById("txtNom").value) === false)
    {
        document.getElementById("txtNom").style.borderColor = "red";
        valider=false;
    }
    else {
        document.getElementById("txtNom").style.borderColor = "";
    }
    if(nomPrenomVille(document.getElementById("txtPrenom").value) === false)

    {
        document.getElementById("txtPrenom").style.borderColor = "red";
        valider=false;
    }
    else {
        document.getElementById("txtPrenom").style.borderColor = "";
    }
    if(nomPrenomVille(document.getElementById("txtVille").value) === false)
    {
        document.getElementById("txtVille").style.borderColor = "red";
        valider=false;
    }
    else {
        document.getElementById("txtVille").style.borderColor = "";
    }
    if(codePostal(document.getElementById("txtCodePostal").value) === false)
    {
        document.getElementById("txtCodePostal").style.borderColor = "red";
        valider=false;
    }
    else {
        document.getElementById("txtCodePostal").style.borderColor = "";
    }
    if(adresse(document.getElementById("txtAdresse").value) === false)
    {
        document.getElementById("txtAdresse").style.borderColor = "red";
        valider=false;
    }
    else {
        document.getElementById("txtAdresse").style.borderColor = "";
    }
return valider;
}
function valideTel(Chaine)
{
return  /^(\(\d{3}\)) (\d{3})-(\d{4})|(\d{3})-(\d{3})-(\d{4})$/.test(Chaine);
}
function codePermanent(Chaine)
{
  return  /^([A-zÀ-ë]{4}[0-9]{8})$/.test(Chaine);
}
function nomPrenomVille(Chaine)
{
  return  /^([A-zÀ-ë]{1,})-?([A-zÀ-ë]{1,})$/.test(Chaine);
}

function codePostal(Chaine)
{
  return  /^([A-z][0-9][A-z]) ([0-9][A-z][0-9])$/.test(Chaine);
}
function adresse(Chaine)
{
  return  /^([0-9]{4}) ([A-z]{1,}) ([A-z]{1,})-?([A-z]{1,})$/.test(Chaine);
}
function age(Chaine) {
    return /^[0-9]{1,}$/.test(Chaine);
}
function traitementInfo()
{
noms=document.getElementById("txtNom").value;
ages=document.getElementById("txtAge").value;
prenom=document.getElementById("txtPrenom").value;
}
function btnAjouter_onclick()
{


}


