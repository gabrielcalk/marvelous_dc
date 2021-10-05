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
}).then(function (data1){console.log(data1)})

// Resquesting the first 200characters marvel
fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=100')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})

fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=200')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})

fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=300')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})

fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=400')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})

fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=500')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})

fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=600')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})

fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=700')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})

fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=800')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})

fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=900')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})

fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=1000')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})

fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=1100')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})

fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=1200')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})

fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=1300')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})

fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=1400')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})

fetch(marveldevURL+marvelpublicKey+marvelhash+'&limit=100&offset=1500')
.then(function (response){
    if (!response.ok) {
    alert('API error');
    }
    return response.json();
})
.then(function (data){
    console.log(data)
})