const React = require('react');
const Card = require('./Card');
const AddCardForm = require('./AddCardForm');

const List = React.createClass({
  getInitialState: function () {
    return {
      name: this.props.list.name,
      cards: this.props.list.cards
    };
  },
  render: function () {
    return (
      <div className='box list'>
        <h1>{this.state.name}</h1>
        {
          this.state.cards.map(function (card, i) {
            return <Card key={i} card={card} />;
          })
        }
        <AddCardForm addCard={this.addCard} />
      </div>
    );
  },
  addCard: function (newCard) {
    var newState = {cards: this.state.cards.slice()};
    newState.cards.push(newCard);
    this.setState(newState);
  }
});

module.exports = List;
