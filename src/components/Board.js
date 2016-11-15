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
            return <List
              key={i}
              list={list}
              removeList={() => { this.removeList(i); }}
              addCard={this.addCard.bind(this, i)}
              removeCard={this.removeCard.bind(this, i)}
              editCardText={this.editCardText.bind(this, i)}
              editListName={this.editListName.bind(this, i)}
            />;
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
  },

  removeCard: function (iList, iCard) {
    console.log(iList, iCard);
    var newState = {lists: this.state.lists.slice()};
    var first = newState.lists[iList].cards.slice(0, iCard);
    var second = newState.lists[iList].cards.slice(iCard + 1);
    newState.lists[iList].cards = first.concat(second);

    this.setState(newState, () => {
      console.log(this.state);
    });
  },

  editCardText: function (iList, iCard, cardText) {
    var newState = {lists: this.state.lists.slice()};
    newState.lists[iList].cards[iCard].text = cardText;
    this.setState(newState);
  },

  editListName: function (iList, listName) {
    var newState = {lists: this.state.lists.slice()};
    newState.lists[iList].name = listName;
    this.setState(newState);
  }
});

module.exports = Board;
