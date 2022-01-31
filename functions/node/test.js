const com = require("./common-node");
const AI = require("./AI-node");

function getNextMove(map, pace, my=-1,depth=4) {
  com.init();
  com.window.onload();

  // console.log(com.play.map);
  // console.log(com.play.mans.c1.bl());

  com.play.createMap(map);
  com.play.createMans();

  const nextMove = AI.getNextMove(com.play.map, com.play.mans, pace, my,depth);
  // console.log(nextMove);

  return nextMove;
}

// const testMap = [
//   ["C0", "M0", "X0", "S0", "J0", "S1", "X1", "M1", "C1"],
//   [, , , , , , , ,],
//   [, "P0", , , , , , "P1"],
//   ["Z0", , "Z1", , "Z2", , "Z3", , "Z4"],
//   [, , , , , , , ,],
//   [, , , , , , , ,],
//   ["z0", , "z1", , "z2", , "z3", , "z4"],
//   [, "p0", , , , ,"p1" , ],
//   [, , , , , , , ,],
//   ["c0", "m0", "x0", "s0", "j0", "s1", "x1", "m1", "c1"],
// ];
// const pace = "7767";

// console.log( getNextMove(testMap, pace, -1,5) );

module.exports = { getNextMove };
