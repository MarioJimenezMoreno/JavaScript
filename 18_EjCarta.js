let card = document.getElementById("card");

const cartaBack = "./Ejercicio carta/card-back.png";
const cartaFront = "./Ejercicio carta/card-front.png";

card.onmouseover = (() => {
    card.src = cartaFront;
});

card.onmouseout = (() => {
    card.src = cartaBack;
});

