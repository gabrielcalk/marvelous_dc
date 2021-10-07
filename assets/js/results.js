const heroes_user = JSON.parse(localStorage.getItem('user_heroes'));
const enemy_user = JSON.parse(localStorage.getItem('enemy_heroes'));

const heros_user_powers = [];
const heros_computer_powers = [];

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
}
console.log(heros_user_powers)
console.log(heros_computer_powers)