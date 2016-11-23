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
              lists={this.state.lists}
              listIndex={i}
              moveCard={this.moveCard}
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
  },

  moveCard: function (listIndex, cardIndex, targetList, targetPosition) {
    // get hold of the card
    let card = this.state.lists[listIndex].cards[cardIndex];
    console.log(card);

    if (listIndex === targetList) {
      let cardArr = this.state.lists[listIndex].cards;
      // remove the card
      let newcardArr = cardArr.slice(0, cardIndex).concat(cardArr.slice(cardIndex + 1));

      // add it back in
      newcardArr = newcardArr.slice(0, targetPosition).concat([card], newcardArr.slice(targetPosition));

      // make a copy of the list object
      let newListObj = Object.assign({}, this.state.lists[listIndex], {cards: newcardArr});

      // set the state
      this.setState({
        lists: this.state.lists.slice(0, listIndex).concat([newListObj], this.state.lists.slice(listIndex + 1))
      });
    }
  }
});

module.exports = Board;
