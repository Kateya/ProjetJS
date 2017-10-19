var titre = document.getElementById("titre");
var value = titre.value;

function textSizing(value) {
    if value == false {
        h1.style.fontSize = "50px";
        value = "true";
    }
    else {
        h1.style.fontSize = "30px";
        value = "false";
    }
}