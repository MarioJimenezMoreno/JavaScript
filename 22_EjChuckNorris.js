const btnJoke = document.getElementById('btn');
const jokeText = document.getElementById('joke');

btnJoke.onclick = () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(joke => joke.json())
        .then(data => {
            jokeText.textContent = data.value;
        })
};