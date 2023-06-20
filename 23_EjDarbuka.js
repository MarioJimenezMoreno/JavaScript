let btns = document.querySelectorAll(".btn");

document.onkeydown = ((event) => {
    btns.forEach((btn) => {

        const key = btn.getAttribute('data-key');

        if (event.code === key) {

            const sound = btn.getAttribute('data-sound');
            const audio = new Audio(sound);
            audio.play();

        }

    });
});