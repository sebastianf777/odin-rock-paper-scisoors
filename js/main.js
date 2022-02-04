let options = ["rock", "paper", "scissor"];
let computer_option_chosen;
let computer_option_displayed = document.getElementById("computer_player");
let winner_player = document.getElementById("winner_player");
let playerPlay = document.getElementById("playerSelection_panel_id");
let start_button = document.getElementById("start_button");
let game_started = false;
let player_option;
let other_options = document.querySelectorAll(".option_class");

//first we get computerSelection data that is obtained each time the player click on Start

function computerSelection() {
  if (game_started == true) {
    computer_option_chosen =
      options[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
    computer_option_displayed.textContent =
      computer_option_chosen.toUpperCase();
  }

}

//then we get the playerSelection data with this function that is obtained when the
//user clicks on the playerSelection_panel

playerPlay.addEventListener("click", function playerSelection(e) {

    player_option = e.target.textContent.toUpperCase();
    other_options.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.toggle("active");


  // computerSelection()
  // playRound()
});

//when we have the playersection and computerselection data we can use this function on the start button
function playRound() {
  if (game_started == true && player_option != undefined) {

    computerSelection();

    if (
      (computer_option_displayed.textContent == "ROCK" && player_option == "PAPER") ||
      (computer_option_displayed.textContent == "SCISSOR" && player_option == "ROCK") ||
      (computer_option_displayed.textContent == "PAPER" && player_option == "SCISSOR")
    ) {
      winner_player.textContent = "You WIN";
    } else if (
      (computer_option_displayed.textContent == "PAPER" && player_option == "ROCK") ||
      (computer_option_displayed.textContent == "ROCK" && player_option == "SCISSOR") ||
      (computer_option_displayed.textContent == "SCISSOR" && player_option == "PAPER")
    ) {
      winner_player.textContent = "You LOST";
    } else {
      winner_player.textContent = "It's a tie";
      
    }
  }else {
    winner_player.textContent = "Choose First";

  }
}



start_button.addEventListener("click", ()=>{
  game_started = true;
  playRound()
});
