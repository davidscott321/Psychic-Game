var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computerKey = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeypress = function(event) 
{
    var userKey = event.key;

    if(userKey === computerKey)
    {
        wins++;
        guessesLeft = 9;

        computerKey = alphabet[Math.floor(Math.random() * alphabet.length)];
        document.getElementById('guessKeys').innerHTML = "";
    }
    else
    {
        guessesLeft--;
        
        if (guessesLeft === 8)
        {
            document.getElementById('guessKeys').innerHTML = userKey;
        }
        else
        {
            document.getElementById('guessKeys').innerHTML += ", " + userKey;
        }
    }
    if(guessesLeft === 0)
    {
        losses++;
        guessesLeft = 9;
        document.getElementById('guessKeys').innerHTML = "";
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
}