let options = ["rock", "paper", "scissor"];
let computer_option_chosen;
let game_started = false;
let player_option;
let round_number = 0;
let computer_option_displayed = document.getElementById("computer_player");
let winner_player = document.getElementById("winner_player");
let playerPlay = document.getElementById("playerSelection_panel_id");
let start_button = document.getElementById("start_button");
let round_number_div = document.getElementById("round_number");
let other_options = document.querySelectorAll(".option_class");
let player_count = 0;
let computer_count = 0;

//first a function declaring who wins each case scenario

function whoWins() {
  if (
    (computer_option_displayed.textContent == "ROCK" &&
      player_option == "PAPER") ||
    (computer_option_displayed.textContent == "SCISSOR" &&
      player_option == "ROCK") ||
    (computer_option_displayed.textContent == "PAPER" &&
      player_option == "SCISSOR")
  ) {
    if (round_number <= 5) {
    winner_player.textContent = "You WIN this round";
    player_count++
    if (player_count == 3) {
      round_number = 0
      winner_player.textContent = "You WIN the Game";
      start_button.textContent = 'RESET'
      game_started = false
      winner_player.textContent = `GAME OVER 
      You: ${player_count}
      Computer: ${computer_count}`;

      }
    }
  } else if (
    (computer_option_displayed.textContent == "PAPER" &&
      player_option == "ROCK") ||
    (computer_option_displayed.textContent == "ROCK" &&
      player_option == "SCISSOR") ||
    (computer_option_displayed.textContent == "SCISSOR" &&
      player_option == "PAPER")
  ) {
    if (round_number <= 5) {
    winner_player.textContent = "You LOSE this Round";
    computer_count++  
    if (computer_count == 3) {
      round_number = 0
      winner_player.textContent = "You LOSE the game";
      start_button.textContent = 'RESET'
      game_started = false
      winner_player.textContent = `GAME OVER 
      You: ${player_count}
      Computer: ${computer_count}`;

    
      }
    }
  } else {
    winner_player.textContent = "It's a tie";
  }
}

//Then we get computerSelection data that is obtained each time the player click on Start
// and we establish the round number by 0 as a start

round_number_div.textContent = round_number;

function computerSelection() {
  if (game_started == true) {
    computer_option_chosen =
      options[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
    computer_option_displayed.textContent =
      computer_option_chosen.toUpperCase();
  }
}

//then we get the playerSelection data with this function that is obtained when the
//user clicks on the playerSelection_panel. This increases round number by 1 if the
// game has started and reset Computer choosed option

playerPlay.addEventListener("click", function playerSelection(e) {
  player_option = e.target.textContent.toUpperCase();

  if (game_started == true && round_number <= 4) {
    round_number++;
    round_number_div.textContent = round_number;
    computerSelection();
    whoWins();
    if(game_started == true && round_number == 5){
      round_number = 0
      start_button.textContent = 'RESET'
      game_started = false
      winner_player.textContent = `GAME OVER 
      You: ${player_count}
      Computer: ${computer_count}`;

    }
  }
  other_options.forEach((element) => {
    element.classList.remove("active");
  });
  e.target.classList.toggle("active");

  // computerSelection()
  // playRound()
});


//when we have the playersection and computerselection data we can use this function on the start button
function playRound() {
  if (game_started == false && player_option != undefined && round_number == 0) {
    round_number++;
    player_count = 0;
    computer_count = 0;
    round_number_div.textContent = round_number;

    game_started = true;

    computerSelection();

    whoWins();
    start_button.textContent = 'GAME STARTED'

  } else {
    // game_started = false;
    
    if (round_number == 0) {
    winner_player.textContent = "Choose First";
      
    }else{
    winner_player.textContent = "The game has already started";
      
    }
 
  }
}

start_button.addEventListener("click", () => {
  playRound();
});
