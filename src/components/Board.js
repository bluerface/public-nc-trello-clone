const React = require('react');
const boardData = require('./data.js');
const AddListForm = require('./AddListForm');
const List = require('./List');

const Board = React.createClass({
  getInitialState: function () {
    return {
      name: boardData.name,
      lists: boardData.lists
    };
  },
  render: function () {
    return (
      <div className='board'>
        {this.state.lists.map(function (list, i) {
          return <List key={i} list={list} />;
        })
        }

        <AddListForm addList={this.addList} />
      </div>
    );
  },
  addList: function (newList) {
    var newState = {lists: this.state.lists.slice()};
    newState.lists.push(newList);
    this.setState(newState);
  }
});

module.exports = Board;
