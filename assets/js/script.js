comVineKey = "e66e9aa178806d867789420a8e86e23da2db2d58"
comicvineURL = "https://comicvine.gamespot.com/api/"

marvelpublicKey = "10ac0c8d75dd78300bd5c3366134bf16"
marvelhash = "&hash=2965ad94a5b4a122eb9666674c776754"
marveldevURL = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey="

superheroToken = "1408209922908916"
//access token
superheroURL = "https://superheroapi.com/api/1408209922908916"

//array for marvel 
characterArray = ["Spider-Man",  "Thor",  "Iron Man", "Hulk", "Captain America", "Hawkeye", "Captain Marvel", "Doctor Strange", "Black Panther", "Black Widow", "Winter Soldier", "Vision", "Ant-Man", "Scarlet Witch",  "Wasp", "Falcon", "Loki", "Thanos", "Ultron", "Groot", "Drax", "star lord", "War Machine", "Nebula", "Gamora"]


//array for superhero api "powerstats" is keyword
characterArraysuper = ["Spider-man", "Thor", "Gamora", "Iron Man", "Ultron", "Groot", "Falcon", "Scarlet Witch", "Ant-Man", "Black Panther", "Thanos", "Star-Lord", "Hulk", "Captain America", "Loki"]

array_heroes = [];


fetch('https://superheroapi.com/api.php/2230409767102235/620/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
    return response.json();
  }).then(function (data){
      
array_heroes.push(data)})


