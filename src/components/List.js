const React = require('react');
const Card = require('./Card');
const AddCardForm = require('./AddCardForm');

const List = React.createClass({
  render: function () {
    return (
      <div className='box list'>
        <a onClick={this.props.removeList}><i className='fa fa-close remove-list'></i></a>
        <h1 className='list-name'>{this.props.list.name}</h1>
        {
          this.props.list.cards.map(function (card, i) {
            return <Card key={i} card={card} />;
          })
        }
        <AddCardForm addCard={this.props.addCard} />
      </div>
    );
  }
});

module.exports = List;
