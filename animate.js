/**
 *  handleShipAnimation moves the ship based on its direction and
 *    keyboard control
 *
 */
function renderTowers(context) {
  var canvas = document.getElementById('canvas');
  handleTowerMovement();
  var top = new Image();  //Get images from file
  var bottom = new Image();
  top.src = 'top.png';
  bottom.src = 'bottom.png';
  context.drawImage(top, TOWER1.x, 0, TOWER1.width, TOWER1.height);  //Render top tower 1
  context.drawImage(bottom, TOWER1.x, TOWER1.height + 100, TOWER1.width, GAME.canvas.height - (TOWER1.height+100)); //Render bottom tower 1
  context.drawImage(top, TOWER2.x, 0, TOWER2.width, TOWER2.height); //Render top tower 2
  context.drawImage(bottom, TOWER2.x, TOWER2.height + 100, TOWER2.width, GAME.canvas.height - (TOWER2.height+100));//Render bottom tower 2
//  context.drawImage(top, TOWER3.x, 0, TOWER3.width, TOWER3.height);  //Render top tower 3
//  context.drawImage(bottom, TOWER3.x, TOWER3.height + 100, TOWER3.width, GAME.canvas.height - (TOWER3.height + 100));//Render bottom tower 3
}
function InitializeTowers(){
  TOWER1.x = GAME.canvas.width;  //Give initial x positions, evenly spaced across canvas, 1 canvas distance away from main canvas
  TOWER2.x = 4.0/3 * GAME.canvas.width + TOWER1.width/3.0;
  TOWER3.x = 5.0/3 * GAME.canvas.width + TOWER1.width/3.0 +TOWER2.width/3.0;
  TOWER1.height = Math.random() * (GAME.canvas.height-100);//give a random spacing for each tower
  TOWER2.height = Math.random() * (GAME.canvas.height-100);
  //TOWER3.height = Math.random() * (GAME.canvas.height-100);
}
function handleTowerMovement() {
  if (TOWER1.x < -1 * TOWER1.width){  //If towers go off of the screen, wrap around and give new random hole position
    TOWER1.x = GAME.canvas.width;
    TOWER1.height = Math.random() * (GAME.canvas.height-100);
  };
  if (TOWER2.x < -1 * TOWER2.width){
    TOWER2.x = GAME.canvas.width;
    TOWER2.height = Math.random() * (GAME.canvas.height-100);
  };
  //if (TOWER3.x < -1 * TOWER3.width){
  //  TOWER3.x = GAME.canvas.width;
  //  TOWER3.height = Math.random() * (GAME.canvas.height-100);
  };
  TOWER1.x -= 2;//Move towers
  TOWER2.x -= 2;
//  TOWER3.x -= 2;
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');

  if (GAME.started) {

    // 1 - Reposition the objects
    //handleAirplaneMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    //RenderAirplane(context);
    renderTowers(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
