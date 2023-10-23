document.addEventListener("DOMContentLoaded", function() {
    // Get random card numbers between 1 and 10 for both players
    var randomNumber1 = Math.floor(Math.random() * 10) + 1;
    var randomNumber2 = Math.floor(Math.random() * 10) + 1;

    // Update card images based on random numbers
    document.getElementById("card1").src = "images/card" + randomNumber1 + ".png";
    document.getElementById("card2").src = "images/card" + randomNumber2 + ".png";

    // Check which player wins or if it's a draw and display the result
    var resultText = document.getElementById("result");

    if (randomNumber1 > randomNumber2) {
        resultText.textContent = "Player 1 wins!";
    } else if (randomNumber2 > randomNumber1) {
        resultText.textContent = "Player 2 wins!";
    } else {
        resultText.textContent = "It's a draw!";
    }

    // Button click event listener to reload the page for a new game
    var guessButton = document.getElementById("guessButton");
    guessButton.addEventListener("click", function() {
        location.reload();
    });
});
