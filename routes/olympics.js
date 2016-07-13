

var router = require('express').Router();

var archery = [
  {Name: 'Mackenzie Brown', Origin: 'Flint, Texas', Sport: 'Archery', Picture: './media/archery/brown_mackenzie.jpg'},
  {Name: 'Brady Ellison', Origin: 'Globe, Arizona', Sport: 'Archery',Picture: './media/archery/ellison_brady.jpg'},
  {Name: 'Zach Garrett', Origin: 'Wellington, Missouri', Sport: 'Archery', Picture: './media/archery/garrett_zach.jpg'},
  {Name: 'Jake Kaminski', Origin: 'Gainesville, Florida', Sport: 'Archery', Picture: './media/archery/kaminski_jake.jpg'}
];
var tableTennis = [
  {Name: 'Yijun Feng', Origin: 'Atlanta, Georgia', Sport: 'Table Tennis', Picture: './media/tableTennis/feng_yijun.jpg'},
  {Name: 'Kanak Jha', Origin: 'Milpitas, California', Sport: 'Table Tennis', Picture: './media/tableTennis/jha_kanak.jpg'},
  {Name: 'Timothy Wang', Origin: 'Houston, Texas', Sport: 'Table Tennis', Picture: './media/tableTennis/wang_timothy.jpg'},
  {Name: 'Jennifer Wu', Origin: 'Fort Lee, New Jersey', Sport: 'Table Tennis', Picture: './media/tableTennis/wu_jennifer.jpg'},
  {Name: 'Lily Zhang', Origin: 'Palo Alto, California', Sport: 'Table Tennis', Picture: './media/tableTennis/zhang_lily.jpg'},
  {Name: 'Jiaqi Zheng', Origin: 'Fremont, California', Sport: 'Table Tennis', Picture: './media/tableTennis/zheng_jiaqi.jpg'}
];
var judo = [
  {Name: 'Colton Brown', Origin: 'Piscataway, New Jersey', Sport: 'Judo', Picture: './media/judo/brown_colton.jpg'},
  {Name: 'Angelica Delgado', Origin: 'Miami, Florida', Sport: 'Judo', Picture: './media/judo/delgado_angelica.jpg'},
  {Name: 'Nick Delpopolo', Origin: 'Davie, Florida', Sport: 'Judo', Picture: './media/judo/delpopolo_nick.jpg'},
  {Name: 'Kayla Harrison', Origin: 'Middletown, Ohio', Sport: 'Judo', Picture: './media/judo/harrison_kayla.jpg'},
  {Name: 'Marti Mallory', Origin: 'Oak Harbor, Washington', Sport: 'Judo', Picture: './media/judo/malloy_marti.jpg'},
  {Name: 'Travis Stevens', Origin: 'Tacoma, Washington', Sport: 'Judo', Picture: './media/judo/stevens_travis.jpg'}
];
var taekwondo = [
  {Name: 'Jackie Galloway', Origin: 'Wylie, Texas', Sport: 'Taekwondo', Picture: './media/taekwondo/galloway_jackie.jpg'},
  {Name: 'Stephen Lambdin', Origin: 'Rockwall, Texas', Sport: 'Taekwondo', Picture: './media/taekwondo/lambdin_stephen.jpg'},
  {Name: 'Steven Lopez', Origin: 'Sugar Land, Texas', Sport: 'Taekwondo', Picture: './media/taekwondo/lopez_steven.jpg'},
  {Name: 'Paige McPherson', Origin: 'Abilene, Texas', Sport: 'Taekwondo', Picture: './media/taekwondo/mcpherson_paige.jpg'}
];
var weightlifting = [
  {Name: 'Jenny Arthur', Origin: 'Gainesville, Georgia', Sport: 'Weightlifting', Picture: './media/weightlifting/arthur_jenny.jpg'},
  {Name: 'Kendrick Farris', Origin: 'Shreveport Louisiana', Sport: 'Weightlifting', Picture: './media/weightlifting/farris_kendrick.jpg'},
  {Name: 'Morghan King', Origin: 'Redmond, Washington', Sport: 'Weightlifting', Picture: './media/weightlifting/king_morghan.jpg'},
  {Name: 'Sarah Robles', Origin: 'Dessert Hot Springs, California', Sport: 'Weightlifting', Picture: './media/weightlifting/robles_sarah.jpg'}
];

var total= archery.concat(tableTennis);
total = total.concat(judo);
total = total.concat(taekwondo);
total = total.concat(weightlifting);


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var randomAthletesArr = [0, 0, 0, 0, 0];
var randomIndividual = [];

function randomizer() {

    var archIndex= getRandomInt(0, archery.length-1);
    randomAthletesArr[0] = archery[archIndex];

    var judoIndex= getRandomInt(0, judo.length-1);
    randomAthletesArr[1] = judo[archIndex];

    var tennisIndex= getRandomInt(0, tableTennis.length-1);
    randomAthletesArr[2] = tableTennis[archIndex];

    var taekIndex= getRandomInt(0, taekwondo.length-1);
    randomAthletesArr[3] = taekwondo[archIndex];

    var weightIndex= getRandomInt(0, weightlifting.length-1);
    randomAthletesArr[4] = weightlifting[archIndex];
}

function randomInd(sport) {
    randomizer()
    var randomIndex = getRandomInt(0, sport.length-1)
    randomIndividual = sport[randomIndex];
}





router.get('/all', function(request, response){

  response.send(total)
});

router.get('/', function(request, response){
  response.send('Welcome to the landing page');
})

router.get('/archery', function(request, response){
  //select a random object from the archery array
  randomInd(archery)
  response.send(randomIndividual);
})
router.get('/tableTennis', function(request, response){
  //select a random object from the tableTennis array
  randomInd(tableTennis)
  response.send(randomIndividual);
})
router.get('/judo', function(request, response){
  //select a random object from the judo array
  randomInd(judo)
  response.send(randomIndividual);
})
router.get('/taekwondo', function(request, response){
  //select a random object from the taekwondo array
  randomInd(taekwondo);
  response.send(randomIndividual);
})
router.get('/weightlifting', function(request, response){
  //select a random object from the weightlifting array
  randomInd(weightlifting);
  response.send(randomIndividual);
})

router.get('/randomAthletes',function(request, response){
  randomizer();
  response.send(randomAthletesArr);
})

router.get('/randomIndividual', function(request, response){
  randomInd();
  response.send(randomIndividual);
})

module.exports = router;
