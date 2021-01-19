// Global Variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const buttonReset = document.getElementsByClassName('btn__reset')[0];
const missed = 0;
const button = document.getElementById('keyrow');

const phrases = [
    'hello world',
    'knowledge is power',
    'curiosity killed the cat',
    'between a rock and a hard place',
    'like riding a bicycle'
];

const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Hide the start screen overlay
buttonReset.addEventListener('click', () => {
        buttonReset.parentNode.style.display = "none";
    });

// Return a random phrase from the phrases array
function getRandomPhraseAsArray(arr) {
    let randomNumber = Math.floor(Math.random() * phrases.length);
    return phrases[randomNumber].split('');
}

//Calling the getRandomPhrasesAsArray function to check if it's working properly
console.log(getRandomPhraseAsArray(phrases));

//Add the letters of a string to the display
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

//Check if a letter is in the random phrase 
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

// Event listener for letter guess
qwerty.addEventListener('click', (e) => {
        if ( e.target.tagName === 'BUTTON' && !e.target.disabled) {
            e.target.classList.add('chosen');
            const letterFound = checkLetter(e.target);
        if ( letterFound === null ) {
            const hearts = document.querySelectorAll('.tries img');
            hearts[missed].src = "images/lostHeart.png";
            missed ++;    
        } 
    }
});

// check if the game has been won or lost
const checkWin = () => {
    const liLetter = document.querySelectorAll('.letter');
    const liShow = document.querySelectorAll('.show');
    if (liLetter.length === liShow.length ) {
        const winOverlay = document.getElementById('overlay');
        winOverlay.classList.add('win');
        const headline = document.querySelectorAll('header');
        headline.textContent = 'You Won, Congratulations!';
        winOverlay.style.display = 'flex';
    } 

}
