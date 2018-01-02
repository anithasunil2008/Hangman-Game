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
        "https://www.youtube.com/embed/bA1ZIyeY91E",
        "https://www.youtube.com/embed/jft8cQPgmi0",
        "https://www.youtube.com/embed/l-Wg_lDs2OY",
        "https://www.youtube.com/embed/ptdQUJEEpyM"
    ];

    var showLives = document.getElementById("mylives");
    //var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
    var letterGuess;
    var getHint;
    var guess;
    var guesses = [];
    var lives = 10;
    var counter = 0;
    var space = 0;
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
                guess.innerHTML = "-";
                console.log(guess);
                space = 1;
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

        }
        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showLives.innerHTML = "You Win!";
                document.getElementById('stateSong').src = flagSong[index];
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
        main();
        comments();

    }

    //main function calling
    play();

    //Clue button function
    hint.onclick = function() {
        console.log(hints[index]);
        document.getElementById('clue').innerHTML = hints[index];
    }

    //Play again button funtion
    document.getElementById('reset').onclick = function() {
        window.location.reload(true);
    }
}