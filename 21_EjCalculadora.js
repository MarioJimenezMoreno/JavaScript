const input = document.getElementById("inputThemes");
const numBtns = document.querySelectorAll(".wb");
const calcBtn = document.querySelector(".rb");
const delBtns = document.querySelectorAll(".gb");
const screen = document.getElementById("screen");
const keyPad = document.getElementById("keyPad");
const body = document.getElementById("by");

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
    calcBtn.classList.remove("rb1");
    keyPad.classList.remove("k1");
    body.classList.remove("b1");
    numBtns.forEach(btn => {
        btn.classList.remove("wb1");
    });
    delBtns.forEach(btn => {
        btn.classList.remove("gb1");
    });
}

function removeT2() {
    screen.classList.remove("s2");
    calcBtn.classList.remove("rb2");
    keyPad.classList.remove("k2");
    body.classList.remove("b2");
    numBtns.forEach(btn => {
        btn.classList.remove("wb2");
    });
    delBtns.forEach(btn => {
        btn.classList.remove("gb2");
    });
}

function removeT3() {
    screen.classList.remove("s3");
    calcBtn.classList.remove("rb3");
    keyPad.classList.remove("k3");
    body.classList.remove("b3");
    numBtns.forEach(btn => {
        btn.classList.remove("wb3");
    });
    delBtns.forEach(btn => {
        btn.classList.remove("gb3");
    });
}

function addT1() {
    screen.classList.add("s1");
    calcBtn.classList.add("rb1");
    keyPad.classList.add("k1");
    body.classList.add("b1");
    numBtns.forEach(btn => {
        btn.classList.add("wb1");
    });
    delBtns.forEach(btn => {
        btn.classList.add("gb1");
    });
}
function addT2() {

    screen.classList.add("s2");
    calcBtn.classList.add("rb2");
    keyPad.classList.add("k2");
    body.classList.add("b2");
    numBtns.forEach(btn => {
        btn.classList.add("wb2");
    });
    delBtns.forEach(btn => {
        btn.classList.add("gb2");
    });
}
function addT3() {
    screen.classList.add("s3");
    calcBtn.classList.add("rb3");
    keyPad.classList.add("k3");
    body.classList.add("b3");
    numBtns.forEach(btn => {
        btn.classList.add("wb3");
    });
    delBtns.forEach(btn => {
        btn.classList.add("gb3");
    });
}
