var start_game = document.querySelector('#start_game')

var hero_name = document.querySelectorAll('.hero_name')
var description = document.querySelectorAll('.description')
var image_hero = document.querySelectorAll('.image-hero')


var div_heroes = document.querySelectorAll('.div_heroes')
var options = document.querySelector('#options')
var ul_heros = document.querySelector('#heroes_chosen')

var options_number = 3;
var heros_api = [];
var enemy_array = [];

var enemy_test = [];
var array_heros = []; 

put_name();

function put_name(){
    options.textContent = options_number + ' Heroes'
    for (i = 0; i < heroPowers.length; i++){
        hero_name[i].textContent = heroPowers[i].character.toUpperCase();
        description[i].textContent = heroPowers[i].description;
        div_heroes[i].setAttribute('data-hero', characterArraysuper[i]);
        div_heroes[i].addEventListener('click', get_hero);
        // description[i].textContent = heroPowers[i].description
    }
}

function get_hero(e){
    e.preventDefault();
// Information from StackOverFlow: https://stackoverflow.com/questions/37929825/how-to-access-data-attributes-from-event-object
    var hero_chosen = e.target.parentElement.parentElement.getAttribute("data-hero");

    if (hero_chosen === null){
        hero_chosen = e.target.getAttribute("data-hero");
    }

    console.log(hero_chosen)
    console.log(e.target)

    array_heros.push(hero_chosen)
    var li_heros = document.createElement('li')
    li_heros.textContent = hero_chosen
    ul_heros.append(li_heros)

    var api_hero = 'https://www.superheroapi.com/api.php/2230409767102235/search/'+hero_chosen

    fetch(api_hero) 
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        heros_api.push(data);
    })

    options_number --;

    if (options_number == 1){
        options.textContent = options_number + ' Hero'
    } else if (options_number == 0){ 
        options.textContent = 'You are ready to play!';
        start_game.classList.remove('hide');
        select_enemy_team();
        for (i = 0; i < characterArraysuper.length; i++){
            div_heroes[i].removeEventListener('click', get_hero)
        }

    } else {
        options.textContent = options_number + ' Heroes'
    }
    e.target.parentElement.parentElement.children[0].children[0].setAttribute('src', 'assets/images/Super_Hero_Pictures/Selected.png');
}

function select_enemy_team() {
    for (i = 0; i < 3; i++){
        var hero_enemy = characterArraysuper[Math.floor(Math.random() * characterArraysuper.length)];

// if computer hero is equal than user hero, then do the random again
// from: https://forum.freecodecamp.org/t/how-to-make-math-random-not-repeat-same-numbers/417973/2

        if (array_heros.includes(hero_enemy)){
            select_enemy_team();
        } else{
            enemy_test.push(hero_enemy)
            var api_enemy = 'https://www.superheroapi.com/api.php/2230409767102235/search/'+hero_enemy

            fetch(api_enemy) 
            .then(function (response){
                return response.json();
            })
            .then(function (data){
                enemy_array.push(data);
            })
        }
    }
}

function start_battle() {
    if ( options_number >= 1 ){
        alert('Choose 3 heroes')
    }
        location.href= 'marvel.html';
        localStorage.setItem("user_heroes", JSON.stringify(heros_api));
        localStorage.setItem("enemy_heroes", JSON.stringify(enemy_array));
}

start_game.addEventListener('click', start_battle)

// Add the heroes description on the div

// Add the heroes images

// Don't choose the hero 2 times (enemy)

// Don't allow the user click on the div that contains the name of the hero

//Check why sometimes the enemy team choose more than 3



