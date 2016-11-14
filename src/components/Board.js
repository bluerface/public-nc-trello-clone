const React = require('react');
const boardData = require('./data.js');
const AddListForm = require('./AddListForm');
const List = require('./List');

const Board = React.createClass({
  getInitialState: function () {
    return {
      board: boardData
    };
  },
  render: function () {
    return (
      <div className='board'>
        {this.state.board.lists.map(function (list, i) {
          return <List key={i} list={list} />;
        })
        }

        <AddListForm addList={this.addList} />
      </div>
    );
  },
  addList: function (newList) {
    var newState = Object.assign({}, this.state);
    newState.board.lists.push(newList);
    this.setState(newState);
  }
});

module.exports = Board;
