var start_game = document.querySelector('#start_game')
var hero_name = document.querySelectorAll('.hero_name')
var div_heroes = document.querySelectorAll('.div_heroes')
var options = document.querySelector('#options')
var ul_heros = document.querySelector('#heroes_chosen')

var options_number = 5;
var heros_team = [];


put_name();

function put_name(){
    options.textContent = options_number + ' Heroes'
    for (i = 0; i < characterArraysuper.length; i++){
        hero_name[i].textContent = characterArraysuper[i].toUpperCase()
        div_heroes[i].setAttribute('data-hero', characterArraysuper[i])
        div_heroes[i].addEventListener('click', get_hero)
    }
}

function get_hero(e){
    e.preventDefault();
// Information from StackOverFlow: https://stackoverflow.com/questions/37929825/how-to-access-data-attributes-from-event-object
    e.target.classList.add('hero_selected') 

    var hero_chosen = e.target.getAttribute("data-hero");
    heros_team.push(hero_chosen)

    var li_heros = document.createElement('li')
    li_heros.textContent = hero_chosen
    ul_heros.append(li_heros)

    options_number --;

    if (options_number == 1){
        options.textContent = options_number + ' Hero'

    }   else if (options_number == 0){ 
            options.textContent = 'You are ready to play!';
            start_game.classList.remove('hide');
            for (i = 0; i < characterArraysuper.length; i++){
                div_heroes[i].removeEventListener('click', get_hero)
            }

        }   else {
            options.textContent = options_number + ' Heroes'
            }
}


function start_battle() {
    if ( options_number >= 1 ){
        alert('Choose 5 heroes')
    }
        location.href= 'marvel.html';
}

start_game.addEventListener('click', start_battle)

// Add the heroes description on the div

// Add the heroes picture on the div (probably using html)

//Set attribute on the heroes DIV and add a select class(click)

//Set Attribute on the button that start the battle (starting the battle function)

//battle function: go to the next page



