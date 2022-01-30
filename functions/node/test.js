const com = require("./common-node");
const AI = require("./AI-node");

function getNextMove(map, pace, my=-1) {
  com.init();
  com.window.onload();

  // console.log(com.play.map);
  // console.log(com.play.mans.c1.bl());

  com.play.createMap(map);
  com.play.createMans();

  const nextMove = AI.getNextMove(com.play.map, com.play.mans, pace, my);
  // console.log(nextMove);

  return nextMove;
}

module.exports = { getNextMove };
