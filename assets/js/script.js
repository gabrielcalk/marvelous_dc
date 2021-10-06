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
characterArraysuper = ["spider-man", "thor", "ironman", "hulk", "captain america", "hawkeye", "captain marvel", "doctor strange", "black panther", "black widow", "winter soldier", "vision", "ant-man", "scarlet witch", "wasp", "falcon", "loki", "thanos", "ultron", "groot", "drax", "star-lord", "war machine", "nebula", "gamora"]

// Resquesting the first 100 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=0')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data1){
    console.log(data1)})

// Resquesting the 100 - 200 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=100')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data2){
    console.log(data2)})

// Resquesting the first 200 - 300 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=200')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data3){
    console.log(data3)})

// Resquesting the first 300 - 400 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=300')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data4){
    console.log(data4)})

// Resquesting the first 400 - 500 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=400')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data5){
    console.log(data5)})

// Resquesting the first 500 - 600 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=500')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data6){
    console.log(data6)})

// Resquesting the first 600 - 700 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=600')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data7){
    console.log(data7)})

// Resquesting the first 700 - 800 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=700')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data8){
    console.log(data8)})

// Resquesting the first 800 - 900 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=800')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data9){
    console.log(data9)})

// Resquesting the first 900 - 1000 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=900')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data10){
    console.log(data10)})

// Resquesting the first 1000 - 1100 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=1000')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data11){
    console.log(data11)})

// Resquesting the first 1100 - 1200 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=1100')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data12){
    console.log(data12)})

// Resquesting the first 1200 - 1300 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=1200')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data13){
    console.log(data13)})

// Resquesting the first 1300 - 1400 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=1300')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data14){
    console.log(data14)})

// Resquesting the 1400 - 1500 characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=1400')
.then(function (response){if (!response.ok) {alert('API error');}
  return response.json();
}).then(function (data15){
    console.log(data15)})

//
//
//
//
//
//
//