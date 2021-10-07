const heroes_user = JSON.parse(localStorage.getItem('user_heroes'));
const enemy_user = JSON.parse(localStorage.getItem('enemy_heroes'));

const heros_user_powers = [];
const heros_computer_powers = [];

const results_title = document.querySelector('#results_title');
const lost_won = document.querySelector('#lost_won');
const you = document.querySelector('#you');
const opponent = document.querySelector('#opponent')
const hero_image = document.querySelectorAll('.hero_image')

let sum_user = 0;
let sum_computer = 0;

let user_score = 0;
let opponent_score = 0;

get_powers()
function get_powers(){
    for (i = 0; i < heroes_user.length; i++){
        var combat_heroes_user = heroes_user[i].results[0].powerstats.combat
        var durability_heroes_user = heroes_user[i].results[0].powerstats.durability
        var intelligence_heroes_user = heroes_user[i].results[0].powerstats.intelligence
        var power_heroes_user = heroes_user[i].results[0].powerstats.power
        var speed_heroes_user = heroes_user[i].results[0].powerstats.speed
        var strength_heroes_user = heroes_user[i].results[0].powerstats.strength
        heros_user_powers.push(combat_heroes_user, durability_heroes_user, intelligence_heroes_user, power_heroes_user, speed_heroes_user, strength_heroes_user)
    }

    for (i = 0; i < enemy_user.length; i++){
        var combat_heroes_computer = enemy_user[i].results[0].powerstats.combat
        var durability_heroes_computer = enemy_user[i].results[0].powerstats.durability
        var intelligence_heroes_computer = enemy_user[i].results[0].powerstats.intelligence
        var power_heroes_computer = enemy_user[i].results[0].powerstats.power
        var speed_heroes_computer = enemy_user[i].results[0].powerstats.speed
        var strength_heroes_computer = enemy_user[i].results[0].powerstats.strength
        heros_computer_powers.push(combat_heroes_computer, durability_heroes_computer, intelligence_heroes_computer, power_heroes_computer, speed_heroes_computer, strength_heroes_computer)
    }
    computer(heros_computer_powers)
    user(heros_user_powers)
}

function computer(comput){

    for (i = 0; i < comput.length; i++){
        sum_computer += parseInt(comput[i])
    }
}

function user(user){
    
    for (i = 0; i < user.length; i++){
        sum_user += parseInt(user[i])
    }
    show_results()
}

function show_results() {
    if (sum_computer > sum_user){
        opponent_score ++;
        results_title.textContent = 'You Got Smashed!!!!'
        lost_won.textContent = 'You Lose By: ' + (sum_computer-sum_user) + ' points';
        you.textContent = 'You: ' + user_score;
        opponent.textContent = 'Computer: ' + opponent_score;
        for (i = 0; i < 3; i++){
            hero_image[i].setAttribute('src', enemy_user[i].results[0].image.url)
        }
    } 
    else if (sum_user > sum_computer){
        user_score ++;
        results_title.textContent = 'You Smashed The Computer Team!!!!'
        lost_won.textContent = 'You Won By: ' + (sum_user-sum_computer) + ' points';
        you.textContent = 'You: ' + user_score;
        opponent.textContent = 'Computer: ' + opponent_score;

        for (i = 0; i < 3; i++){
            hero_image[i].setAttribute('src', heroes_user[i].results[0].image.url)
        }
    }
    else{
        results_title.textContent = 'How is that possible!!!!'
        lost_won.textContent = 'It is a TIE!!!!';
        you.textContent = 'You: ' + user_score;
        opponent.textContent = 'Computer: ' + opponent_score;
    }

    if (heroes_user[0].results[0].name === 'Lex Luthor'){
        hero_image[0].setAttribute('src', 'https://www.superherodb.com/pictures2/portraits/10/100/140.jpg')
    } else if (heroes_user[1].results[0].name === 'Lex Luthor'){
        hero_image[1].setAttribute('src', 'https://www.superherodb.com/pictures2/portraits/10/100/140.jpg')
    } else if (heroes_user[2].results[0].name === 'Lex Luthor'){
        hero_image[2].setAttribute('src', 'https://www.superherodb.com/pictures2/portraits/10/100/140.jpg')
    } 
    
}   
