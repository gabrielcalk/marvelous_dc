// Getting the user and computer team that is saved in the local storage
const heroes_user = JSON.parse(localStorage.getItem('user_heroes'));
const enemy_user = JSON.parse(localStorage.getItem('enemy_heroes'));

// Getting the user and opponent scores that is saved in the local storage
let user_score_var = JSON.parse(localStorage.getItem("user_score"));
let opponent_score_var = JSON.parse(localStorage.getItem("opponent_score"));

// Adding the users heroes powers and the computer heroes powers in 2 differente arrays
const heros_user_powers = [];
const heros_computer_powers = [];

// Getting elements from the html do add some changes on the dom with the js
const results_title = document.querySelector('#results_title');
const lost_won = document.querySelector('#lost_won');
const you = document.querySelector('#you');
const opponent = document.querySelector('#opponent')
const win_image = document.querySelectorAll('.win_image')
const losing_image = document.querySelectorAll('.losing_image')
const reset_score = document.querySelector('#reset_score')
const another_quote = document.querySelector('#another_quote')
const marvelQuote = document.querySelector("#mcuQuotes")

// Adding the sum of ther user and computer team in two different variables
let sum_user = 0;
let sum_computer = 0;

// Calling the get_powers function
get_powers()

function get_powers(){

// Getting all the powers from the user teams and pushing to a global array
    for (i = 0; i < heroes_user.length; i++){
        var combat_heroes_user = heroes_user[i].results[0].powerstats.combat
        var durability_heroes_user = heroes_user[i].results[0].powerstats.durability
        var intelligence_heroes_user = heroes_user[i].results[0].powerstats.intelligence
        var power_heroes_user = heroes_user[i].results[0].powerstats.power
        var speed_heroes_user = heroes_user[i].results[0].powerstats.speed
        var strength_heroes_user = heroes_user[i].results[0].powerstats.strength
        heros_user_powers.push(combat_heroes_user, durability_heroes_user, intelligence_heroes_user, power_heroes_user, speed_heroes_user, strength_heroes_user)
    }

// Getting all the powers from the computer teams and pushing to a global array
    for (i = 0; i < enemy_user.length; i++){
        var combat_heroes_computer = enemy_user[i].results[0].powerstats.combat
        var durability_heroes_computer = enemy_user[i].results[0].powerstats.durability
        var intelligence_heroes_computer = enemy_user[i].results[0].powerstats.intelligence
        var power_heroes_computer = enemy_user[i].results[0].powerstats.power
        var speed_heroes_computer = enemy_user[i].results[0].powerstats.speed
        var strength_heroes_computer = enemy_user[i].results[0].powerstats.strength
        heros_computer_powers.push(combat_heroes_computer, durability_heroes_computer, intelligence_heroes_computer, power_heroes_computer, speed_heroes_computer, strength_heroes_computer)
    }
// Passing the computer team powers and user team powers to two different functions
    computer(heros_computer_powers)
    user(heros_user_powers)
}

function computer(comput){
// Sum of the computer team powers
    for (i = 0; i < comput.length; i++){
        sum_computer += parseInt(comput[i])
    }
}

function user(user){
// Sum of the user team powers
    for (i = 0; i < user.length; i++){
        sum_user += parseInt(user[i])
    }
// Calling the show_results function
    show_results()
}

function show_results() {
// Making sure that if the user or the computer choose thor, it will not be the Lex Luthor image (problem that we had with the data from the API)
    if (heroes_user[0].results[0].name === 'Lex Luthor'){
        heroes_user[0].results[0].image.url = 'https://www.superherodb.com/pictures2/portraits/10/100/140.jpg'
    } else if (heroes_user[1].results[0].name === 'Lex Luthor'){
        heroes_user[1].results[0].image.url = 'https://www.superherodb.com/pictures2/portraits/10/100/140.jpg'
    } else if (heroes_user[2].results[0].name === 'Lex Luthor'){
        heroes_user[2].results[0].image.url = 'https://www.superherodb.com/pictures2/portraits/10/100/140.jpg'
    }

    if (enemy_user[0].results[0].name === 'Lex Luthor'){
        enemy_user[0].results[0].image.url = 'https://www.superherodb.com/pictures2/portraits/10/100/140.jpg'
    } else if (enemy_user[1].results[0].name === 'Lex Luthor'){
        enemy_user[1].results[0].image.url = 'https://www.superherodb.com/pictures2/portraits/10/100/140.jpg'
    } else if (enemy_user[2].results[0].name === 'Lex Luthor'){
        enemy_user[2].results[0].image.url = 'https://www.superherodb.com/pictures2/portraits/10/100/140.jpg'
    }

// If the sum of the computer team powers if more than the sum of the user team powers then: say that the user lost
    if (sum_computer > sum_user){

// Adding 1 score to the computer (opponent)
        opponent_score_var ++;
        results_title.textContent = 'You Got Smashed!!!!'
        lost_won.textContent = 'You Lose By: ' + (sum_computer-sum_user) + ' points';

        if (opponent_score_var === null){
            opponent_score_var = 0
        } else if(user_score_var === null){
            user_score_var =0
        }

// Adding the scores on the page
        you.textContent = 'You: ' + user_score_var;
        opponent.textContent = 'Computer: ' + opponent_score_var;
        
// Putting the computer team images and the user team images on the page
        for (i = 0; i < 3; i++){
            win_image[i].setAttribute('src', enemy_user[i].results[0].image.url)
            losing_image[i].setAttribute('src', heroes_user[i].results[0].image.url)
        }
    } 

// If the sum of the computer team powers if less than the sum of the user team powers then: say that the user won
        else if (sum_user > sum_computer){

// Adding 1 score to the user
        user_score_var ++;
        results_title.textContent = 'You Smashed The Computer Team!!!!'
        lost_won.textContent = 'You Won By: ' + (sum_user-sum_computer) + ' points';

        if (opponent_score_var === null){
            opponent_score_var = 0
        } else if(user_score_var === null){
            user_score_var = 0
        }

// Adding the scores on the page
        you.textContent = 'You: ' + user_score_var;
        opponent.textContent = 'Computer: ' + opponent_score_var;
    
// Putting the computer team images and the user team images on the page
        for (i = 0; i < 3; i++){
            win_image[i].setAttribute('src', heroes_user[i].results[0].image.url)
            losing_image[i].setAttribute('src', enemy_user[i].results[0].image.url)
        }
    }

// If the game is a Tie, then adding tie informations on the dom
    else{
        results_title.textContent = 'How is that possible!!!!'
        lost_won.textContent = 'It is a TIE!!!!';
        you.textContent = 'You: ' + user_score_var;
        opponent.textContent = 'Computer: ' + opponent_score_var;
        
    } 
}   

// Function that is called after the user clicked to reset the scores
function reset() {
    localStorage.setItem("user_score", 0);
    localStorage.setItem("opponent_score", 0);
    you.textContent = 'You: ' + 0;
    opponent.textContent = 'Computer: ' + 0;
}

// Setting the user and the computer scores to the local storage
localStorage.setItem("user_score", JSON.stringify(user_score_var));
localStorage.setItem("opponent_score", JSON.stringify(opponent_score_var));

// Calling the project second API
get_api2()

function get_api2() {
    fetch("https://cors-anywhere.herokuapp.com/https://superhero-quotes.herokuapp.com/grab?banner=mcu&size=50")
    .then(function (response){
    if(!response.ok){
        alert("API Error");
    }
        return response.json();
    })
    .then(function (data){
        phrase(data);
    })
}

// Adding the informations from the second API on the DOM
function phrase(data){
    mcuQuotes.textContent = ' '

// Selecting one random quote
    var random_phrase = data.Items[Math.floor(Math.random() * data.Items.length)];
    
// Adding the author of the phrase on the dom
    var author = document.createElement('H4');
    author.textContent = ' ' + random_phrase.data.author;
    marvelQuote.append(author);

// Adding the phrase on the dom
    var p_phrase = document.createElement('H3');
    p_phrase.textContent = random_phrase.data.quote;
    marvelQuote.append(p_phrase);
}


// Adding event listener on the button to reset score and the button to add another quote
reset_score.addEventListener('click', reset)
another_quote.addEventListener('click', get_api2)

