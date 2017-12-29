alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];

words = ["maine", "florida", "texas", "california", "arizona", "NewYork"];
var computerChoice = words[Math.floor(Math.random() * words.length)];
var guesses = [];
var counter = 0;
var lives = 5;
var placeHolder = document.getElementById('hold');



//Alphabet buttons
function buttons() {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');
    letters.id = 'letterList';

    alphabet.forEach(e => {
        list = document.createElement('button');
        list.className = 'letter';
        list.innerHTML = e;
        letters.appendChild(list);
    });

    myButtons.appendChild(letters);

}


play = function() {
    buttons();
    console.log(computerChoice);
    var computerChoiceLen = computerChoice.length;
    console.log(computerChoiceLen);
    placeHolderElement = document.createElement('ul');

    for (i = 0; i < computerChoiceLen; i++) {
        phList = document.createElement('li');
        phList.id = 'dashes';
        phList.innerHTML = '_';
        placeHolderElement.appendChild(phList);
    }

    placeHolder.appendChild(placeHolderElement);

    var letterBtns = document.getElementsByClassName('letter');
    letterBtns.onclick = function() {
        console.log(this.innerHTML);
    }

}

//Chances for the player
var chances = document.getElementById('lives');
chances.innerHTML = lives;

//Hints
hint.onclick = function() {

    hints = ["Is known for its rocky coastline", "Disney land", "A river that forms its border with Mexico",
        "Hollywood entertainment industry", "is best known for the Grand Canyon", "Statue of liberty"
    ];

    if (computerChoice === "maine") {
        prompt
    }

}

//Play Again button
var playAgain = document.getElementById('reset');
playAgain.onclick = function() {
    play();
}

window.onload = play();