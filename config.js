var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};

var SPACE_SHIP = {
  initialized : false,
  bullets : [],
  latest : {
    x : 50,
    y : 50,
    xx : 5,
    yy : 2
  }
};

var pipe =
{
  x : 600,
  y : 0
}
var W = {
  x : 1,
  y : 1
};
 var GENERAL_BIRD = {
  x : 100,
  y : 50,
  radius: 25,
}
var forward = true;
