var targetNumber;
var crystals = [0,0,0,0];
var currentValue = 0;
var wins = 0;
var losses = 0;

$(document).ready(function() {	

	resetGame();

	$("#crystal1").on("click", function() {
		currentValue = currentValue + crystals[0];
		$("#current-value").text(currentValue);
		determineGameState();
	});

	$("#crystal2").on("click", function() {
		currentValue = currentValue + crystals[1];
		$("#current-value").text(currentValue);
		determineGameState();
	});

	$("#crystal3").on("click", function() {
		currentValue = currentValue + crystals[2];
		$("#current-value").text(currentValue);
		determineGameState();
	});

	$("#crystal4").on("click", function() {
		currentValue = currentValue + crystals[3];
		$("#current-value").text(currentValue);
		determineGameState();
	});

});

function determineGameState() {
	if (currentValue == targetNumber) {
		wins++;
		resetGame();
		$("#wins-value").text(wins);
	} else if (currentValue > targetNumber) {
		losses++;
		resetGame();
		$("#losses-value").text(losses);
	}
}

function resetGame() {
		targetNumber = Math.floor(Math.random() * 101) + 19;
		for (var i = 0; i < crystals.length; i++) {
			crystals[i] = Math.floor(Math.random() * 12) +1;
		}
		currentValue = 0;
		$("#number-to-guess").text(targetNumber);
		$("#current-value").text(currentValue);
} 

