// Global Variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const buttonReset = document.getElementsByClassName('btn__reset')[0];
const missed = 0;

const phrases = [
    'hello world',
    'knowledge is power',
    'curiosity killed the cat',
    'between a rock and a hard place',
    'like riding a bicycle'
];

buttonReset.addEventListener('click', () => {
        buttonReset.style.display = "none";
    });

// Return a random phrase from the phrases array
function getRandomPhraseAsArray(phrases) {
    let randomNumber = Math.floor(Math.random() * phrases.length);
    return phrases[randomNumber];
}
