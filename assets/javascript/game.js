var wordBank = ["ketchup","mustard","mayonaise","hummus","pesto","hollandaise","vinegar","marinara"];
var userGuesses = [];
var wrongGuesses = [];
var correctGuesses;
var guessesLeft = 9;
var underscores = [];
var randomWord;
var wins=0;
var losses=0;
var alreadyGuessed=[];


function start () {
    underscores=[];
    correctGuesses=0;
    wrongGuesses=[];
    guessesLeft=9;
    userGuesses=[];
    correctGuesses=0;
    alreadyGuessed=[];

    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord);
    
    for (var i = 0; i < randomWord.length; i++){
        underscores.push('_ ');
        console.log(underscores.join());
    }
    document.getElementById('gamecenter').textContent = underscores.join("");

    
    document.getElementById('guessesRemaining').textContent = "Guesses Remaining: " + guessesLeft;
    document.getElementById('wrongGuesses').textContent = "Wrong Guesses: " + wrongGuesses.join(' ');
    document.getElementById('wins').textContent="Wins: " + wins;
    document.getElementById('losses').textContent="Losses: " +losses;
    

}

function result(){
    if (correctGuesses === randomWord.length) {
        alert("You win!");
        wins++;
            $("#images").empty();
            $("#images").append('<img src="assets/images/newGame.png.jpg" style="height:400px; align-content: center">')
        start();
    }
    else if(guessesLeft === 0) {
        alert('You lose!');
        losses++;
        start();
    }
}

document.onkeyup = function(event) {
    userGuesses = event.key;

    if(alreadyGuessed.indexOf(userGuesses) > -1) {
                alert("You already guessed that!");
            }
    
    

    else if(randomWord.indexOf(userGuesses) > -1) {
        // console.log(randomWord.indexOf(userGuesses));
        for (var i = 0; i < randomWord.length; i++) {
            
            if(randomWord[i] === userGuesses) {
                underscores[i] = userGuesses;
               
                document.getElementById('gamecenter').textContent = underscores.join("");
                correctGuesses++;
                result();
                alreadyGuessed.push(userGuesses);  
            } 

        }

    }
    else {
        wrongGuesses.push(userGuesses);
        // console.log(wrongGuesses);
        guessesLeft--;
        if (guessesLeft === 8) {
            $("#images").empty();
            $("#images").append('<img src="assets/images/1.jpg" style="height:400px; align-content: center">')
        };
        if (guessesLeft === 7) {
            $("#images").empty();
            $("#images").append('<img src="assets/images/2.jpg" style="height:400px; align-content: center">')
        };
        if (guessesLeft === 6) {
            $("#images").empty();
            $("#images").append('<img src="assets/images/3.jpg" style="height:400px; align-content: center">')
        };
        if (guessesLeft === 5) {
            $("#images").empty();
            $("#images").append('<img src="assets/images/4.jpg" style="height:400px; align-content: center">')
        };
        if (guessesLeft === 4) {
            $("#images").empty();
            $("#images").append('<img src="assets/images/5.jpg" style="height:400px; align-content: center">')
        };
        if (guessesLeft === 3) {
            $("#images").empty();
            $("#images").append('<img src="assets/images/6.jpg" style="height:400px; align-content: center">')
        };
        if (guessesLeft === 2) {
            $("#images").empty();
            $("#images").append('<img src="assets/images/7.jpg" style="height:400px; align-content: center">')
        };
        if (guessesLeft === 1) {
            $("#images").empty();
            $("#images").append('<img src="assets/images/8.jpg" style="height:400px; align-content: center">')
        };
        if (guessesLeft === 0) {
            $("#images").empty();
            $("#images").append('<img src="assets/images/9.jpg" style="height:400px; align-content: center">')
        }

        alreadyGuessed.push(userGuesses);
        result();

    }

    document.getElementById('guessesRemaining').textContent = "Guesses Remaining: " + guessesLeft;
    document.getElementById('wrongGuesses').textContent = "Wrong Guesses: " + wrongGuesses.join(' ');
    document.getElementById('wins').textContent="Wins: " + wins;
    document.getElementById('losses').textContent="Losses: " +losses;
}


start();


