var h1 = document.getElementById("h1");
var value = h1.value;

function textSizing (value) {
    if value == false {
        h1.style.fontSize = "50px";
        value = "true";
    }
    else {
        h1.style.fontSize = "30px";
        value = "false";
    }
}