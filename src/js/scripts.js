let div_autocompletion = document.getElementById("autocompletion");
div_autocompletion.style.borderWidth = `0px`;
function afficheVilles(tableau) {

    videVilles();
    tableau.forEach((ville) => {
        let p = document.createElement('p');
        p.textContent = ville;
        div_autocompletion.appendChild(p);
    });
}

function videVilles() {
    while (div_autocompletion.firstChild) {
        div_autocompletion.removeChild(div_autocompletion.firstChild);
    }
    div_autocompletion.style.borderWidth = `0px`;
}

function videVilles2() {
    div_autocompletion.innerHTML = "";
}

function requeteAJAX(stringVille, callback, startLoadingAction, endLoadingAction) {
    startLoadingAction
    let url = "php/requeteVille.php?ville=" + encodeURIComponent(stringVille);
    let requete = new XMLHttpRequest();
    requete.open("GET", url, true);
    requete.addEventListener("load", function () {
        callback(requete);
    });
    endLoadingAction;
    requete.send(null);
}

function callback_1(req) {
    console.log(req);
}

function callback_2(req) {
    let resultat = JSON.parse(req.responseText);
    console.log(resultat);
}

function callback_3(req) {
    let resultat = JSON.parse(req.responseText);
    let array = resultat.map(objet => objet.name);
    console.log(array);
}

function callback_4(req) {
    let resultat = JSON.parse(req.responseText);
    let array = resultat.map(objet => objet.name);
    afficheVilles(array);
}

function maRequeteAJAX(string) {
    requeteAJAX(string, callback_4, function (){}, function (){});
}

let div_ville = document.getElementById("ville");

div_ville.addEventListener('input', function () {
    if(this.value.length > 1) {
        maRequeteAJAX(this.value);
    }else{
        videVilles();
    }
})

div_autocompletion.addEventListener('click', function (event) {
    videVilles();
    div_ville.value = event.target.innerHTML;

})

