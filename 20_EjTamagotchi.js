let happiness = 100;
let happy = true;

let happyPou = "./Ejercicio Tamagotchi/Pou.png";
let sadPou = "./Ejercicio Tamagotchi/PouSadgi.png";
let deadPou = "./Ejercicio Tamagotchi/PouDead.png";

let maxHapiness = 100;
const minHappiness = 0;

const pouImg = document.getElementById("pou");
const btns = document.querySelectorAll("btn")

let intervalHappiness = setInterval(() => {
    if (happiness > 0) {
        happiness--;
        console.log(happiness);
        console.log(happy);
    }
    if (happiness <= 25 && happy == true) {
        pouImg.src = sadPou;
        happy = false;
    } else if (happiness >= 25 && !happy) {
        pouImg.src = happyPou;
        happy = true;
    } else if (happiness === minHappiness) {
        pouImg.src = deadPou;
        clearInterval(intervalHappiness);
    }
}, 100);



btns.forEach(btn => {
    btn.onclick = (() => {


    });
});

