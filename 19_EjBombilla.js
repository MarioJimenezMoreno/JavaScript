let btn = document.getElementById("btn");
let bulb = document.getElementById("bulb");
let settings = document.getElementById("containerSettings");
let opacity = document.getElementById("opacity")
let zoom = document.getElementById("zoom")

const boff = "./Ejercicio bombilla/boff.jpg";
const bon = "./Ejercicio bombilla/bon.jpg";
const on = "./Ejercicio bombilla/on.jpg";
const off = "./Ejercicio bombilla/off.jpg";

let energy = false;

btn.onclick = (() => {

    if (energy == false) {
        btn.setAttribute('src', bon);
        bulb.setAttribute('src', on);
        settings.style.visibility = "visible";
        energy = true;
    } else {
        btn.setAttribute('src', boff);
        bulb.setAttribute('src', off);
        settings.style.visibility = "hidden";
        energy = false;
    }
});

switch (parseInt(zoom.value)) {
    case 1:
        bulb.style.height = "200px";
        break;
    case 2:
        bulb.style.height = "300px";
        break;
    case 3:
        bulb.style.height = "400px";
        break;
    case 4:
        bulb.style.height = "500px";
        break;
    default:
        break;
}
