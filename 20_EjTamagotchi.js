let happiness = 100;
let happy = true;

let maxHapiness = 100;

const happyPou = "./Ejercicio Tamagotchi/Pou.png";
const sadPou = "./Ejercicio Tamagotchi/PouSadgi.png";
const deadPou = "./Ejercicio Tamagotchi/PouDead.png";

const pouImg = document.getElementById("pou");
const btns = document.querySelectorAll("btn")

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const progressImage = document.getElementById('progress-image');

let intervalHappiness = setInterval(() => {


    if (happiness > 0) {
        happiness--;
        console.log(happiness);
        console.log(happy);
        drawProgress();
    }
    if (happiness <= 25 && happy == true) {
        pouImg.src = sadPou;
        happy = false;
    } else if (happiness >= 25 && !happy) {
        pouImg.src = happyPou;
        happy = true;
    } else if (happiness === 0) {
        pouImg.src = deadPou;
        clearInterval(intervalHappiness);
    }
}, 100);

btns.forEach(btn => {
    btn.onclick = (() => {


    });
});

function drawProgress() {
    const width = canvas.width;
    const height = canvas.height;
    const clipWidth = (width / maxHappiness) * happiness;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw progress image with clipping
    ctx.drawImage(progressImage, 0, 0, clipWidth, height, 0, 0, clipWidth, height);
}


progressImage.onload = function () {
    canvas.width = progressImage.width;
    canvas.height = progressImage.height;
    drawProgress();
};

