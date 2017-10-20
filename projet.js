var rectangle = document.getElementById('rectangle');
var hauteur = parseInt(document.getElementById('rectangle').style.height);
var fontSize = parseInt(document.getElementById('titre1').style.fontSize);
console.log(fontSize);

// defi 1 : taille de texte 

function texte() {
    if (fontSize == 30) {
        fontSize = 50;
        titre1.style.fontSize = fontSize + "px";
    }
    else if (fontSize == 50) {
        fontSize = 30;
        titre1.style.fontSize = fontSize + "px";
    }
}



// defi 2 : boutons

function augmenter() {
    if (hauteur < 300) {
        hauteur = hauteur + 10;
        rectangle.style.height = hauteur+"px";
    }
    else {
        hauteur = 100;
        var nbHauteur = hauteur+"px";
    }
}

function green(){
    rectangle.style.backgroundColor = "green";
}

function blue(){
    rectangle.style.backgroundColor = "#1ABDF2";
}

function hide() {
    rectangle.style.display = "none";
}

function block() {
    rectangle.style.display = "block";
}

//defi 3 : rectangle en mouvement

function down() {
    rectangle.style.marginTop = "100px";
}

function up() {
    rectangle.style.marginTop = "0px";
    setTimeout(down, 300);
}

/*function down() {
    margin = 100;
    rectangle.style.marginTop = margin + "px"; 
}*/
