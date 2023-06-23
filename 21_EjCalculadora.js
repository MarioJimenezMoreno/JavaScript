const body = document.querySelector("body");
const input = document.getElementById("inputThemes");
const screen = document.getElementById("screen");
const keyPad = document.getElementById("keyPad");

const numBtns = document.querySelectorAll(".num");
const opBtns = document.querySelectorAll(".operator");
const comaBtn = document.querySelector(".coma");
const calcBtn = document.querySelector(".calc");
const delBtn = document.querySelector(".del");
const resetBtn = document.querySelector(".reset");

const wBtns = document.querySelectorAll(".wb");
const rBtn = document.querySelector(".rb");
const gBtns = document.querySelectorAll(".gb");

const opScreen = document.getElementById("opScreen");
const numScreen = document.getElementById("numScreen");

let number = 0;
let operator = "";

numBtns.forEach(btn => {
    btn.onclick = () => {
        if (numScreen.textContent.length == 0 && btn.textContent == "0") {
            numScreen.textContent = "0.";
        }
        else if (opScreen.textContent.length > 0 && btn.textContent == "0") {
            storeData();
            numScreen.textContent = "0.";
        }
        else if (numScreen.textContent.length <= 14 && opScreen.textContent.length == 0) {
            numScreen.textContent = numScreen.textContent + btn.textContent;
        }
        else if (numScreen.textContent.length > 0 && opScreen.textContent.length > 0) {
            storeData();
            numScreen.textContent = numScreen.textContent + btn.textContent;
        }
    };
});

comaBtn.onclick = () => {
    if (numScreen.textContent.length > 0 && numScreen.textContent.length < 14 && !containsComa(numScreen.textContent)) {
        numScreen.textContent = numScreen.textContent + ".";
    }
    else if (numScreen.textContent.length == 0) {
        numScreen.textContent = "0.";
    }
    else if (opScreen.textContent.length > 0) {
        storeData();
        numScreen.textContent = "0.";
    }
}

opBtns.forEach(btn => {
    btn.onclick = () => {
        if (numScreen.textContent.length > 0) {
            opScreen.textContent = btn.textContent;
        }
    }
});

calcBtn.onclick = () => {
    let result = calculo(parseFloat(number), parseFloat(numScreen.textContent), operator);

    result.toString().length > 15 ? result = "999999999999999" : false;

    numScreen.textContent = result;
}

delBtn.onclick = () => {
    numScreen.textContent = numScreen.textContent.slice(0, -1);
    if (numScreen.textContent.length == 0) {
        opScreen.textContent = "";
    }
}

resetBtn.onclick = () => {
    numScreen.textContent = "";
    opScreen.textContent = "";
    number = "";
    operator = "";
}

/* Cálculos */

function storeData() {
    number = numScreen.textContent;
    operator = opScreen.textContent;
    numScreen.textContent = "";
    opScreen.textContent = "";
}

function calculo(num1, num2, op) {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return num2;
    }
}

function containsComa(num) {
    return num.includes(".");
}

/* Themes */

window.onload = () => {
    addT1();
}

input.onchange = () => {

    const valueInput = input.value;

    switch (parseInt(valueInput)) {
        case 1:
            removeT2();
            removeT3();
            addT1();
            break;
        case 2:
            removeT1();
            removeT3();
            addT2();
            break;
        case 3:
            removeT1();
            removeT2();
            addT3();
            break;
    }
};

function removeT1() {
    screen.classList.remove("s1");
    rBtn.classList.remove("rb1");
    keyPad.classList.remove("k1");
    body.classList.remove("b1");
    wBtns.forEach(btn => {
        btn.classList.remove("wb1");
    });
    gBtns.forEach(btn => {
        btn.classList.remove("gb1");
    });
}

function removeT2() {
    screen.classList.remove("s2");
    rBtn.classList.remove("rb2");
    keyPad.classList.remove("k2");
    body.classList.remove("b2");
    wBtns.forEach(btn => {
        btn.classList.remove("wb2");
    });
    gBtns.forEach(btn => {
        btn.classList.remove("gb2");
    });
}

function removeT3() {
    screen.classList.remove("s3");
    rBtn.classList.remove("rb3");
    keyPad.classList.remove("k3");
    body.classList.remove("b3");
    wBtns.forEach(btn => {
        btn.classList.remove("wb3");
    });
    gBtns.forEach(btn => {
        btn.classList.remove("gb3");
    });
}

function addT1() {
    screen.classList.add("s1");
    rBtn.classList.add("rb1");
    keyPad.classList.add("k1");
    body.classList.add("b1");
    wBtns.forEach(btn => {
        btn.classList.add("wb1");
    });
    gBtns.forEach(btn => {
        btn.classList.add("gb1");
    });
}
function addT2() {

    screen.classList.add("s2");
    rBtn.classList.add("rb2");
    keyPad.classList.add("k2");
    body.classList.add("b2");
    wBtns.forEach(btn => {
        btn.classList.add("wb2");
    });
    gBtns.forEach(btn => {
        btn.classList.add("gb2");
    });
}
function addT3() {
    screen.classList.add("s3");
    rBtn.classList.add("rb3");
    keyPad.classList.add("k3");
    body.classList.add("b3");
    wBtns.forEach(btn => {
        btn.classList.add("wb3");
    });
    gBtns.forEach(btn => {
        btn.classList.add("gb3");
    });
}
