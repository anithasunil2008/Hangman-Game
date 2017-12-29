// Variables declaration section
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];

words = ["maine", "florida", "texas", "california", "arizona", "NewYork"];
hints = ["'Is known for its rocky coastline'", "'Disney land'", "'A river that forms its border with Mexico'",
    "'Hollywood entertainment industry'", "'Is best known for the Grand Canyon'", "'Statue of liberty'"
];
var index = Math.floor(Math.random() * words.length);
var computerChoice = words[index];
var computerChoiceLen = computerChoice.length;
var guesses = [];
var counter = 0;
var lives = 5;
var check;
var placeHolder = document.getElementById('hold');


// Logging computer choice and its length - Delete after final commit
console.log(index);
console.log(computerChoice);
console.log(computerChoiceLen);

//Establish lives for the player
var chances = document.getElementById('lives');
chances.innerHTML = lives;

//Hints rendering logic
hint.onclick = function() {
    console.log(hints[index]);
    document.getElementById('hintPrompt').innerHTML = hints[index];

}

//Play Again logic
var playAgain = document.getElementById('reset');
playAgain.onclick = function() {
    window.location.reload(true);
}

//Game Over
function gameOver() {
    if (lives == 0) {
        alert("Game Over");
    }
}

//Rendering alphabet buttons
function buttons() {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');
    letters.id = 'letterList';

    alphabet.forEach(e => {
        var list = document.createElement('button');
        list.className = 'letter';
        list.innerHTML = e;
        console.log(list.innerHTML);
        letters.appendChild(list);
    });

    myButtons.appendChild(letters);
}


// Logic to replace dashes with the guessed letter if it is present in the word
var guess = [];
result = function() {

}

// Main game function ---- All support functions should be written above this function
play = function() {
    // Render letter buttons
    buttons();

    // Render the generated buttons into a new unordered list
    placeHolderElement = document.createElement('ul');

    // Loop to render the dashes based on the computer choice
    for (i = 0; i < computerChoiceLen; i++) {
        phList = document.createElement('li');
        phList.className = 'dashes';
        phList.innerHTML = '_';
        placeHolderElement.appendChild(phList);
    }

    // Attach the newly created unordered list to the answer placeholder
    placeHolder.appendChild(placeHolderElement);

}

document.getElementsByClassName('letter').onclick = function() {
    console.log(this.innerHTML);
}

// Execute the main function on page load
window.onload = play();