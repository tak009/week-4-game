$(document).ready(function() {

  //Create global variables
  var crystalNumbersArr = [];
  var crystalNumbers;
  var targetNumber;
  var result;
  var wins = 0;
  var losses = 0;

  function initializeData() {
    crystalNumbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    targetNumber;
    result = 0;

    // Get a random number between 19-120 at the start of the game
    do {
      var random = Math.random();
      targetNumber = Math.round(random * 120);
    } while (random < 0.155)

    $("#random-number").text(targetNumber);
    $("#result").text(result);

    // Assign score to each crystal, score is reset when restarting the game
    crystalNumbers = $("#crystal-numbers");
    jQuery.data(crystalNumbers, "crystals", {
      hexNumber: crystalNumbersArr[Math.floor(Math.random() * crystalNumbersArr.length)],
      diamondNumber: crystalNumbersArr[Math.floor(Math.random() * crystalNumbersArr.length)],
      squareNumber: crystalNumbersArr[Math.floor(Math.random() * crystalNumbersArr.length)],
      ovalNumber: crystalNumbersArr[Math.floor(Math.random() * crystalNumbersArr.length)]
    });
    console.log(jQuery.data(crystalNumbers, "crystals").hexNumber);
    console.log(jQuery.data(crystalNumbers, "crystals").diamondNumber);
    console.log(jQuery.data(crystalNumbers, "crystals").squareNumber);
    console.log(jQuery.data(crystalNumbers, "crystals").ovalNumber);
    console.log("------------------");
  }

  function checkScores() {
    if (result === targetNumber) {
      wins++;
      $("#scores").text("You won!!!");
      $("#wins").text(wins);
    }
    else if (result > targetNumber) {
      losses++;
      $("#scores").text("You lost!!!");
      $("#losses").text(losses);
    }
    else {
      return;
    }
    initializeData();
  }

  // Calculate total scores
  $("#hexagon").on("click", function() {
    result += jQuery.data(crystalNumbers, "crystals").hexNumber;
    $("#result").text(result);
    checkScores();
  });

  $("#diamond").on("click", function() {
    result += jQuery.data(crystalNumbers, "crystals").diamondNumber;
    $("#result").text(result);
    checkScores();
  });

  $("#square").on("click", function() {
    result += jQuery.data(crystalNumbers, "crystals").squareNumber;
    $("#result").text(result);
    checkScores();
  });

  $("#oval").on("click", function() {
    result += jQuery.data(crystalNumbers, "crystals").ovalNumber;
    $("#result").text(result);
    checkScores();
  });

  //Call function initializeData to set the variables
  initializeData();

});
