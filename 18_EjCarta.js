let card = document.getElementById("card");

const cartaBack = "./Ejercicio carta/card-back.png";
const cartaFront = "./Ejercicio carta/card-front.png";

card.onmouseover = (() => {
    card.setAttribute('src', cartaFront);
});

card.onmouseout = (() => {
    card.setAttribute('src', cartaBack);
});

