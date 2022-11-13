var css = document.querySelector("h3");
var color1 = document.querySelector("[name = 'color1']");
var color2 = document.querySelector("[name = 'color2']");
var angle = document.querySelector("[name = 'angle']")

function changeColor() {
    document.body.style.background = "linear-gradient(" + angle.value + "deg," + color1.value +"," + color2.value + ")";
    css.innerText = document.body.style.background;
    // css.innerText = angle.value;
}

color1.addEventListener("input", changeColor)
color2.addEventListener("input", changeColor)
angle.addEventListener("change", changeColor)