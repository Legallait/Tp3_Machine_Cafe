import {createElement, injectElements, injectElements2, renewTag} from "./functions/dom.js";
import {Cafe} from "./data.js";
const wrapper = document.querySelector('#controle')

var retour = document.getElementById("retour");
var actions = document.getElementsByName("action");
var boissons = document.getElementsByName("boisson");
var inputs = document.getElementsByName("input");
var valider_prendre = document.getElementById("valider_prendre");
var valider_remplir = document.getElementById("valider_remplir");
document.querySelector('#controle').prepend(createElement('p', {id:"PrixRecup"}))

function init(){
    retour.style.display = "none";
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.display = "none";
    }
    for (let i = 0; i < boissons.length; i++) {
        boissons[i].style.display = "none";
    }
    for (let i = 0; i < actions.length; i++) {
        actions[i].style.display = "block";
    }
    valider_remplir.style.display = "none";
    valider_prendre.style.display = "none"
    document.getElementById("PrixRecup").innerHTML="";
}
retour.addEventListener("click", init);
init();

function remplir(){
    valider_remplir.innerText = "Valider";
    valider_remplir.addEventListener("click", function (){
        let lait = document.getElementById("lait").value;
        let eau = document.getElementById("eau").value;
        let grain = document.getElementById("grain").value;
        let tasse = document.getElementById("tasse").value;
        Cafe[0].QteEau = eau;
        Cafe[0].QteLait = lait;
        Cafe[0].QteGrain = grain;
        Cafe[0].QteTasse = tasse;
        init();
    });
    document.getElementById("lait").placeholder = "Niveau actuel lait : " + Cafe[0].QteLait;
    document.getElementById("eau").placeholder = "Niveau actuel eau : " + Cafe[0].QteEau;
    document.getElementById("grain").placeholder = "Niveau actuel grain : " + Cafe[0].QteGrain;
    document.getElementById("tasse").placeholder = "Nombre actuel de tasse : " + Cafe[0].QteTasse;
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.display = "block";
    }
    for (let i = 0; i < actions.length; i++) {
        actions[i].style.display = "none";
    }
    retour.style.display = "block";
    valider_remplir.style.display = "block";
}
document.getElementById("remplir").addEventListener("click", remplir);

function verifierQuantite(indice_cafe){
    let QteEauDispo = Cafe[0].QteEau
    let QtelaitDispo = Cafe[0].QteLait
    let QteGrainDispo = Cafe[0].QteGrain
    let QteTasseDispo = Cafe[0].QteTasse

    let value = Cafe[indice_cafe]
    let MaxCafeEau = QteEauDispo / value.QteEauUni
    let MaxCafeLait = QtelaitDispo / value.QteLaitUni
    let MaxCafeGrains = QteGrainDispo / value.QteGrainsUni

    let MaxCafe = (Math.min(MaxCafeEau, MaxCafeLait, MaxCafeGrains))

    if (QteTasseDispo == 0)
        document.getElementById("PrixRecup").innerText = "Vous n'avez pas assez de tasse"
    else if(MaxCafe == 0){
        document.getElementById("PrixRecup").innerText = "Vous n'avez pas assez d'ingrédient pour faire un " + value.title
    }

    else{
        document.getElementById("PrixRecup").innerText = value.title + " lancé !!! Bonne dégustation"
        Cafe[0].QteEau -= value.QteEauUni
        Cafe[0].QteLait -= value.QteLaitUni
        Cafe[0].QteGrain -= value.QteGrainsUni
        Cafe[0].QteTasse -= 1
        Cafe[0].PrixRecup += value.PrixUni
    }
}

function acheter(){
    for (let i = 0; i < actions.length; i++) {
        actions[i].style.display = "none";
    }
    retour.style.display = "block";
    for (let i = 0; i < boissons.length; i++) {
        boissons[i].style.display = "block";
    }

    document.getElementById("expresso").addEventListener("click", () => {
        verifierQuantite(1);
    });

    document.getElementById("latte").addEventListener("click", () => {
        verifierQuantite(2);
    });

    document.getElementById("capuccino").addEventListener("click", () => {
        verifierQuantite(3);
    });
}
document.getElementById("acheter").addEventListener("click", acheter);

function prendre(){
    valider_prendre.innerText = "Prendre";
    valider_prendre.addEventListener("click", function (){
        let tmp = Cafe[0].PrixRecup
        Cafe[0].PrixRecup = 0
        document.getElementById("PrixRecup").innerText = "Vous avez récupéré " + tmp + "€"
        init();
    });
    for (let i = 0; i < actions.length; i++) {
        actions[i].style.display = "none";
    }
    retour.style.display = "block";
    valider_prendre.style.display = "block";
    for (let i = 0; i < boissons.length; i++) {
        boissons[i].style.display = "none";
    }
    document.querySelector('#PrixRecup').innerHTML = "Vous avez " + Cafe[0].PrixRecup + "€ dans la machine."

}
document.getElementById("prendre").addEventListener("click", prendre);
