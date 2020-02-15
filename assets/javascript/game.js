//Global Variables//

var Wins = 0
var Losses = 0;
var answer;
var guessesarray;
var guessesstring;
var numattemptsleft;

//New Game//
function NewGame() {

    // Picks letter between a-z
    answer = String.fromCharCode(Math.floor(26 * Math.random()) + 97);
    $("#answer").text(answer);
    console.log(answer);

    // resets variables upon new game or win/loss
    numattemptsleft=10;
    guessesstring = "";
    guessesarray  = [];

    // jQuery display statistics
    $("#Wins").text(Wins);
    $("#Losses").text(Losses);
    $("#numattemptsleft").text(numattemptsleft);
    $("#guesses").text(guessesstring);
}

$(document).ready(function() {
    NewGame();

    $(document).on("keypress", event => {
        const Guess = String.fromCharCode(event.which).toLowerCase();

        if ("a" <= Guess && Guess <= "z") {
            if (!guessesarray.includes(Guess)) {
                numattemptsleft--;

                $("#numattemptsleft").text(numattemptsleft);
                
                guessesarray.push(Guess);
                guessesstring += Guess;

                $("#guesses").text(guessesstring);

                if (Guess === answer) {
                    Wins++;
                    NewGame();

                } else if (numattemptsleft === 0) {
                    Losses++;
                    NewGame();

                }
            }
        }
    });
});