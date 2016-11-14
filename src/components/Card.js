const React = require('react');
const ReactDOM = require('react-dom');

const Card = React.createClass({

  render: function () {
    return (
      <div className = "box card">{this.props.card.text}</div>
    )
  }
});

module.exports = Card;
