const btns = document.querySelectorAll(".btn");
let keysDown = {};

document.onkeydown = ((event) => {

    const key = event.code;

    if (!keysDown[key]) {

        btns.forEach((btn) => {

            const keyBtn = btn.getAttribute('data-key');

            if (key === keyBtn) {

                btn.animate({
                    transform: ['scale(1)', 'scale(2)', 'scale(1)']
                },
                    {
                        duration: 1000,
                        easing: 'ease-in-out',
                        iterations: 1
                    });

                const sound = btn.getAttribute('data-sound');
                const audio = new Audio(sound);
                audio.play();
            }

            keysDown[key] = true;
        });
    };
});

document.onkeyup = ((event) => {
    const key = event.code;
    keysDown[key] = false;
});
