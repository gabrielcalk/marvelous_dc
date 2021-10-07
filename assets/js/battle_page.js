
// getting the start button from the HTML
var start_game = document.querySelector('#start_game')

// getting the ul tag from the HTML (contains the name of the heroes that the user chosen)
var ul_heros = document.querySelector('#heroes_chosen')

// getting the div with the heroes, the div that will be the hero name, description and the image from the HTML
var div_heroes = document.querySelectorAll('.div_heroes')
var hero_name = document.querySelectorAll('.hero_name')
var description = document.querySelectorAll('.description')
var image_hero = document.querySelectorAll('.image-hero')

// Getting the options id form the HTML (how mony picks the user have)
var options = document.querySelector('#options')


// Setting that the user can only choose 3 heroes
var options_number = 3;

// Array with the heroes and enemies api
var heros_api = [];
var enemy_array_api = [];

// Array with the heroes and enemies names
var array_enemies_full = [];
var array_heros = []; 

// Calling the put name function
put_name();

// PUT NAME function
function put_name(){

// Adding on the DOM how many heroes the user can choose
    options.textContent = options_number + ' Heroes'

// Adding the name, description, giving one attribute (data) and adding one event listener on each hero from the page
    for (i = 0; i < heroPowers.length; i++){
        hero_name[i].textContent = heroPowers[i].character.toUpperCase();
        description[i].textContent = heroPowers[i].description;
        div_heroes[i].setAttribute('data-hero', characterArraysuper[i]);

// If the user click on one hero, then start the get hero function
        div_heroes[i].addEventListener('click', get_hero);
    }
}


// GET HERO function
function get_hero(e){

// Taking out the description, image description and the hero image and adding one select hero image that tells the user that his hero was chosen
e.target.parentElement.children[1].textContent = ' '
e.target.parentElement.parentElement.children[0].children[0].setAttribute('src', 'assets/images/Super_Hero_Pictures/Selected.png');
e.target.parentElement.children[0].setAttribute('src', 'assets/images/Super_Hero_Pictures/Selected.png');

// Information from StackOverFlow: https://stackoverflow.com/questions/37929825/how-to-access-data-attributes-from-event-object
// Making sure that we will grab the data-hero from the hero that was clicked. With this data, we are going to get the informations about that hero
    var hero_chosen = e.target.parentElement.parentElement.getAttribute("data-hero");

    if (hero_chosen === null){
        hero_chosen = e.target.getAttribute("data-hero");
    }

// Adding the hero that was chosen in an array
    array_heros.push(hero_chosen)

// Putting the hero name that was chosen on the page
    var li_heros = document.createElement('li')
    li_heros.textContent = hero_chosen
    ul_heros.append(li_heros)

// Setting the API in a variable
    var api_hero = 'https://www.superheroapi.com/api.php/2230409767102235/search/'+hero_chosen

// Getting the hero informations that was chosen from the user
    fetch(api_hero) 
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        heros_api.push(data);
    })

// Decreasing the user's pick every time that he/she choose one hero
    options_number --;

// if the user options is equal 1, then take out the 'es' from the heroes and change to 'hero'
    if (options_number == 1){
        options.textContent = options_number + ' Hero'

// If the user options is equal 0, then say that he/she is ready to play, show the button and start the enemy team function that will select the enemy team
    } else if (options_number == 0){ 
        options.textContent = 'You are ready to play!';
        start_game.classList.remove('hide');
        select_enemy_team();

// If the options to choose the heroes is 0, then remove the event listeners from the heroes, that mean the user cannot choose anymore heroes
        for (i = 0; i < characterArraysuper.length; i++){
            div_heroes[i].removeEventListener('click', get_hero)
        }

// if the options that the user has to pick heroes is more than one, then put how much options he/she was and add the word 'heroes' after
    } else {
        options.textContent = options_number + ' Heroes'
    }
    e.target.parentElement.parentElement.removeEventListener('click', get_hero)
    e.target.removeEventListener('click', get_hero)
}

// Function that select the enemy team
function select_enemy_team() {

// Defining that the enemy team has only 3 heroes
    for (i = 0; i < 3; i++){
        var hero_enemy = characterArraysuper[Math.floor(Math.random() * (characterArraysuper.length))];

// if the hero that was chosen randomly already has been chosen by the user or already have been add on the enemies team, then pick another hero
        if(array_enemies_full.includes(hero_enemy) || array_heros.includes(hero_enemy) ) {
            return select_enemy_team();
        }   else {

// if the hero is new, then push to an array
            array_enemies_full.push(hero_enemy)
            }
    }
     
// Grab the enemies team information from the superhero API
        for (i = 0; i < 3; i++){
            var api_enemy = 'https://www.superheroapi.com/api.php/2230409767102235/search/'+array_enemies_full.slice(0, 3)[i]

            fetch(api_enemy) 
            .then(function (response){
                return response.json();
            })
            .then(function (data){
                enemy_array_api.push(data);
            })
        }
}

// Function that is call after the user click to start the battle
function start_battle() {
    if ( options_number >= 1 ){
        alert('Choose 3 heroes')
    }
// When the user click to start the battle, then move him/her to the next page and save the enemy and user teams on the local storage
        location.href= 'marvel.html';
        localStorage.setItem("user_heroes", JSON.stringify(heros_api));
        localStorage.setItem("enemy_heroes", JSON.stringify( enemy_array_api));
}

// Adding one event on the button that let the user start the battle
start_game.addEventListener('click', start_battle)





