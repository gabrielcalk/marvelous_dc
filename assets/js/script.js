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



//following are notes to the id of the character and path to thumbnail

//ant-man (scott lang) id: 1010801 thumbnail: {path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/20/52696868356a0', extension: 'jpg'} no description

//Black Panther id: 1009187 {path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d', extension: 'jpg'} no description

//Black Widow id: 1009189 {path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b', extension: 'jpg'} no description

//Captain America id: 1017105 {path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/10/52321928eaa72', extension: 'jpg'} has description

//Captain Marvel id: 1010338  {path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a', extension: 'jpg'} no description

//Hawkeye id: 1017108 {path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/03/5232198a81c17', extension: 'jpg'} has description

//Hulk id: 1009351 {path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0', extension: 'jpg'} has description



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
//spider-man powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/620/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
fetch('https://superheroapi.com/api.php/2230409767102235/346/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//super hero api iron man powerstats fetch
fetch('https://superheroapi.com/api.php/2230409767102235/346/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//Ant Man powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/30/powerstats') 
        .then(function (response){if (!response.ok) {alert('API error');}
              return response.json();
            }).then(function (data){
                console.log(data)})
//black widow powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/107/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//black panther powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/106/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//captain america powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/149/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//captain marvel powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/156/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//wintersoldier powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/714/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//wasp powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/708/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//scarlet witch aka wanda maximoff
fetch('https://superheroapi.com/api.php/2230409767102235/579/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//gamora powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/275/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//doctor strange powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/226/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//Drax powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/234/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//thor powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/659/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//hulk powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/332/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//Star Lord powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/630/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//hawkey powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/313/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//vision powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/697/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//thanos powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/655/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//War Machine powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/703/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//loki powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/414/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//falcon powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/251/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//ultron powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/680/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//groot powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/303/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
//nebula powerstats
fetch('https://superheroapi.com/api.php/2230409767102235/487/powerstats') 
.then(function (response){if (!response.ok) {alert('API error');}
      return response.json();
    }).then(function (data){
        console.log(data)})
