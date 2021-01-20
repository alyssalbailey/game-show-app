// Global Variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let buttonReset = document.getElementsByClassName('btn__reset')[0];
let missed = 0;
let button = document.getElementById('keyrow');
let hearts = document.querySelectorAll('.tries img');
let overlay = document.getElementById('overlay');

const phrases = [
    'hello world',
    'knowledge is power',
    'curiosity killed the cat',
    'between a rock and a hard place',
    'like riding a bicycle'
];

const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Hide the start screen overlay
buttonReset.addEventListener('click', () => {
        buttonReset.parentNode.style.display = "none";
    });

// Return a random phrase from the phrases array
function getRandomPhraseAsArray(arr) {
    let randomNumber = Math.floor(Math.random() * phrases.length);
    return phrases[randomNumber].split('');
}

// Calling the getRandomPhrasesAsArray function to check if it's working properly
console.log(getRandomPhraseAsArray(phrases));

// Add the letters of a string to the display
function addPhraseToDisplay(arr) {
    const ul = phrase.querySelector('ul');
    for (let i = 0; i < arr.length; i++){
        let li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);
        if (arr[i] !== ' ') {
            li.classList.add('letter');
        } else {
            li.classList.add('space');

        }
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// Check if a letter is in the random phrase
function checkLetter(button) {
    const li = document.querySelectorAll('.letter');
    let match = null;
    for (let i = 0; i < li.length; i++) {
        if (li[i].textContent.toLowerCase() == button.textContent ) {
            li[i].classList.add('show');  
            match = li[i].textContent;
        }
    }
        return match;
}

// Event listener for a letter guess
qwerty.addEventListener('click', (e) => {
        if ( e.target.tagName === 'BUTTON' && !e.target.disabled) {
            e.target.classList.add('chosen');
            const letterFound = checkLetter(e.target);
        if ( letterFound === null ) {
            hearts[missed].src = "images/lostHeart.png";
            missed ++;    
        } 
    }
    checkWin();
});

// check if the game has been won or lost
const checkWin = () => {
    let letter = document.querySelectorAll('.letter');
    let show = document.querySelectorAll('.show');
    let headline = overlay.querySelector('.title');
    if (letter.length == show.length ) {
        overlay.classList.add('win');
        overlay.style.display = 'flex';
        headline.textContent = 'You Won! Congratulations!';
    } else if (missed >= 5) {
        overlay.classList.add('lose');
        overlay.style.display = 'flex';
        headline.textContent = 'Uh oh. You Lost!';
    }
}