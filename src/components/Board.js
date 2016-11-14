const React = require('react');
const ReactDOM = require('react-dom');
const boardData = require('./data.js');
const AddList = require('./AddList');
const List = require('./List');

const Board = React.createClass({
  getInitialState: function () {
     return {
       board: boardData
     }
  },
  render: function () {
    return (
      <div>
        {this.state.board.lists.map(function (list, i) {
          return <List key = {i} list = {list}/>
        })
        }

        <AddList />
      </div>
    )
  }
});

module.exports = Board;
