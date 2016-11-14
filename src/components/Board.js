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
        {
          this.state.lists.map((list, i) => {
            return <List key={i} list={list} removeList={() => { this.removeList(i); }} addCard={this.addCard.bind(this, i)} />;
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
  },

  removeList: function (i) {
    var oldArray = this.state.lists.slice();
    var first = oldArray.slice(0, i);
    var second = oldArray.slice(i + 1);
    this.setState({
      lists: first.concat(second)
    }, () => {
      console.log(this.state);
    });
  },

  addCard: function (i, newCard) {
    var newState = {lists: this.state.lists.slice()};
    newState.lists[i].cards.push(newCard);
    this.setState(newState);
  }
});

module.exports = Board;
