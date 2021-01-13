// Global Variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const buttonReset = document.getElementsByClassName('btn__reset')[0];
const missed = 0;
const letterButton = document.getElementById('keyrow');

//Phrases to guess while in gameplay
const phrases = [
    'hello world',
    'knowledge is power',
    'curiosity killed the cat',
    'between a rock and a hard place',
    'like riding a bicycle'
];

const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

buttonReset.addEventListener('click', () => {
        buttonReset.style.display = "none";
    });

// Return a random phrase from the phrases array
function getRandomPhraseAsArray(arr) {
    let randomNumber = Math.floor(Math.random() * phrases.length);
    return phrases[randomNumber];
}

//Calling the getRandomPhrasesAsArray function to check if it's working properly
console.log(getRandomPhraseAsArray(phrases));

//Add the letters of a string to the display - done!
function addPhraseToDisplay(arr) {
    let letters = '';
    for (let i = 0; i < arr.length; i++){
        letters += `<li>${arr[i]}</li>`;
    }
    return letters;

}

document.querySelectorAll('phrase').innerHTML = `
        <ul>
            <li>${addPhraseToDisplay(characters)}</li>
        </ul>
    `;



const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

//Check if a letter is in the random phrase - INCOMPLETE
function checkLetter(letterButton) {
    const listItem = document.querySelectorAll('li');
    const matchLetter = null;
    let total = 0;
    for (let i = 0; i < listItem.length; i++);
    total += listItem[i];
    // if letter is part of the phrase, then add the 'show class' 
}


//Event listener for 'press button' on the screen keyboard
qwerty.addEventListener('click', () => {
    //missing statements

});