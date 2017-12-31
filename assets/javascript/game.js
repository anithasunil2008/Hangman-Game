window.onload = function() {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    var words = ["maine", "florida", "texas", "california", "arizona", "newyork"];

    var hints = ["'Is known for its rocky coastline'", "'Disney land'", "'A river that forms its border with Mexico'",
        "'Hollywood entertainment industry'", "'Is best known for the Grand Canyon'", "'Statue of liberty'"
    ];

    var flagSong = ["https://www.youtube.com/embed/xXknnb-d4WU",
        "https://www.youtube.com/embed/uweoegT29Cs",
        "https://youtu.be/bA1ZIyeY91E",
        "https://youtu.be/jft8cQPgmi0",
        "https://youtu.be/l-Wg_lDs2OY",
        "https://youtu.be/ptdQUJEEpyM"
    ];

    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
    var letterGuess;
    var getHint;
    var guess;
    var guesses = [];
    var lives;
    var counter;
    var space;
    var empty = [];

    var index = Math.floor(Math.random() * words.length);
    console.log(index);
    var computerChoice = words[index];
    console.log(computerChoice);

    var buttons = function() {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }

    main = function() {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < computerChoice.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (computerChoice[i] === "-") {
                //  guess.innerHTML = "-";
            } else {
                guess.innerHTML = "_";
            }
            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    comments = function() {
        showLives.innerHTML = lives;
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
            document.getElementById('stateSong').src = flagSong[index];
        }
        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showLives.innerHTML = "You Win!";
            }
        }
    }

    check = function() {
        list.onclick = function() {

            var g = document.getElementById("guessesLetter");

            letterGuess = this.innerHTML;
            console.log(letterGuess);
            empty.push(letterGuess);
            console.log(empty);
            g.innerHTML = empty;

            for (var i = 0; i < computerChoice.length; i++) {
                if (computerChoice[i] === letterGuess) {
                    guesses[i].innerHTML = letterGuess;
                    counter += 1;
                }
            }
            var j = (computerChoice.indexOf(letterGuess));
            if (j === -1) {
                lives -= 1;
                comments();

            } else {
                comments();
            }
        }
    }

    play = function() {
        buttons();
        guesses = [];
        lives = 10;
        counter = 0;
        main();
        comments();
    }

    play();

    hint.onclick = function() {
        console.log(hints[index]);
        document.getElementById('clue').innerHTML = hints[index];
    }

    document.getElementById('reset').onclick = function() {
        window.location.reload(true);
    }
}