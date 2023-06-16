let enemyMove;
let enemyChoice;

let myMove;

let draw;
let winner = false;

const btns = document.querySelectorAll(".btn");
const gamemodeBtns = document.querySelectorAll(".gamemodeBtn")
const goMenuBtns = document.querySelectorAll(".goMenuBtn")
const chatBox = document.getElementById("chatBox");
const game = document.getElementById("gameContainer");
const menu = document.getElementById("menuContainer");
const end = document.getElementById("endScreen");
const result = document.getElementById("result");
const myScore = document.getElementById("myScore");
const enemyScore = document.getElementById("enemyScore");

let limit = 0;
let myNewScore = 0;
let enemyNewScore = 0;

/*Gamemode*/

gamemodeBtns.forEach(gamemodeBtn => {
    gamemodeBtn.onclick = ((event) => {

        menu.style.visibility = "hidden";
        game.style.visibility = "visible";

        gamemode = event.target.id;
        switch (gamemode) {

            case "unlimited":
                limit = -1;
                break;

            case "bestOf5":
                limit = 3;
                break;
        }
    });
});


/*Reglas*/

btns.forEach((btn) => {
    btn.onclick = ((event) => {

        myMove = event.target.textContent;

        enemyChoice = Math.floor(Math.random() * 3);

        switch (enemyChoice) {
            case 0:
                enemyMove = "✌";
                if (myMove === "✊") {
                    winner = true;
                }
                break;
            case 1:
                enemyMove = "✊";
                if (myMove === "🖐") {
                    winner = true;
                }
                break;

            case 2:
                enemyMove = "🖐";
                if (myMove === "✌") {
                    winner = true;
                }
                break;
        }

        draw = winner ? false : enemyMove == myMove;

        chatBox.insertAdjacentHTML(
            "afterbegin",
            "<div class='result " + (draw == true ? "draw" : (winner == true ? "win" : "loss")) + "'>"
            + "Result: " + (draw == true ? "It's a draw! => " : (winner == true ? "You WIN! => " : "You LOST! => "))
            + myMove + " vs " + enemyMove +
            "</div><br>"
        );

        if (!draw && winner) {
            myNewScore++;
        }
        else if (!draw && !winner) {
            enemyNewScore++;
        }

        myScore.textContent = myNewScore;
        enemyScore.textContent = enemyNewScore;

        draw = false;
        winner = false;

        if (myNewScore == limit || enemyNewScore == limit) {
            if (myNewScore > enemyNewScore) {
                result.textContent = "YOU WON"
                end.style.backgroundColor = "rgb(173, 255, 47,0.5)";
            } else {
                result.textContent = "YOU LOST"
                end.style.backgroundColor = "rgb(255, 99, 71,0.5)";
            }
            end.style.visibility = "visible"
            game.style.pointerEvents = "none";
        }

    });
});


goMenuBtns.forEach(goMenuBtn => {
    goMenuBtn.onclick = (() => {

        game.style.visibility = "hidden";
        game.style.pointerEvents = "auto";
        end.style.visibility = "hidden"
        menu.style.visibility = "visible";
        chatBox.innerHTML = "";
        enemyNewScore = 0;
        myNewScore = 0;
        myScore.textContent = 0;
        enemyScore.textContent = 0;


    });
});




