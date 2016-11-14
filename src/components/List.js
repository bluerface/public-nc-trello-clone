const React = require('react');
const ReactDOM = require('react-dom');
const Card = require('./Card');

const List = React.createClass({
  render: function () {
    return (
    <div className = 'box list'>
      <h1>{this.props.list.name}</h1>
      {
        this.props.list.cards.map(function (card, i) {
          return <Card key = {i} card = {card}/>
        })
      }

    </div>
    )
  }
});

module.exports = List;
