const { getNextMove }= require('./node/test');

exports.handler = async function (event, context) {
  let { map, pace, my, depth } = JSON.parse(event.body);
  map = JSON.parse(map);

  const nextMove = getNextMove(map, pace, my, depth);
  
  return {
    statusCode: 200,
    body: JSON.stringify({ nextMove: nextMove}),
  };
}
