import {createElement, injectElements, injectElements2, renewTag} from "./functions/dom.js";
import {ingredient} from "./data.js"; // import des données
const wrapper = document.querySelector('#controle')


document.querySelector('#controle').prepend(createElement('input', {id: "nbTasse"}))
document.querySelector("#nbTasse").innerHTML = "Nombre de tasse"
document.querySelector("#nbTasse").placeholder = "Insérer le nombre de tasse"
document.querySelector("#nbTasse").style.display = "none";

// création des Inputs
document.querySelector('#start').addEventListener('click', start)
document.querySelector('#controle').prepend(createElement('input', {id:"Qte_Lait"}))
document.querySelector('#controle').prepend(createElement('input', {id:"Qte_Eau"}))
document.querySelector('#controle').prepend(createElement('input', {id:"Qte_Grains"}))
document.querySelector("#Qte_Lait").innerHTML = "Quantité de lait"
document.querySelector("#Qte_Lait").placeholder = "Insérer la quantité de lait"
document.querySelector("#Qte_Eau").innerHTML = "Quantité d'eau"
document.querySelector("#Qte_Eau").placeholder = "Insérer la quantité d'eau"
document.querySelector("#Qte_Grains").innerHTML = "Quantité de grains"
document.querySelector("#Qte_Grains").placeholder = "Insérer la quantité de grains"

function Cacher(element1, element2, element3) {
    document.getElementById(element1).style.display = "none";
    document.getElementById(element2).style.display = "none";
    document.getElementById(element3).style.display = "none";
    document.querySelector("#start").style.display = "block";
}

let btn_valider = document.querySelector("#valider");
btn_valider.addEventListener("click", function () {
    let Qte_Eau = document.getElementById("Qte_Eau").value;
    let Qte_Lait = document.getElementById("Qte_Lait").value;
    let Qte_grains = document.getElementById("Qte_Grains").value;
    if (Qte_Eau === "" || Qte_Lait === "" || Qte_grains === "") {
        alert("veuillez valdé vos données")
    }
    else {
        Cacher("Qte_Eau", "Qte_Lait", "Qte_Grains");
        document.querySelector("#nbTasse").style.display = "block";
    }
});

let QtEauUni = 200;
let QtlaitUni = 50;
let QtGrainsUni= 15;

function verif(QtEau, Qtlait, QtGrains, nbTasse) {
    let MaxQteEauDispo = QtEau
    let MaxQtelaitDispoo = Qtlait
    let QteGrainsDispoo = QtGrains

    nbTasse = document.getElementById("nbTasse").value;
    let MaxCafeEau = MaxQteEauDispo / QtEauUni
    let MaxCafeLait = MaxQtelaitDispoo / QtlaitUni
    let MaxCafeGrains = QteGrainsDispoo / QtGrainsUni
    document.querySelector("#start").disabled="true";
    if (document.getElementById("nbTasse").style.display === "none") {
       let message = renewTag('li')
        message.innerText = "veuillez valdé vos données"
    }
    else {
        let MaxCafe = (Math.min(MaxCafeEau, MaxCafeLait, MaxCafeGrains))
            if(MaxCafe === 0){
                alert("Vous n'avez pas assez d'ingrédient pour faire un café")
            }
            else if (MaxCafe === nbTasse) {
                alert("Oui, je peux faire cette quantité de café")
                const laListe2 = renewTag('ul');
                wrapper.append(laListe2);
                injectElements2(ingredient, laListe2)
            }
            else if (MaxCafe > nbTasse) {
                alert("Oui, je peux faire cette quantité de café " +"(et mêmme " + Math.round(nbTasse) + " plus que cela).")
                const laListe2 = renewTag('ul');
                wrapper.append(laListe2);
                injectElements2(ingredient, laListe2)
            }
            else if(MaxCafe < nbTasse) {
                alert("Non, je peux faire que " + Math.round(MaxCafe) + " tasses de café")
            }
        }

}

ingredient.getQuantity = function (nbTasse) {
    for (let value of Object.values(ingredient)) {
    value.Quantity = value.QuantityUni * nbTasse
    }
};

function start() {
    let Qte_Eau = document.getElementById("Qte_Eau").value;
    let Qte_Lait = document.getElementById("Qte_Lait").value;
    let Qte_grains = document.getElementById("Qte_Grains").value;
    if (document.getElementById("nbTasse").style.display === "none") {
        alert("veuillez valdé vos données")
    }
    else{
            ingredient.getQuantity(document.getElementById("nbTasse").value)
            verif(Qte_Eau, Qte_Lait, Qte_grains, document.getElementById("nbTasse").value)
    }
}

/*

    const laListe = renewTag('ul');
    wrapper.append(laListe)
    injectElements(etapes, laListe)
    */






