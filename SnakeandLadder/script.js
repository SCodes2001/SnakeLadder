//second slide Capturing
redgreenposbottom = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72]
redposleft = [0, 1, 9, 17, 25, 33, 41, 49, 57, 65, 73];
redposright = [73, 65, 57, 49, 41, 33, 25, 17, 9, 1, 0]
redlock = 0;
bluelock = 0;
yellowlock = 0;
greenlock = 0;
var wins = 0;

var winning = document.getElementById("winning");
var cpu = false;
var chooseColour = document.getElementById("flex");
var selectPlayer = document.getElementById("selectPlayer");
var load = document.getElementById("load")
var outerboard = document.getElementById("outerboard")
var dice = document.getElementById("dice")
//var text=document.getElementById("text");
var blinks = document.getElementById("blinks");
var redtoken = document.getElementById("redtoken");
var bluetoken = document.getElementById("bluetoken");
var yellowtoken = document.getElementById("yellowtoken");
var greentoken = document.getElementById("greentoken");
//second slide visibility is getting hidden
(function init() {
  chooseColour.style.visibility = "hidden";
  selectPlayer.style.visibility = "visible";

  //document.body.Audio=mysound.play();   
})();
var a = 0;
var redtokenpos = 0;
var yellowtokenpos = 0;
var bluetokenpos = 0;
var greentokenpos = 0;
//second slide visibility is getting hidden
//array to store the turn of players in order of color
count = 0;
var arr = [];
//Initially number player is 0
var noOfPlayer = 0;
//capturing token colors
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var yellow = document.getElementById("yellow");
//capturing first slide
//capturing players
var one = document.getElementById("oneplay");
var two = document.getElementById("twoplay");
var three = document.getElementById("threeplay");
var four = document.getElementById("fourplay");
one.addEventListener('click', () => Player(1));
two.addEventListener('click', () => Player(2));
three.addEventListener('click', () => Player(3));
four.addEventListener('click', () => Player(4));

//declaring ladder and snake position
var ladder = {
  4: 14, 9: 31, 21: 42, 28: 84, 51: 67, 72: 91, 80: 99
}
var snake = {
  17: 7, 54: 34, 62: 19, 64: 60, 87: 36, 93: 73, 95: 75, 98: 79
}
console.log(ladder.hasOwnProperty(1));
var climb = ladder[1];
console.log(climb);

function Player(number) {

  if (number == 1) {

    noOfPlayer = 2;
    selectPlayer.style.display = "none";
    chooseColour.style.visibility = "visible";
    //console.log(noOfPlayer);
    cpu = true;
    choicePlayer(noOfPlayer)
  }
  else if (number == 2) {
    noOfPlayer = 2;
    selectPlayer.style.display = "none";
    chooseColour.style.visibility = "visible";
    //console.log(noOfPlayer);
    cpu = false;
    choicePlayer(noOfPlayer)
  }
  else if (number == 3) {
    noOfPlayer = 3;
    selectPlayer.style.display = "none";
    chooseColour.style.visibility = "visible";
    cpu = false;
    //console.log(noOfPlayer);
    choicePlayer(noOfPlayer)
  }
  else {
    noOfPlayer = 4;
    selectPlayer.style.display = "none";
    chooseColour.style.visibility = "visible";
    //console.log(noOfPlayer);
    cpu = false;
    choicePlayer(noOfPlayer);
  }
}
var countdice = 0;
var currentplayer = 0;
async function choicePlayer(noOfPlayer) {
  currentplayer = noOfPlayer;
  blinks.innerHTML = "";
  blinks.innerHTML = "Choose Colour";
  console.log(noOfPlayer);
  red.addEventListener('click', function run() {
    count++;
    arr.push(0);
    blinks.style.color = "red";
    blinks.innerHTML = "";
    setTimeout(() => {
      blinks.innerHTML = `player ${count} has choosen red`;
    }, 500);
    console.log(blinks);
    if (count == noOfPlayer) {
      console.log(count);
      blinks.innerHTML = "";
      setTimeout(() => {
        blinks.innerHTML = "";
        chooseColour.style.display = "none";
      }, 1000);
      setTimeout(() => {
        load.style.visibility = "visible";
        load.innerHTML = "Loading..10%"

      }, 1100);
      setTimeout(() => {
        load.style.visibility = "visible";
        load.innerHTML = "Loading..50%"

      }, 1300);
      setTimeout(() => {
        load.style.visibility = "visible";
        load.innerHTML = "Loading..100%";

      }, 1500);
      setTimeout(() => {
        load.innerHTML = ""
        outerboard.style.visibility = "visible";
        countdice = 0;
        dices(arr[countdice], arr, noOfPlayer, countdice);
      }, 1700);
    }
    red.removeEventListener('click', run);
    console.log(arr);
  });
  blue.addEventListener('click', function run() {
    count++;
    console.log(count);
    arr.push(1);
    blinks.style.color = "blue";
    blinks.innerHTML = "";
    setTimeout(() => {
      blinks.innerHTML = `player ${count} has choosen blue`;
    }, 500);
    if (count == noOfPlayer) {
      setTimeout(() => {
        blinks.innerHTML = "";
        chooseColour.style.display = "none";
      }, 1000);
      setTimeout(() => {
        load.style.visibility = "visible";
        load.innerHTML = "Loading..10%"

      }, 1100);
      setTimeout(() => {
        load.style.visibility = "visible";
        load.innerHTML = "Loading..50%"

      }, 1300);
      setTimeout(() => {
        load.style.visibility = "visible";
        load.innerHTML = "Loading..100%"

      }, 1500);
      setTimeout(() => {
        load.innerHTML = "";
        outerboard.style.visibility = "visible";
        countdice = 0;
        dices(arr[countdice], arr, noOfPlayer, countdice);

      }, 1600);
    }
    blue.removeEventListener('click', run);
    console.log(arr);
  });
  yellow.addEventListener('click', function run() {
    count++;
    console.log(count);
    arr.push(2);
    blinks.style.color = "yellow";
    blinks.innerHTML = "";
    setTimeout(() => {
      blinks.innerHTML = `player ${count} has choosen yellow`;
    }, 500);
    yellow.removeEventListener('click', run);
    if (count == noOfPlayer) {
      setTimeout(() => {
        blinks.innerHTML = "";
        chooseColour.style.display = "none";
      }, 1000);
      setTimeout(() => {
        load.style.visibility = "visible";
        load.innerHTML = "Loading..10%"

      }, 1100);
      setTimeout(() => {
        load.style.visibility = "visible";
        load.innerHTML = "Loading..50%"

      }, 1300);
      setTimeout(() => {
        load.style.visibility = "visible";
        load.innerHTML = "Loading..100%"

      }, 1500);
      setTimeout(() => {
        load.innerHTML = "";
        countdice = 0;
        outerboard.style.visibility = "visible";
        dices(arr[countdice], arr, noOfPlayer, countdice);
      }, 1600);
    }
    console.log(arr);
  });
  green.addEventListener('click', function run() {
    count++;
    console.log(count);
    arr.push(3);
    blinks.style.color = "green";
    blinks.innerHTML = "";
    setTimeout(() => {
      blinks.innerHTML = `player ${count} has choosen green`;
    }, 500);
    green.removeEventListener('click', run);
    if (count == noOfPlayer) {
      setTimeout(() => {
        chooseColour.style.display = "none";
      }, 1000);
      setTimeout(() => {
        load.style.visibility = "visible";
        load.innerHTML = "Loading..10%"

      }, 1100);
      setTimeout(() => {
        load.style.visibility = "visible";
        load.innerHTML = "Loading..50%"

      }, 1300);
      setTimeout(() => {
        load.style.visibility = "visible";
        load.innerHTML = "Loading..100%"

      }, 1500);
      setTimeout(() => {
        load.innerHTML = "";
        blinks.innerHTML = "";
        countdice = 0;
        outerboard.style.visibility = "visible";
        dices(arr[countdice], arr, noOfPlayer, countdice);
      }, 1600);
    }
    console.log(arr);
  });
}
//dices will appear one by one
async function dices(a, arr, noOfPlayer, countdice) {
  //decide whose turn it is a=0 for 1st player i.e arr[0]
  console.log(noOfPlayer);
  console.log(arr);
  if (a == 0) {
    //change the dice to colour choosen by first player
    colorChanger(dice, 0);
    dice.style.cursor = "pointer"
    //add click button to dice
    dice.addEventListener('click', async function Play() {
      //once die is rolled immediately it is stopped
      dice.removeEventListener("click", Play);
      setTimeout(() => {
        dice.innerHTML = "1"
      }, 100);
      setTimeout(() => {
        dice.innerHTML = "2"
      }, 200);
      setTimeout(() => {
        dice.innerHTML = "3"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "4"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "5"
      }, 500);
      setTimeout(() => {
        dice.innerHTML = "6"
      }, 600);
      setTimeout(() => {
        dice.innerHTML = `${score}`
        if (score != 1 && redlock == 0) {
          countdice = (countdice + 1) % noOfPlayer;
        }
        else {
          redlock = 1;
          redtokenpos = redtokenpos + score;
          if (redtokenpos <= 100) {
            console.log(`red is at ${redtokenpos}`);
            let bottoms = Math.floor(redtokenpos / 10);
            if (ladder.hasOwnProperty(redtokenpos)) {
              var bottomladder = Math.floor(ladder[redtokenpos] / 10);
              var leftladder = ladder[redtokenpos] % 10;
            }
            if (snake.hasOwnProperty(redtokenpos)) {
              var bottomsnake = Math.floor(snake[redtokenpos] / 10);
              var leftsnake = snake[redtokenpos] % 10;
              //left side for 10;
              if (leftsnake == 0) leftsnake = 10;
            }
            let lefts = redtokenpos % 10;
            if (lefts == 0) lefts = 10;
            setTimeout(() => {
              if (bottoms % 2 == 0) {
                if (lefts == 10) {
                  redtoken.style.left = `${redposright[lefts]}vmin`;
                  redtoken.style.bottom = `${redgreenposbottom[bottoms - 1]}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(redtokenpos)) {
                      redtokenpos = ladder[redtokenpos];
                      redtoken.style.left = `${redposright[leftladder - 1]}vmin`;
                      redtoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                    }
                  }, 600);

                }
                else {
                  redtoken.style.left = `${redposleft[lefts]}vmin`;
                  redtoken.style.bottom = `${redgreenposbottom[bottoms]}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(redtokenpos)) {
                      redtokenpos = ladder[redtokenpos];
                      if (bottomladder % 2 == 0) {
                        redtoken.style.left = `${redposleft[leftladder]}vmin`;
                        redtoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                        console.log("climb ladder");
                      }
                      else {
                        redtoken.style.left = `${redposright[leftladder - 1]}vmin`;
                        redtoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                        console.log("climb ladder");
                      }
                    }
                  }, 600);
                  setTimeout(() => {
                    if (snake.hasOwnProperty(redtokenpos)) {
                      redtokenpos = snake[redtokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          redtoken.style.left = `${redposright[leftsnake]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;

                        }
                        else {
                          redtoken.style.left = `${redposleft[leftsnake]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;
                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          redtoken.style.left = `${redposleft[leftsnake]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;
                        }
                        else {
                          redtoken.style.left = `${redposright[leftsnake - 1]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;
                        }
                      }
                    }
                  }, 600);
                }
              }
              else {
                if (lefts == 10) {
                  redtoken.style.left = `${redposleft[lefts]}vmin`;
                  redtoken.style.bottom = `${redgreenposbottom[bottoms - 1]}vmin`;
                }
                else {
                  redtoken.style.left = `${redposright[lefts - 1]}vmin`;
                  redtoken.style.bottom = `${redgreenposbottom[bottoms]}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(redtokenpos)) {
                      redtokenpos = ladder[redtokenpos];
                      if (bottomladder % 2 == 0) {
                        redtoken.style.left = `${redposleft[leftladder]}vmin`;
                        redtoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                      }
                      else {
                        redtoken.style.left = `${redposright[leftladder - 1]}vmin`;
                        redtoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                      }
                    }
                  }, 600);
                  //new
                  setTimeout(() => {
                    if (snake.hasOwnProperty(redtokenpos)) {
                      redtokenpos = snake[redtokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          redtoken.style.left = `${redposright[leftsnake]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;

                        }
                        else {
                          redtoken.style.left = `${redposleft[leftsnake]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;

                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          redtoken.style.left = `${redposleft[leftsnake]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;
                        }
                        else {
                          redtoken.style.left = `${redposright[leftsnake - 1]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;
                        }
                      }
                    }
                  }, 600); //new                    

                }
              }
              console.log(redposleft[lefts]);

              console.log(redtokenpos);
            }, 200);
          }
          else {
            redtokenpos = redtokenpos - score;
          }
          countdice = (countdice + 1) % noOfPlayer;
          console.log(`no of player is ${noOfPlayer}`)
          console.log(`dice count is  ${countdice}`);
        }
      }, 900);
      //gives the turn to the next player which call dices function and change the colour to that player colour and repeat the same function for the next player
      setTimeout(() => {
        if (redtokenpos == 100) {
          wins = wins + 1;
          setTimeout(() => {
            winning.innerHTML = winning.innerHTML + `\nRed ----> ${wins}\n`
          })
          if (wins == currentplayer - 1) {
            outerboard.style.display = "none";
            dice.style.display = "none";
            winning.style.visibility = "visible";
            setTimeout(() => {
              //winning.innerHTML="GREEN WINS THE GAME";
              winning.style.color = "black";
              winning.style.backgroundColor = "white"

            }, 200);
          }
          else {
            setTimeout(() => {
              arr.splice(arr.indexOf(0), 1);
              countdice = countdice - 1;
              noOfPlayer = noOfPlayer - 1;
              console.log(`no of player is ${noOfPlayer}`);
              console.log(`dice count is  ${countdice}`);
            }, 100)
          }
        }
        console.log(cpu);
        console.log("I am CPU");
        if (wins != currentplayer - 1) {
          if (cpu == false) {
            if (arr[countdice] == 0) {
              setTimeout(() => {
                dices(0, arr, noOfPlayer, countdice);
                console.log("I happen first");
              }, 200);
            }
            else if (arr[countdice] == 1) {
              setTimeout(() => {
                dices(1, arr, noOfPlayer, countdice);
              }, 200)

            }
            else if (arr[countdice] == 2) {
              setTimeout(() => {
                dices(2, arr, noOfPlayer, countdice);
              }, 200)
            }
            else if (arr[countdice] == 3) {
              setTimeout(() => {
                dices(3, arr, noOfPlayer, countdice);
              }, 200)
            }
          }
          else {

            console.log("I am CPU");
            if (arr[countdice] == 0) {
              setTimeout(() => {
                dices2(0, arr, noOfPlayer, countdice);
                console.log("I happen first");
              }, 300);
            }
            else if (arr[countdice] == 1) {
              setTimeout(() => {
                dices2(1, arr, noOfPlayer, countdice);

              }, 300)

            }
            else if (arr[countdice] == 2) {
              setTimeout(() => {
                dices2(2, arr, noOfPlayer, countdice);
              }, 300)
            }
            else if (arr[countdice] == 3) {
              setTimeout(() => {
                dices2(3, arr, noOfPlayer, countdice);
              }, 300)
            }
          }
        }
      }, 1500);
      let score = Math.trunc(1 + 6 * Math.random());
      return new Promise(resolve => setTimeout(resolve, 1500));
    }
    );
  }
  else if (a == 1) {
    colorChanger(dice, 1);
    dice.style.cursor = "pointer"
    dice.addEventListener('click', async function Play() {
      dice.removeEventListener("click", Play);
      setTimeout(() => {
        dice.innerHTML = "1"
      }, 100);
      setTimeout(() => {
        dice.innerHTML = "2"
      }, 200);
      setTimeout(() => {
        dice.innerHTML = "3"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "4"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "5"
      }, 500);
      setTimeout(() => {
        dice.innerHTML = "6"
      }, 600);
      setTimeout(() => {
        dice.innerHTML = `${score}`
        if (score != 1 && bluelock == 0) {
          countdice = (countdice + 1) % noOfPlayer;
        }
        else {
          bluelock = 1;

          bluetokenpos = bluetokenpos + score;
          if (bluetokenpos <= 100) {
            console.log(`blue is at ${bluetokenpos}`);
            let bottoms = Math.floor(bluetokenpos / 10);
            let lefts = bluetokenpos % 10;
            if (ladder.hasOwnProperty(bluetokenpos)) {
              var bottomladder = Math.floor(ladder[bluetokenpos] / 10);
              var leftladder = ladder[bluetokenpos] % 10;
            }
            if (snake.hasOwnProperty(bluetokenpos)) {
              var bottomsnake = Math.floor(snake[bluetokenpos] / 10);
              var leftsnake = snake[bluetokenpos] % 10;
              //left side for 10;
              if (leftsnake == 0) leftsnake = 10;
            }
            if (lefts == 0) lefts = 10;
            setTimeout(() => {
              if (bottoms % 2 == 0) {

                if (lefts == 10) {
                  //for 20,40,60
                  bluetoken.style.left = `${redposright[lefts] + 0.1}vmin`;
                  bluetoken.style.bottom = `${redgreenposbottom[bottoms - 1] - 0.5}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(bluetokenpos)) {
                      bluetokenpos = ladder[bluetokenpos];
                      bluetoken.style.left = `${redposright[leftladder - 1] + 0.1}vmin`;
                      bluetoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.5}vmin`;
                    }
                  }, 600);

                }
                else {
                  bluetoken.style.left = `${redposleft[lefts] + 0.1}vmin`;
                  bluetoken.style.bottom = `${redgreenposbottom[bottoms] - 0.5}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(bluetokenpos)) {
                      bluetokenpos = ladder[bluetokenpos];
                      if (bottomladder % 2 == 0) {
                        bluetoken.style.left = `${redposleft[leftladder] + 0.1}vmin`;
                        bluetoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.5}vmin`;
                        console.log("climb ladder");
                      }
                      else {
                        bluetoken.style.left = `${redposright[leftladder - 1] + 0.1}vmin`;
                        bluetoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.5}vmin`;
                        console.log("climb ladder");
                      }
                    }
                  }, 600);
                  setTimeout(() => {
                    if (snake.hasOwnProperty(bluetokenpos)) {
                      bluetokenpos = snake[bluetokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          bluetoken.style.left = `${redposright[leftsnake] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.5}vmin`;

                        }
                        else {
                          bluetoken.style.left = `${redposleft[leftsnake] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.5}vmin`;
                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          bluetoken.style.left = `${redposleft[leftsnake] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.5}vmin`;
                        }
                        else {
                          bluetoken.style.left = `${redposright[leftsnake - 1] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.5}vmin`;
                        }
                      }
                    }
                  }, 600);
                }
                console.log(redposleft[lefts]);

                console.log(bluetokenpos);
              }
              else {

                if (lefts == 10) {
                  //for 10,30,50
                  bluetoken.style.left = `${redposleft[lefts] + 0.1}vmin`;
                  bluetoken.style.bottom = `${redgreenposbottom[bottoms - 1] - 0.5}vmin`;
                }
                else {
                  bluetoken.style.left = `${redposright[lefts - 1] + 0.1}vmin`;
                  bluetoken.style.bottom = `${redgreenposbottom[bottoms] - 0.5}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(bluetokenpos)) {
                      bluetokenpos = ladder[bluetokenpos];
                      if (bottomladder % 2 == 0) {
                        bluetoken.style.left = `${redposleft[leftladder] + 0.1}vmin`;
                        bluetoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.5}vmin`;
                      }
                      else {
                        bluetoken.style.left = `${redposright[leftladder - 1] + 0.1}vmin`;
                        bluetoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.5}vmin`;
                      }
                    }
                  }, 600);
                  //new
                  setTimeout(() => {
                    if (snake.hasOwnProperty(bluetokenpos)) {
                      bluetokenpos = snake[bluetokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          bluetoken.style.left = `${redposright[leftsnake] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.5}vmin`;

                        }
                        else {
                          bluetoken.style.left = `${redposleft[leftsnake] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.5}vmin`;

                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          bluetoken.style.left = `${redposleft[leftsnake] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.5}vmin`;
                        }
                        else {
                          bluetoken.style.left = `${redposright[leftsnake - 1] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.5}vmin`;
                        }
                      }
                    }
                  }, 600); //new              
                }
              }
            }, 200);
          }
          else {
            bluetokenpos = bluetokenpos - score;
          }
          countdice = (countdice + 1) % noOfPlayer;
          console.log(`no of player is ${noOfPlayer}`)
          console.log(`dice count is  ${countdice}`);
        }
      }, 900);
      //gives the turn to the next player which call dices function and change the colour to that player colour and repeat the same function for the next player
      setTimeout(() => {
        if (bluetokenpos == 100) {
          wins = wins + 1;
          setTimeout(() => {
            winning.innerHTML = winning.innerHTML + `\nBlue ----> ${wins}\n`
          })
          if (wins == currentplayer - 1 || currentplayer == 1) {
            outerboard.style.display = "none";
            dice.style.display = "none";
            winning.style.visibility = "visible";
            setTimeout(() => {
              //winning.innerHTML="GREEN WINS THE GAME";
              winning.style.color = "black";
              winning.style.backgroundColor = "white"

            }, 200);
          }
          else {
            setTimeout(() => {
              arr.splice(arr.indexOf(1), 1);
              countdice = countdice - 1;
              noOfPlayer = noOfPlayer - 1;
              console.log(`no of player is ${noOfPlayer}`);
              console.log(`dice count is  ${countdice}`);
            }, 100)
          }

        }
        if (wins != currentplayer - 1 || currentplayer == 1) {
          if (cpu == false) {
            if (arr[countdice] == 0) {
              setTimeout(() => {
                dices(0, arr, noOfPlayer, countdice);
              }, 200)
            }
            else if (arr[countdice] == 1) {
              setTimeout(() => {
                dices(1, arr, noOfPlayer, countdice);
              }, 200)
            }
            else if (arr[countdice] == 2) {
              setTimeout(() => {
                dices(2, arr, noOfPlayer, countdice);
              }, 200)
            }
            else if (arr[countdice] == 3) {
              setTimeout(() => {
                dices(3, arr, noOfPlayer, countdice);
              }, 200)
            }
          }
          else {
            if (arr[countdice] == 0) {
              setTimeout(() => {
                dices2(0, arr, noOfPlayer, countdice);
              }, 200)
            }
            else if (arr[countdice] == 1) {
              setTimeout(() => {
                dices2(1, arr, noOfPlayer, countdice);
              }, 200)
            }
            else if (arr[countdice] == 2) {
              setTimeout(() => {
                dices2(2, arr, noOfPlayer, countdice);
              }, 200)
            }
            else if (arr[countdice] == 3) {
              setTimeout(() => {
                dices2(3, arr, noOfPlayer, countdice);
              }, 200)
            }
          }
        }
      }, 1500);
      let score = Math.trunc(1 + 6 * Math.random());
      return new Promise(resolve => setTimeout(resolve, 1500));
    }
    );
  }
  else if (a == 2) {
    colorChanger(dice, 2);
    dice.style.cursor = "pointer"
    dice.addEventListener('click', async function Play() {
      dice.removeEventListener("click", Play);
      setTimeout(() => {
        dice.innerHTML = "1"
      }, 100);
      setTimeout(() => {
        dice.innerHTML = "2"
      }, 200);
      setTimeout(() => {
        dice.innerHTML = "3"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "4"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "5"
      }, 500);
      setTimeout(() => {
        dice.innerHTML = "6"
      }, 600);
      setTimeout(() => {
        dice.innerHTML = `${score}`
        if (score != 1 && yellowlock == 0) {
          countdice = (countdice + 1) % noOfPlayer;
        }
        else {
          yellowlock = 1;
          yellowtokenpos = yellowtokenpos + score;
          if (yellowtokenpos <= 100) {
            console.log(`yellow is at ${yellowtokenpos}`);
            let bottoms = Math.floor(yellowtokenpos / 10);
            let lefts = yellowtokenpos % 10;
            if (ladder.hasOwnProperty(yellowtokenpos)) {
              var bottomladder = Math.floor(ladder[yellowtokenpos] / 10);
              var leftladder = ladder[yellowtokenpos] % 10;
              console.log("true");
            }
            if (snake.hasOwnProperty(yellowtokenpos)) {
              var bottomsnake = Math.floor(snake[yellowtokenpos] / 10);
              var leftsnake = snake[yellowtokenpos] % 10;
              //left side for 10;
              if (leftsnake == 0) leftsnake = 10;
            }
            if (lefts == 0) lefts = 10;

            setTimeout(() => {
              //when the place is even multiple of 10
              if (bottoms % 2 == 0) {

                if (lefts == 10) {
                  //for 20,40,60
                  yellowtoken.style.left = `${redposright[lefts] + 0.2}vmin`;
                  yellowtoken.style.bottom = `${redgreenposbottom[bottoms - 1] - 0.2}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(yellowtokenpos)) {
                      yellowtokenpos = ladder[yellowtokenpos];
                      yellowtoken.style.left = `${redposright[leftladder - 1] + 0.2}vmin`;
                      yellowtoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.2}vmin`;
                    }
                  }, 600);

                }
                else {
                  //for 21-29,41-49,61-69 etc
                  yellowtoken.style.left = `${redposleft[lefts] + 0.2}vmin`;
                  yellowtoken.style.bottom = `${redgreenposbottom[bottoms] - 0.2}vmin`;
                  //giving snake and ladder
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(yellowtokenpos)) {
                      yellowtokenpos = ladder[yellowtokenpos];
                      if (bottomladder % 2 == 0) {
                        yellowtoken.style.left = `${redposleft[leftladder] + 0.2}vmin`;
                        yellowtoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.5}vmin`;
                      }
                      else {
                        yellowtoken.style.left = `${redposright[leftladder - 1] + 0.2}vmin`;
                        yellowtoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.2}vmin`;
                      }
                    }
                  }, 600);
                  //snake part for yellow
                  setTimeout(() => {
                    if (snake.hasOwnProperty(yellowtokenpos)) {
                      yellowtokenpos = snake[yellowtokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          yellowtoken.style.left = `${redposright[leftsnake] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.2}vmin`;

                        }
                        else {
                          yellowtoken.style.left = `${redposleft[leftsnake] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.2}vmin`;
                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          yellowtoken.style.left = `${redposleft[leftsnake] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.2}vmin`;
                        }
                        else {
                          yellowtoken.style.left = `${redposright[leftsnake - 1] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.2}vmin`;
                        }
                      }
                    }
                  }, 600);

                }

              }
              //when the place is odd multiple of 10
              else {

                if (lefts == 10) {
                  //for 10,30,50
                  yellowtoken.style.left = `${redposleft[lefts] + 0.2}vmin`;
                  yellowtoken.style.bottom = `${redgreenposbottom[bottoms - 1] - 0.2}vmin`;
                }
                else {
                  yellowtoken.style.left = `${redposright[lefts - 1] + 0.1}vmin`;
                  yellowtoken.style.bottom = `${redgreenposbottom[bottoms] - 0.2}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(yellowtokenpos)) {
                      yellowtokenpos = ladder[yellowtokenpos];
                      if (bottomladder % 2 == 0) {
                        yellowtoken.style.left = `${redposleft[leftladder] + 0.2}vmin`;
                        yellowtoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.2}vmin`;
                      }
                      else {
                        yellowtoken.style.left = `${redposright[leftladder - 1] + 0.2}vmin`;
                        yellowtoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.2}vmin`;
                      }
                    }
                  }, 600);
                  //new
                  setTimeout(() => {
                    if (snake.hasOwnProperty(yellowtokenpos)) {
                      yellowtokenpos = snake[yellowtokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          yellowtoken.style.left = `${redposright[leftsnake] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.2}vmin`;

                        }
                        else {
                          yellowtoken.style.left = `${redposleft[leftsnake] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.2}vmin`;

                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          yellowtoken.style.left = `${redposleft[leftsnake] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.2}vmin`;
                        }
                        else {
                          yellowtoken.style.left = `${redposright[leftsnake - 1] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.2}vmin`;
                        }
                      }
                    }
                  }, 600);

                }
              }
            }, 200);
          }
          else {
            yellowtokenpos = yellowtokenpos - score;
          }
          countdice = (countdice + 1) % noOfPlayer;
          console.log(`no of player is ${noOfPlayer}`)
          console.log(`dice count is  ${countdice}`);
        }
      }, 900);
      setTimeout(() => {
        if (yellowtokenpos == 100) {
          wins = wins + 1;
          setTimeout(() => {
            winning.innerHTML = winning.innerHTML + `\nyellow ----> ${wins}\n`
          })
          if (wins == currentplayer - 1 || currentplayer == 1) {
            outerboard.style.display = "none";
            dice.style.display = "none";
            winning.style.visibility = "visible";
            setTimeout(() => {
              //winning.innerHTML="GREEN WINS THE GAME";
              winning.style.color = "black";
              winning.style.backgroundColor = "white"

            }, 200);
          }
          else {
            setTimeout(() => {
              arr.splice(arr.indexOf(2), 1);
              countdice = countdice - 1;
              noOfPlayer = noOfPlayer - 1;
              console.log(`no of player is ${noOfPlayer}`);
              console.log(`dice count is  ${countdice}`);
            }, 100)
          }

        }
        if (wins != currentplayer - 1 || currentplayer == 1) {
          if (cpu == false) {
            if (arr[countdice] == 0) {
              setTimeout(() => {
                dices(0, arr, noOfPlayer, countdice);
              }, 200)
            }
            else if (arr[countdice] == 1) {
              setTimeout(() => {
                dices(1, arr, noOfPlayer, countdice);
              }, 200)
            }
            else if (arr[countdice] == 2) {
              setTimeout(() => {
                dices(2, arr, noOfPlayer, countdice);
              }, 200)
            }
            else if (arr[countdice] == 3) {
              setTimeout(() => {
                dices(3, arr, noOfPlayer, countdice);
              }, 200)
            }
          }
          else {
            if (arr[countdice] == 0) {
              setTimeout(() => {
                dices2(0, arr, noOfPlayer, countdice);
              }, 300)
            }
            else if (arr[countdice] == 1) {
              setTimeout(() => {
                dices2(1, arr, noOfPlayer, countdice);
              }, 300)
            }
            else if (arr[countdice] == 2) {
              setTimeout(() => {
                dices2(2, arr, noOfPlayer, countdice);
              }, 300)
            }
            else if (arr[countdice] == 3) {
              setTimeout(() => {
                dices2(3, arr, noOfPlayer, countdice);
              }, 300)
            }
          }
        }
      }, 1500);
      let score = Math.trunc(1 + 6 * Math.random());
      return new Promise(resolve => setTimeout(resolve, 1500));
    }
    );
  }
  else if (a == 3) {
    colorChanger(dice, 3);
    dice.style.cursor = "pointer"
    dice.addEventListener('click', async function Play() {
      dice.removeEventListener("click", Play);
      setTimeout(() => {
        dice.innerHTML = "1"
      }, 100);
      setTimeout(() => {
        dice.innerHTML = "2"
      }, 200);
      setTimeout(() => {
        dice.innerHTML = "3"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "4"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "5"
      }, 500);
      setTimeout(() => {
        dice.innerHTML = "6"
      }, 600);
      setTimeout(() => {
        dice.innerHTML = `${score}`
        if (score != 1 && greenlock == 0) {
          console.log(`player who will get chance is ${arr[countdice]}`);
          countdice = (countdice + 1) % noOfPlayer;
          console.log(`player who will get chance is ${arr[countdice]}`);
        }
        else {
          /* bluelock=1 signifies that 1 appears at least once to start the game*/
          greenlock = 1;

          greentokenpos = greentokenpos + score;
          if (greentokenpos <= 100) {
            console.log(`green is at ${greentokenpos}`);
            let bottoms = Math.floor(greentokenpos / 10);
            let lefts = greentokenpos % 10;
            if (ladder.hasOwnProperty(greentokenpos)) {
              var bottomladder = Math.floor(ladder[greentokenpos] / 10);
              var leftladder = ladder[greentokenpos] % 10;
              console.log("true");
            }
            if (snake.hasOwnProperty(greentokenpos)) {
              var bottomsnake = Math.floor(snake[greentokenpos] / 10);
              var leftsnake = snake[greentokenpos] % 10;
              //left side for 10;
              if (leftsnake == 0) leftsnake = 10;
            }
            if (lefts == 0) lefts = 10;
            /*if the token exactly at multiple of 10 i.e lefts =0 then redposleft[0] will shift the token to the leftmost part so change it to rightmost part*/
            setTimeout(() => {
              if (bottoms % 2 == 0) {

                if (lefts == 10) {
                  //for 20,40,60
                  greentoken.style.left = `${redposright[lefts] + 0.3}vmin`;
                  greentoken.style.bottom = `${redgreenposbottom[bottoms - 1]}vmin`;
                  //for 80 ladder to 99
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(greentokenpos)) {
                      greentokenpos = ladder[greentokenpos];
                      greentoken.style.left = `${redposright[leftladder - 1] + 0.3}vmin`;
                      greentoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                    }
                  }, 600);

                }
                else {
                  greentoken.style.left = `${redposleft[lefts] + 0.3}vmin`;
                  greentoken.style.bottom = `${redgreenposbottom[bottoms]}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(greentokenpos)) {
                      greentokenpos = ladder[greentokenpos];
                      if (bottomladder % 2 == 0) {
                        greentoken.style.left = `${redposleft[leftladder] + 0.3}vmin`;
                        greentoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                      }
                      else {
                        greentoken.style.left = `${redposright[leftladder - 1] + 0.3}vmin`;
                        greentoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                      }
                    }
                  }, 600);
                  //new
                  setTimeout(() => {
                    if (snake.hasOwnProperty(greentokenpos)) {
                      greentokenpos = snake[greentokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          greentoken.style.left = `${redposright[leftsnake] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;

                        }
                        else {
                          greentoken.style.left = `${redposleft[leftsnake] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;

                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          greentoken.style.left = `${redposleft[leftsnake] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;
                        }
                        else {
                          greentoken.style.left = `${redposright[leftsnake - 1] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;
                        }
                      }
                    }
                  }, 600);
                }
              }
              else {

                if (lefts == 10) {
                  //for 10,30,50
                  greentoken.style.left = `${redposleft[lefts] + 0.3}vmin`;
                  greentoken.style.bottom = `${redgreenposbottom[bottoms - 1]}vmin`;
                }
                else {
                  greentoken.style.left = `${redposright[lefts - 1] + 0.3}vmin`;
                  greentoken.style.bottom = `${redgreenposbottom[bottoms]}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(greentokenpos)) {
                      greentokenpos = ladder[greentokenpos];
                      if (bottomladder % 2 == 0) {
                        greentoken.style.left = `${redposleft[leftladder] + 0.2}vmin`;
                        greentoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.2}vmin`;
                      }
                      else {
                        greentoken.style.left = `${redposright[leftladder - 1] + 0.2}vmin`;
                        greentoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.2}vmin`;
                      }
                    }
                  }, 600);
                  //new
                  setTimeout(() => {
                    if (snake.hasOwnProperty(greentokenpos)) {
                      greentokenpos = snake[greentokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          greentoken.style.left = `${redposright[leftsnake] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;

                        }
                        else {
                          greentoken.style.left = `${redposleft[leftsnake] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;

                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          greentoken.style.left = `${redposleft[leftsnake] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;
                        }
                        else {
                          greentoken.style.left = `${redposright[leftsnake - 1] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;
                        }
                      }
                    }
                  }, 600);
                }
              }
            }, 200);
          }
          else {
            greentokenpos = greentokenpos - score;
          }
          countdice = (countdice + 1) % noOfPlayer;
          console.log(`no of player is ${noOfPlayer}`)
          console.log(`dice count is  ${countdice}`);
        }
      }, 900);
      setTimeout(() => {
        if (greentokenpos == 100) {
          wins = wins + 1;
          setTimeout(() => {
            winning.innerHTML = winning.innerHTML + `\nGreen ----> ${wins}\n`
          })
          if (wins == currentplayer - 1 || currentplayer == 1) {
            outerboard.style.display = "none";
            dice.style.display = "none";
            winning.style.visibility = "visible";
            setTimeout(() => {
              //winning.innerHTML="GREEN WINS THE GAME";
              winning.style.color = "black";
              winning.style.backgroundColor = "white"

            }, 200);
          }
          else {
            setTimeout(() => {
              arr.splice(arr.indexOf(3), 1);
              countdice = countdice - 1;
              noOfPlayer = noOfPlayer - 1;
              console.log(`no of player is ${noOfPlayer}`);
              console.log(`dice count is  ${countdice}`);
            }, 100)
          }

        }
        if (wins != currentplayer - 1 || currentplayer == 1) {
          if (cpu == false) {
            if (arr[countdice] == 0) {
              setTimeout(() => {
                dices(0, arr, noOfPlayer, countdice);
              }, 200)
            }
            else if (arr[countdice] == 1) {
              setTimeout(() => {
                dices(1, arr, noOfPlayer, countdice);
              }, 200)
            }
            else if (arr[countdice] == 2) {
              setTimeout(() => {
                dices(2, arr, noOfPlayer, countdice);
              }, 200)
            }
            else if (arr[countdice] == 3) {
              setTimeout(() => {
                dices(3, arr, noOfPlayer, countdice);
              }, 200)
            }
          }
          else {
            if (arr[countdice] == 0) {
              setTimeout(() => {
                dices2(0, arr, noOfPlayer, countdice);
              }, 300)
            }
            else if (arr[countdice] == 1) {
              setTimeout(() => {
                dices2(1, arr, noOfPlayer, countdice);
              }, 300)
            }
            else if (arr[countdice] == 2) {
              setTimeout(() => {
                dices2(2, arr, noOfPlayer, countdice);
              }, 300)
            }
            else if (arr[countdice] == 3) {
              setTimeout(() => {
                dices2(3, arr, noOfPlayer, countdice);
              }, 300)
            }
          }
        }
      }, 1500);
      let score = Math.trunc(1 + 6 * Math.random());
      return new Promise(resolve => setTimeout(resolve, 1500));
    }
    );
  }
}
// for cpu
async function dices2(a, arr, noOfPlayer, countdice) {
  //decide whose turn it is a=0 for 1st player i.e arr[0]
  console.log(noOfPlayer);
  console.log(arr);
  if (a == 0) {
    //change the dice to colour choosen by first player
    colorChanger(dice, 0);
    dice.style.cursor = "pointer"
    //add click button to dice
    //once die is rolled immediately it is stopped
    setTimeout(() => {
      setTimeout(() => {
        dice.innerHTML = "1"
      }, 100);
      setTimeout(() => {
        dice.innerHTML = "2"
      }, 200);
      setTimeout(() => {
        dice.innerHTML = "3"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "4"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "5"
      }, 500);
      setTimeout(() => {
        dice.innerHTML = "6"
      }, 600);
      setTimeout(() => {
        dice.innerHTML = `${score}`
        if (score != 1 && redlock == 0) {
          countdice = (countdice + 1) % noOfPlayer;
        }
        else {
          redlock = 1;
          redtokenpos = redtokenpos + score;
          if (redtokenpos <= 100) {
            console.log(`red is at ${redtokenpos}`);
            let bottoms = Math.floor(redtokenpos / 10);
            if (ladder.hasOwnProperty(redtokenpos)) {
              var bottomladder = Math.floor(ladder[redtokenpos] / 10);
              var leftladder = ladder[redtokenpos] % 10;
            }
            if (snake.hasOwnProperty(redtokenpos)) {
              var bottomsnake = Math.floor(snake[redtokenpos] / 10);
              var leftsnake = snake[redtokenpos] % 10;
              //left side for 10;
              if (leftsnake == 0) leftsnake = 10;
            }
            let lefts = redtokenpos % 10;
            if (lefts == 0) lefts = 10;
            setTimeout(() => {
              if (bottoms % 2 == 0) {
                if (lefts == 10) {
                  redtoken.style.left = `${redposright[lefts]}vmin`;
                  redtoken.style.bottom = `${redgreenposbottom[bottoms - 1]}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(redtokenpos)) {
                      redtokenpos = ladder[redtokenpos];
                      redtoken.style.left = `${redposright[leftladder - 1]}vmin`;
                      redtoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                    }
                  }, 600);

                }
                else {
                  redtoken.style.left = `${redposleft[lefts]}vmin`;
                  redtoken.style.bottom = `${redgreenposbottom[bottoms]}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(redtokenpos)) {
                      redtokenpos = ladder[redtokenpos];
                      if (bottomladder % 2 == 0) {
                        redtoken.style.left = `${redposleft[leftladder]}vmin`;
                        redtoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                        console.log("climb ladder");
                      }
                      else {
                        redtoken.style.left = `${redposright[leftladder - 1]}vmin`;
                        redtoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                        console.log("climb ladder");
                      }
                    }
                  }, 600);
                  setTimeout(() => {
                    if (snake.hasOwnProperty(redtokenpos)) {
                      redtokenpos = snake[redtokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          redtoken.style.left = `${redposright[leftsnake]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;

                        }
                        else {
                          redtoken.style.left = `${redposleft[leftsnake]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;
                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          redtoken.style.left = `${redposleft[leftsnake]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;
                        }
                        else {
                          redtoken.style.left = `${redposright[leftsnake - 1]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;
                        }
                      }
                    }
                  }, 600);
                }
              }
              else {
                if (lefts == 10) {
                  redtoken.style.left = `${redposleft[lefts]}vmin`;
                  redtoken.style.bottom = `${redgreenposbottom[bottoms - 1]}vmin`;
                }
                else {
                  redtoken.style.left = `${redposright[lefts - 1]}vmin`;
                  redtoken.style.bottom = `${redgreenposbottom[bottoms]}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(redtokenpos)) {
                      redtokenpos = ladder[redtokenpos];
                      if (bottomladder % 2 == 0) {
                        redtoken.style.left = `${redposleft[leftladder]}vmin`;
                        redtoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                      }
                      else {
                        redtoken.style.left = `${redposright[leftladder - 1]}vmin`;
                        redtoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                      }
                    }
                  }, 600);
                  //new
                  setTimeout(() => {
                    if (snake.hasOwnProperty(redtokenpos)) {
                      redtokenpos = snake[redtokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          redtoken.style.left = `${redposright[leftsnake]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;

                        }
                        else {
                          redtoken.style.left = `${redposleft[leftsnake]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;

                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          redtoken.style.left = `${redposleft[leftsnake]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;
                        }
                        else {
                          redtoken.style.left = `${redposright[leftsnake - 1]}vmin`;
                          redtoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;
                        }
                      }
                    }
                  }, 600); //new                    

                }
              }
              console.log(redposleft[lefts]);

              console.log(redtokenpos);
            }, 200);
          }
          else {
            redtokenpos = redtokenpos - score;
          }
          countdice = (countdice + 1) % noOfPlayer;
          console.log(`no of player is ${noOfPlayer}`)
          console.log(`dice count is  ${countdice}`);
        }
      }, 900);
    }, 100);
    //gives the turn to the next player which call dices function and change the colour to that player colour and repeat the same function for the next player
    setTimeout(() => {
      if (redtokenpos == 100) {
        wins = wins + 1;
        setTimeout(() => {
          winning.innerHTML = winning.innerHTML + `\nRed(CPU)----> ${wins}\n`
        })
        if (wins == currentplayer - 1) {
          outerboard.style.display = "none";
          dice.style.display = "none";
          winning.style.visibility = "visible";
          setTimeout(() => {
            //winning.innerHTML="GREEN WINS THE GAME";
            winning.style.color = "black";
            winning.style.backgroundColor = "white"

          }, 200);
        }
        else {
          setTimeout(() => {
            arr.splice(arr.indexOf(0), 1);
            countdice = countdice - 1;
            noOfPlayer = noOfPlayer - 1;
            console.log(`no of player is ${noOfPlayer}`);
            console.log(`dice count is  ${countdice}`);
          }, 100)
        }
      }
      if (wins != currentplayer - 1) {
        if (arr[countdice] == 0) {
          setTimeout(() => {
            dices(0, arr, noOfPlayer, countdice);
            console.log("I happen first");
          }, 200);
        }
        else if (arr[countdice] == 1) {
          setTimeout(() => {
            dices(1, arr, noOfPlayer, countdice);
          }, 200)

        }
        else if (arr[countdice] == 2) {
          setTimeout(() => {
            dices(2, arr, noOfPlayer, countdice);
          }, 200)
        }
        else if (arr[countdice] == 3) {
          setTimeout(() => {
            dices(3, arr, noOfPlayer, countdice);
          }, 200)
        }
      }
    }, 1500);
    let score = Math.trunc(1 + 6 * Math.random());
    return new Promise(resolve => setTimeout(resolve, 1500));


  }
  else if (a == 1) {
    colorChanger(dice, 1);
    setTimeout(() => {
      dice.style.cursor = "pointer"
      setTimeout(() => {
        dice.innerHTML = "1"
      }, 100);
      setTimeout(() => {
        dice.innerHTML = "2"
      }, 200);
      setTimeout(() => {
        dice.innerHTML = "3"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "4"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "5"
      }, 500);
      setTimeout(() => {
        dice.innerHTML = "6"
      }, 600);
      setTimeout(() => {
        dice.innerHTML = `${score}`
        if (score != 1 && bluelock == 0) {
          countdice = (countdice + 1) % noOfPlayer;
        }
        else {
          bluelock = 1;

          bluetokenpos = bluetokenpos + score;
          if (bluetokenpos <= 100) {
            console.log(`blue is at ${bluetokenpos}`);
            let bottoms = Math.floor(bluetokenpos / 10);
            let lefts = bluetokenpos % 10;
            if (ladder.hasOwnProperty(bluetokenpos)) {
              var bottomladder = Math.floor(ladder[bluetokenpos] / 10);
              var leftladder = ladder[bluetokenpos] % 10;
            }
            if (snake.hasOwnProperty(bluetokenpos)) {
              var bottomsnake = Math.floor(snake[bluetokenpos] / 10);
              var leftsnake = snake[bluetokenpos] % 10;
              //left side for 10;
              if (leftsnake == 0) leftsnake = 10;
            }
            if (lefts == 0) lefts = 10;
            setTimeout(() => {
              if (bottoms % 2 == 0) {

                if (lefts == 10) {
                  //for 20,40,60
                  bluetoken.style.left = `${redposright[lefts] + 0.1}vmin`;
                  bluetoken.style.bottom = `${redgreenposbottom[bottoms - 1] - 0.5}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(bluetokenpos)) {
                      bluetokenpos = ladder[bluetokenpos];
                      bluetoken.style.left = `${redposright[leftladder - 1] + 0.1}vmin`;
                      bluetoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.5}vmin`;
                    }
                  }, 600);

                }
                else {
                  bluetoken.style.left = `${redposleft[lefts] + 0.1}vmin`;
                  bluetoken.style.bottom = `${redgreenposbottom[bottoms] - 0.5}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(bluetokenpos)) {
                      bluetokenpos = ladder[bluetokenpos];
                      if (bottomladder % 2 == 0) {
                        bluetoken.style.left = `${redposleft[leftladder] + 0.1}vmin`;
                        bluetoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.5}vmin`;
                        console.log("climb ladder");
                      }
                      else {
                        bluetoken.style.left = `${redposright[leftladder - 1] + 0.1}vmin`;
                        bluetoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.5}vmin`;
                        console.log("climb ladder");
                      }
                    }
                  }, 600);
                  setTimeout(() => {
                    if (snake.hasOwnProperty(bluetokenpos)) {
                      bluetokenpos = snake[bluetokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          bluetoken.style.left = `${redposright[leftsnake] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.5}vmin`;

                        }
                        else {
                          bluetoken.style.left = `${redposleft[leftsnake] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.5}vmin`;
                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          bluetoken.style.left = `${redposleft[leftsnake] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.5}vmin`;
                        }
                        else {
                          bluetoken.style.left = `${redposright[leftsnake - 1] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.5}vmin`;
                        }
                      }
                    }
                  }, 600);
                }
                console.log(redposleft[lefts]);

                console.log(bluetokenpos);
              }
              else {

                if (lefts == 10) {
                  //for 10,30,50
                  bluetoken.style.left = `${redposleft[lefts] + 0.1}vmin`;
                  bluetoken.style.bottom = `${redgreenposbottom[bottoms - 1] - 0.5}vmin`;
                }
                else {
                  bluetoken.style.left = `${redposright[lefts - 1] + 0.1}vmin`;
                  bluetoken.style.bottom = `${redgreenposbottom[bottoms] - 0.5}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(bluetokenpos)) {
                      bluetokenpos = ladder[bluetokenpos];
                      if (bottomladder % 2 == 0) {
                        bluetoken.style.left = `${redposleft[leftladder] + 0.1}vmin`;
                        bluetoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.5}vmin`;
                      }
                      else {
                        bluetoken.style.left = `${redposright[leftladder - 1] + 0.1}vmin`;
                        bluetoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.5}vmin`;
                      }
                    }
                  }, 600);
                  //new
                  setTimeout(() => {
                    if (snake.hasOwnProperty(bluetokenpos)) {
                      bluetokenpos = snake[bluetokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          bluetoken.style.left = `${redposright[leftsnake] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.5}vmin`;

                        }
                        else {
                          bluetoken.style.left = `${redposleft[leftsnake] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.5}vmin`;

                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          bluetoken.style.left = `${redposleft[leftsnake] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.5}vmin`;
                        }
                        else {
                          bluetoken.style.left = `${redposright[leftsnake - 1] + 0.1}vmin`;
                          bluetoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.5}vmin`;
                        }
                      }
                    }
                  }, 600); //new              
                }
              }
            }, 200);
          }
          else {
            bluetokenpos = bluetokenpos - score;
          }
          countdice = (countdice + 1) % noOfPlayer;
          console.log(`no of player is ${noOfPlayer}`)
          console.log(`dice count is  ${countdice}`);
        }
      }, 900);
    }, 100);
    //gives the turn to the next player which call dices function and change the colour to that player colour and repeat the same function for the next player
    setTimeout(() => {
      if (bluetokenpos == 100) {
        wins = wins + 1;
        setTimeout(() => {
          winning.innerHTML = winning.innerHTML + `\nBlue(CPU)----> ${wins}\n`
        })
        if (wins == currentplayer - 1 || currentplayer == 1) {
          outerboard.style.display = "none";
          dice.style.display = "none";
          winning.style.visibility = "visible";
          setTimeout(() => {
            //winning.innerHTML="GREEN WINS THE GAME";
            winning.style.color = "black";
            winning.style.backgroundColor = "white"

          }, 200);
        }
        else {
          setTimeout(() => {
            arr.splice(arr.indexOf(1), 1);
            countdice = countdice - 1;
            noOfPlayer = noOfPlayer - 1;
            console.log(`no of player is ${noOfPlayer}`);
            console.log(`dice count is  ${countdice}`);
          }, 100)
        }

      }
      if (wins != currentplayer - 1 || currentplayer == 1) {
        if (arr[countdice] == 0) {
          setTimeout(() => {
            dices(0, arr, noOfPlayer, countdice);
          }, 200)
        }
        else if (arr[countdice] == 1) {
          setTimeout(() => {
            dices(1, arr, noOfPlayer, countdice);
          }, 200)
        }
        else if (arr[countdice] == 2) {
          setTimeout(() => {
            dices(2, arr, noOfPlayer, countdice);
          }, 200)
        }
        else if (arr[countdice] == 3) {
          setTimeout(() => {
            dices(3, arr, noOfPlayer, countdice);
          }, 200)
        }
      }
    }, 1500);
    let score = Math.trunc(1 + 6 * Math.random());
    return new Promise(resolve => setTimeout(resolve, 1500));

  }
  else if (a == 2) {
    colorChanger(dice, 2);
    setTimeout(() => {
      dice.style.cursor = "pointer"
      setTimeout(() => {
        dice.innerHTML = "1"
      }, 100);
      setTimeout(() => {
        dice.innerHTML = "2"
      }, 200);
      setTimeout(() => {
        dice.innerHTML = "3"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "4"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "5"
      }, 500);
      setTimeout(() => {
        dice.innerHTML = "6"
      }, 600);
      setTimeout(() => {
        dice.innerHTML = `${score}`
        if (score != 1 && yellowlock == 0) {
          countdice = (countdice + 1) % noOfPlayer;
        }
        else {
          yellowlock = 1;
          yellowtokenpos = yellowtokenpos + score;
          if (yellowtokenpos <= 100) {
            console.log(`yellow is at ${yellowtokenpos}`);
            let bottoms = Math.floor(yellowtokenpos / 10);
            let lefts = yellowtokenpos % 10;
            if (ladder.hasOwnProperty(yellowtokenpos)) {
              var bottomladder = Math.floor(ladder[yellowtokenpos] / 10);
              var leftladder = ladder[yellowtokenpos] % 10;
              console.log("true");
            }
            if (snake.hasOwnProperty(yellowtokenpos)) {
              var bottomsnake = Math.floor(snake[yellowtokenpos] / 10);
              var leftsnake = snake[yellowtokenpos] % 10;
              //left side for 10;
              if (leftsnake == 0) leftsnake = 10;
            }
            if (lefts == 0) lefts = 10;

            setTimeout(() => {
              //when the place is even multiple of 10
              if (bottoms % 2 == 0) {

                if (lefts == 10) {
                  //for 20,40,60
                  yellowtoken.style.left = `${redposright[lefts] + 0.2}vmin`;
                  yellowtoken.style.bottom = `${redgreenposbottom[bottoms - 1] - 0.2}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(yellowtokenpos)) {
                      yellowtokenpos = ladder[yellowtokenpos];
                      yellowtoken.style.left = `${redposright[leftladder - 1] + 0.2}vmin`;
                      yellowtoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.2}vmin`;
                    }
                  }, 600);

                }
                else {
                  //for 21-29,41-49,61-69 etc
                  yellowtoken.style.left = `${redposleft[lefts] + 0.2}vmin`;
                  yellowtoken.style.bottom = `${redgreenposbottom[bottoms] - 0.2}vmin`;
                  //giving snake and ladder
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(yellowtokenpos)) {
                      yellowtokenpos = ladder[yellowtokenpos];
                      if (bottomladder % 2 == 0) {
                        yellowtoken.style.left = `${redposleft[leftladder] + 0.2}vmin`;
                        yellowtoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.5}vmin`;
                      }
                      else {
                        yellowtoken.style.left = `${redposright[leftladder - 1] + 0.2}vmin`;
                        yellowtoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.2}vmin`;
                      }
                    }
                  }, 600);
                  //snake part for yellow
                  setTimeout(() => {
                    if (snake.hasOwnProperty(yellowtokenpos)) {
                      yellowtokenpos = snake[yellowtokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          yellowtoken.style.left = `${redposright[leftsnake] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.2}vmin`;

                        }
                        else {
                          yellowtoken.style.left = `${redposleft[leftsnake] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.2}vmin`;
                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          yellowtoken.style.left = `${redposleft[leftsnake] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.2}vmin`;
                        }
                        else {
                          yellowtoken.style.left = `${redposright[leftsnake - 1] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.2}vmin`;
                        }
                      }
                    }
                  }, 600);

                }

              }
              //when the place is odd multiple of 10
              else {

                if (lefts == 10) {
                  //for 10,30,50
                  yellowtoken.style.left = `${redposleft[lefts] + 0.2}vmin`;
                  yellowtoken.style.bottom = `${redgreenposbottom[bottoms - 1] - 0.2}vmin`;
                }
                else {
                  yellowtoken.style.left = `${redposright[lefts - 1] + 0.1}vmin`;
                  yellowtoken.style.bottom = `${redgreenposbottom[bottoms] - 0.2}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(yellowtokenpos)) {
                      yellowtokenpos = ladder[yellowtokenpos];
                      if (bottomladder % 2 == 0) {
                        yellowtoken.style.left = `${redposleft[leftladder] + 0.2}vmin`;
                        yellowtoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.2}vmin`;
                      }
                      else {
                        yellowtoken.style.left = `${redposright[leftladder - 1] + 0.2}vmin`;
                        yellowtoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.2}vmin`;
                      }
                    }
                  }, 600);
                  //new
                  setTimeout(() => {
                    if (snake.hasOwnProperty(yellowtokenpos)) {
                      yellowtokenpos = snake[yellowtokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          yellowtoken.style.left = `${redposright[leftsnake] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.2}vmin`;

                        }
                        else {
                          yellowtoken.style.left = `${redposleft[leftsnake] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.2}vmin`;

                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          yellowtoken.style.left = `${redposleft[leftsnake] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake - 1] - 0.2}vmin`;
                        }
                        else {
                          yellowtoken.style.left = `${redposright[leftsnake - 1] + 0.2}vmin`;
                          yellowtoken.style.bottom = `${redgreenposbottom[bottomsnake] - 0.2}vmin`;
                        }
                      }
                    }
                  }, 600);

                }
              }
            }, 200);
          }
          else {
            yellowtokenpos = yellowtokenpos - score;
          }
          countdice = (countdice + 1) % noOfPlayer;
          console.log(`no of player is ${noOfPlayer}`)
          console.log(`dice count is  ${countdice}`);
        }
      }, 900);
    }, 100);
    setTimeout(() => {
      if (yellowtokenpos == 100) {
        wins = wins + 1;
        setTimeout(() => {
          winning.innerHTML = winning.innerHTML + `\nyellow(CPU)----> ${wins}\n`
        })
        if (wins == currentplayer - 1 || currentplayer == 1) {
          outerboard.style.display = "none";
          dice.style.display = "none";
          winning.style.visibility = "visible";
          setTimeout(() => {
            //winning.innerHTML="GREEN WINS THE GAME";
            winning.style.color = "black";
            winning.style.backgroundColor = "white"

          }, 200);
        }
        else {
          setTimeout(() => {
            arr.splice(arr.indexOf(2), 1);
            countdice = countdice - 1;
            noOfPlayer = noOfPlayer - 1;
            console.log(`no of player is ${noOfPlayer}`);
            console.log(`dice count is  ${countdice}`);
          }, 100)
        }

      }
      if (wins != currentplayer - 1 || currentplayer == 1) {
        if (arr[countdice] == 0) {
          setTimeout(() => {
            dices(0, arr, noOfPlayer, countdice);
          }, 200)
        }
        else if (arr[countdice] == 1) {
          setTimeout(() => {
            dices(1, arr, noOfPlayer, countdice);
          }, 200)
        }
        else if (arr[countdice] == 2) {
          setTimeout(() => {
            dices(2, arr, noOfPlayer, countdice);
          }, 200)
        }
        else if (arr[countdice] == 3) {
          setTimeout(() => {
            dices(3, arr, noOfPlayer, countdice);
          }, 200)
        }
      }
    }, 1500);
    let score = Math.trunc(1 + 6 * Math.random());
    return new Promise(resolve => setTimeout(resolve, 1500));

  }
  else if (a == 3) {
    colorChanger(dice, 3);
    setTimeout(() => {
      dice.style.cursor = "pointer"
      setTimeout(() => {
        dice.innerHTML = "1"
      }, 100);
      setTimeout(() => {
        dice.innerHTML = "2"
      }, 200);
      setTimeout(() => {
        dice.innerHTML = "3"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "4"
      }, 300);
      setTimeout(() => {
        dice.innerHTML = "5"
      }, 500);
      setTimeout(() => {
        dice.innerHTML = "6"
      }, 600);
      setTimeout(() => {
        dice.innerHTML = `${score}`
        if (score != 1 && greenlock == 0) {
          console.log(`player who will get chance is ${arr[countdice]}`);
          countdice = (countdice + 1) % noOfPlayer;
          console.log(`player who will get chance is ${arr[countdice]}`);
        }
        else {
          /* bluelock=1 signifies that 1 appears at least once to start the game*/
          greenlock = 1;

          greentokenpos = greentokenpos + score;
          if (greentokenpos <= 100) {
            console.log(`green is at ${greentokenpos}`);
            let bottoms = Math.floor(greentokenpos / 10);
            let lefts = greentokenpos % 10;
            if (ladder.hasOwnProperty(greentokenpos)) {
              var bottomladder = Math.floor(ladder[greentokenpos] / 10);
              var leftladder = ladder[greentokenpos] % 10;
              console.log("true");
            }
            if (snake.hasOwnProperty(greentokenpos)) {
              var bottomsnake = Math.floor(snake[greentokenpos] / 10);
              var leftsnake = snake[greentokenpos] % 10;
              //left side for 10;
              if (leftsnake == 0) leftsnake = 10;
            }
            if (lefts == 0) lefts = 10;
            /*if the token exactly at multiple of 10 i.e lefts =0 then redposleft[0] will shift the token to the leftmost part so change it to rightmost part*/
            setTimeout(() => {
              if (bottoms % 2 == 0) {

                if (lefts == 10) {
                  //for 20,40,60
                  greentoken.style.left = `${redposright[lefts] + 0.3}vmin`;
                  greentoken.style.bottom = `${redgreenposbottom[bottoms - 1]}vmin`;
                  //for 80 ladder to 99
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(greentokenpos)) {
                      greentokenpos = ladder[greentokenpos];
                      greentoken.style.left = `${redposright[leftladder - 1] + 0.3}vmin`;
                      greentoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                    }
                  }, 600);

                }
                else {
                  greentoken.style.left = `${redposleft[lefts] + 0.3}vmin`;
                  greentoken.style.bottom = `${redgreenposbottom[bottoms]}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(greentokenpos)) {
                      greentokenpos = ladder[greentokenpos];
                      if (bottomladder % 2 == 0) {
                        greentoken.style.left = `${redposleft[leftladder] + 0.3}vmin`;
                        greentoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                      }
                      else {
                        greentoken.style.left = `${redposright[leftladder - 1] + 0.3}vmin`;
                        greentoken.style.bottom = `${redgreenposbottom[bottomladder]}vmin`;
                      }
                    }
                  }, 600);
                  //new
                  setTimeout(() => {
                    if (snake.hasOwnProperty(greentokenpos)) {
                      greentokenpos = snake[greentokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          greentoken.style.left = `${redposright[leftsnake] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;

                        }
                        else {
                          greentoken.style.left = `${redposleft[leftsnake] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;

                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          greentoken.style.left = `${redposleft[leftsnake] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;
                        }
                        else {
                          greentoken.style.left = `${redposright[leftsnake - 1] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;
                        }
                      }
                    }
                  }, 600);
                }
              }
              else {

                if (lefts == 10) {
                  //for 10,30,50
                  greentoken.style.left = `${redposleft[lefts] + 0.3}vmin`;
                  greentoken.style.bottom = `${redgreenposbottom[bottoms - 1]}vmin`;
                }
                else {
                  greentoken.style.left = `${redposright[lefts - 1] + 0.3}vmin`;
                  greentoken.style.bottom = `${redgreenposbottom[bottoms]}vmin`;
                  setTimeout(() => {
                    if (ladder.hasOwnProperty(greentokenpos)) {
                      greentokenpos = ladder[greentokenpos];
                      if (bottomladder % 2 == 0) {
                        greentoken.style.left = `${redposleft[leftladder] + 0.2}vmin`;
                        greentoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.2}vmin`;
                      }
                      else {
                        greentoken.style.left = `${redposright[leftladder - 1] + 0.2}vmin`;
                        greentoken.style.bottom = `${redgreenposbottom[bottomladder] - 0.2}vmin`;
                      }
                    }
                  }, 600);
                  //new
                  setTimeout(() => {
                    if (snake.hasOwnProperty(greentokenpos)) {
                      greentokenpos = snake[greentokenpos];
                      if (bottomsnake % 2 == 0) {
                        if (leftsnake == 10) {
                          greentoken.style.left = `${redposright[leftsnake] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;

                        }
                        else {
                          greentoken.style.left = `${redposleft[leftsnake] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;

                        }

                      }
                      else {
                        if (leftsnake == 10) {
                          greentoken.style.left = `${redposleft[leftsnake] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake - 1]}vmin`;
                        }
                        else {
                          greentoken.style.left = `${redposright[leftsnake - 1] + 0.3}vmin`;
                          greentoken.style.bottom = `${redgreenposbottom[bottomsnake]}vmin`;
                        }
                      }
                    }
                  }, 600);
                }
              }
            }, 200);
          }
          else {
            greentokenpos = greentokenpos - score;
          }
          countdice = (countdice + 1) % noOfPlayer;
          console.log(`no of player is ${noOfPlayer}`)
          console.log(`dice count is  ${countdice}`);
        }
      }, 900);
    }, 100);
    setTimeout(() => {
      if (greentokenpos == 100) {
        wins = wins + 1;
        setTimeout(() => {
          winning.innerHTML = winning.innerHTML + `\nGreen(CPU)----> ${wins}\n`
        })
        if (wins == currentplayer - 1 || currentplayer == 1) {
          outerboard.style.display = "none";
          dice.style.display = "none";
          winning.style.visibility = "visible";
          setTimeout(() => {
            //winning.innerHTML="GREEN WINS THE GAME";
            winning.style.color = "black";
            winning.style.backgroundColor = "white"

          }, 200);
        }
        else {
          setTimeout(() => {
            arr.splice(arr.indexOf(3), 1);
            countdice = countdice - 1;
            noOfPlayer = noOfPlayer - 1;
            console.log(`no of player is ${noOfPlayer}`);
            console.log(`dice count is  ${countdice}`);
          }, 100)
        }

      }
      if (wins != currentplayer - 1 || currentplayer == 1) {
        if (arr[countdice] == 0) {
          setTimeout(() => {
            dices(0, arr, noOfPlayer, countdice);
          }, 200)
        }
        else if (arr[countdice] == 1) {
          setTimeout(() => {
            dices(1, arr, noOfPlayer, countdice);
          }, 200)
        }
        else if (arr[countdice] == 2) {
          setTimeout(() => {
            dices(2, arr, noOfPlayer, countdice);
          }, 200)
        }
        else if (arr[countdice] == 3) {
          setTimeout(() => {
            dices(3, arr, noOfPlayer, countdice);
          }, 200)
        }
      }
    }, 1500);
    let score = Math.trunc(1 + 6 * Math.random());
    return new Promise(resolve => setTimeout(resolve, 1500));

  }
}
function colorChanger(dice, num) {
  if (num == 0) {
    setTimeout(() => {
      dice.style.visibility = "visible";
      dice.style.backgroundColor = "red";
      dice.style.color = "black";
    }, 100);
  }
  else if (num == 1) {
    setTimeout(() => {
      dice.style.visibility = "visible";
      dice.style.backgroundColor = "blue";
      dice.style.color = "black";
    }, 100);
  }
  else if (num == 2) {
    setTimeout(() => {
      dice.style.visibility = "visible";
      dice.style.backgroundColor = "yellow";
      dice.style.color = "black";
    }, 100);
  }
  else if (num == 3) {
    setTimeout(() => {
      dice.style.visibility = "visible";
      dice.style.backgroundColor = "green";
      dice.style.color = "black";
    }, 100);
  }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
