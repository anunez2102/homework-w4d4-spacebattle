//kaboom did not work for me
//kaboom({  
//   background: [0, 0, 0],
//   width: 440,
//   height: 275,
//   scale: 1.5
// });

// loadSprite('background','https://i.imgur.com/S97mlSF.png')
// loadSprite('spaceship-down','https://imgur.com/14bYVOt ')
// loadSprite('spaceship-up', 'https://imgur.com/1F0SCBj')
// loadSprite('spaceship-left', 'https://imgur.com/hUq86v7')
// loadSprite('spaceship-right', 'https://imgur.com/0VmALxN')
// loadSprite('alienship', 'https://imgur.com/fwPyLPR')
// loadSprite('alien-obliterated', '')
// loadSprite('space-bg','https://imgur.com/AjNit73')
// loadSound('game-over','"C:\Users\Learner PSXSLHP210\Documents\Sound recordings\game-over.m4a"')
// loadSound('retreat-or-attack','"C:\Users\Learner PSXSLHP210\Documents\Sound recordings\retreat-or-attack.m4a"')
// loadSound('try-again','"C:\Users\Learner PSXSLHP210\Documents\Sound recordings\Try-again.m4a"')
// loadSound('you-won','"C:\Users\Learner PSXSLHP210\Documents\Sound recordings\you-won.m4a"')


// scene('main', ()=>{
//     const map = [
//         'a       ',
//         'a       ',
//         'a       ',
//         'a       ',
//         'aaaaaaaa',
//     ]

//     const levelCfg ={
//         width: 48,
//         height: 48, 
//         'a':[sprite('space-bg'),solid()],
//         'z': [sprite('alienship'), solid()]
//     }


//start('game')

//ships
class Spaceship {
    constructor () {
        this.hullPoints = 20
        this.firepower = 5
        this.accuracy = .5
        this.damage = 1
        this.playerName = "Ann"
    }
}

class Battle {
    hit(){
        this.damage +=.5;
        console.log ("You've hit your enemy! Would you like to retreat or attack?");
        }
    //if then attack or retreat
    miss(){
    this
    console.log ("Try again!");
    }
}
let battle = new Battle();

battle.hit();
let randomNumber;
    randomNumber = Math.random(); //0-1

battle.hit = randomNumber;
console.log (`Accuracy of your hit is ${randomNumber}`);
    if (randomNumber>this.accuracy){
    console.log ("You hit your enemy! Retreat or attack?")
    } else {
    console.log ("Try again!");
    }  

battle.miss();


    //properties://hull points
//firepower

//accuracy
//damage
//Players Name
//parent super the first ship as parent 
//child
//enemy

//if firstShip is hit then attack or retreat - google user input

//everything is between 0 and 1

    //target.hullPoints=target.hullPoints-this.firepower;
    //console.log (`Alien has ${target.hullPoints} hull points left.`);
    //if (target.hullPoints <=0) {
      //  target.isAlive = false;
        //console.log (`Alien ship is destroyed, congratulations ${playerName}!`)
    //} else {
      //  console.log(`you missed!`);
        //}

let retreatMessage='RETREAT!'
let attackMessage='ATTACK!'

const alienShip = {
    retreat() {
        console.log(retreatMessage)
    }
}

let randomNumber2= Math.random();
console.log(`Accuracy threshold is ${randomNumber2}`);
if (randomNumber<=this.accuracy) {
    console.log(`You've been hit!`);
    target.hull = target.hull-this.firepower;
    console.log(`hero has ${target.hull} hull points left.`);
    if (target.hull <= 0) {
        target.isAlive = false;
        console.log(`Womp, womp! GAME OVER!`);
        }
    } else {
    console.log(`You dodged the attack!`);
    }

const playGame = (playerName, computer) => {
    while (playerName.isAlive && computer.isAlive) {
        player.attack(computer);
    if (computer.isAlive) {
        computer.attack(playerName);
        }
    }
}

//used learning points from the following websites to enable some game features such as movement of ship and ammo
// --https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript 
// --https://www.bing.com/videos/search?q=what+code+to+use+instead+of+cxt+in+javascript&docid=608008086141735372&mid=ED7F93E7E53A131F7218ED7F93E7E53A131F7218&view=detail&FORM=VIRE
// I created this wireframe: https://www.figma.com/file/TJ7e2tnGVQHJEhOMYs4Vll/Untitled?node-id=2%3A3
