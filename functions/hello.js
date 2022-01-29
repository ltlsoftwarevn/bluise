const { getNextMove }= require('./node/test');

exports.handler = async function (event, context) {
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({ message: "Hello World" }),
  // };

  let { map, pace } = JSON.parse(event.body);
  map = JSON.parse(map);

  const nextMove = getNextMove(map, pace);
  
  return {
    statusCode: 200,
    body: JSON.stringify({ nextMove: nextMove}),
  };
}
