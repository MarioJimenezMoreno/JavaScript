

let enemyMove;
let enemyChoice;

let myMove;

let draw;
let winner;

let btns = document.querySelectorAll(".btn");
let chatBox = document.getElementById("chatBox")

btns.forEach((btn) => {
    btn.onclick = ((event) => {

        myMove = event.target.textContent;

        enemyChoice = Math.floor(Math.random() * 3);

        switch (enemyChoice) {
            case 0:
                enemyMove = "✌";
                if (myMove == "✊") {
                    winner = true;
                }
                break;
            case 1:
                enemyMove = "✊";
                if (myMove == "🖐") {
                    winner = true;
                }
                break;

            case 2:
                enemyMove = "🖐";
                if (myMove == "✌") {
                    winner = true;
                }
                break;
        }

        winner == false ? enemyMove == myMove ? draw = true : false : false;

        chatBox.innerHTML = "Result: " + (draw == true ? "Draw!" : (winner == true ? "You WIN! => " : "You LOST! => ")) + myMove + " vs " + enemyMove + "<br>" + chatBox.innerHTML;
        draw = false;
        winner = false;
    });
});



