let options = ['rock','papper', 'scissor'];
let computer_option_chosen; 

function computerPlay (){
    computer_option_chosen = options[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
console.log(computer_option_chosen)
}

computerPlay()