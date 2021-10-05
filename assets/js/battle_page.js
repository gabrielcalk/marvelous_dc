

// set the one variable to 5 (the user can only choose 5 heroes) - Starting with 1

// Adding the heroes selected on the page that has the select class

// Add the heroes name on the div - option 1
var start_game = document.querySelector('#start_game')

var options = 5;


start_game.addEventListener('click', start_battle)

function start_battle() {
    if (options >= 1 ){
        alert('Choose 5 heroes')
    }
    else{
        location.href= 'marvel.html';
    }
}


// Add the heroes description on the div

// Add the heroes picture on the div (probably using html)

//Set attribute on the heroes DIV and add a select class(click)

//Set Attribute on the button that start the battle (starting the battle function)

//battle function: go to the next page



