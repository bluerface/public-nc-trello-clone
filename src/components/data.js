const ListObject = require('./ListObject');
const CardObject = require('./CardObject');

const board = {
  name: 'first board',
  lists: []
};

board.lists.push(new ListObject('My first list'));
board.lists.push(new ListObject('My second list'));

board.lists[0].cards.push(new CardObject('Get the shopping'))
board.lists[0].cards.push(new CardObject('Learn to code'))
board.lists[0].cards.push(new CardObject('Water the plants'))

module.exports = board;
