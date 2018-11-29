//Function to play the number guessing game
function playgame(){
    var lowerBound = 0;
    var upperBound = 100;
    var upperBoundForTheRandomNumberGenerator = upperBound + 1;
    var guess;
    var guessThisNumber = Math.floor(Math.random() * upperBoundForTheRandomNumberGenerator);
    var iNumGuesses = 0;
    
    guess = prompt("Welcome to the number guesing game! Please guess a number between " + lowerBound + " and " + upperBound + ".");
    iNumGuesses++;
    
    while (guess != guessThisNumber){
        if (guess > guessThisNumber){
            guess = prompt("Too high! Guess a lower number");
        }
        else{
            guess = prompt("Too low! Guess a higher number");
        }
        iNumGuesses++;
    }
    
    alert("Good job! You guessed correctly! You guessed " + iNumGuesses + " time(s)!");
}


//function to play the basketball game
function playBasketball(){
    
    //welcomes the user, gets the team name and number of games, and stores that inormation

    alert("Welcome to the college basketball season simulator!");
    var sHomeTeamName = prompt("What will your home college team be named?");
    var sAnswer = prompt("Thank you for that information. Now, how many games would you like to have in your season?");
    var iGamesInSeason = parseInt(sAnswer);


    //create and initialize variables

    var iGameNum = 0; //Which game number we are at
    var iWinNum = 0; //total wins in the season
    var iLoseNum = 0; //total losses in the season

    for (iGameNum = 1; iGameNum <= iGamesInSeason; iGameNum++) {
        //Get the Opponent's name
        var sOpponentName = prompt("Who will " + sHomeTeamName + " play for game " + iGameNum + "?");

        //creates variables to store our scores in
        var iHomeScore;
        var iOpponentScore;

        do {
            //runs if the loop is true, which it will be because we forced it to be true
            //generate random scores for both teams between 0 and 99.
            iHomeScore = Math.floor(Math.random() * 100);
            iOpponentScore = Math.floor(Math.random() * 100);
        }
        while (iHomeScore == iOpponentScore);



        //this will run if the two randomly generated numbers are not equal (almost 100% of the time they will not be equal)

        //this makes a new variable called sOutcome which will say if we win or lose.
        var sOutcome;

        //enter if decision to help us know what we should set sOutcome as a "Win" or a "Lose"
        if (iHomeScore > iOpponentScore) {
            //runs if (iHomeScore> iOpponentScore) is actually true
            sOutcome = "Win";
            iWinNum++; //increments iWinNum which counts our total wins in the season.
        }
        else {
            //runs if (iHomeScore> iOpponentScore) is actually false
            sOutcome = "Lose";
            iLoseNum++; //increments iLoseNum which counts our total losses in the season.
        }
        //The code below is what gets executed after it runs the if statment.

        //Displays our scores and outcome
        document.write(sHomeTeamName + ": " + iHomeScore + "<br>");
        document.write(sOpponentName + ": " + iOpponentScore + "<br>");
        document.write(sOutcome + "<br>");

        //Prints a blank line for readability
        document.write("<br>")

        //sets game score values back to zero (equal to each other) so we can escape the loop
        iHomeScore = 0;
        iOpponentScore = 0;


    }//<<<< end of our for loop bracket

    //this code now runs after we have worked through all of the games in the season and we are ready to calculate the
    //season's ending results.

    //Display the home team's name and their record for the season
    document.write(sHomeTeamName + " " + iWinNum + "- " + iLoseNum + "<br>");

    //creates iWinNumAsDouble variable which allows us to store iWinNum as a double to allow for decimal calculations which will come.
    var iWinNumAsDouble = parseFloat(iWinNum);

    //creates iGamesInSeasonAsDouble variable which allows us to store iGamesInSeason
    //as a double to allow for decimal calculations which will come.
    var iGamesInSeasonAsDouble = parseFloat(iGamesInSeason);

    //calculates the successfulness of their season and stores it as dPercent
    var dPercent = (iWinNumAsDouble / iGamesInSeasonAsDouble);

    //if statement that will allow us to sort the successfulness of their season into a proportionately successful bracket.

    if (dPercent > .75) {
        //they had a great season
        // runs if true)

        //prints "March Madness"
        document.write("March Madness! How far will you go?");
    }
    else if (dPercent > .5) {
        //they had an ok season
        //runs if true

        //prints "NIT"
         document.write("NIT. Could be worse.");
    }
    else {
        //they had a horrible season
        //this means they won less than half of their games.

        //prints "See you next year!"
        document.write("<br>" + "You didn't win more than 50% of your games. Haha Your coach's job is now on the line and the fans are mobbing!");
    }
}
