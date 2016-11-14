const React = require('react');
const ReactDOM = require('react-dom');

const Card = React.createClass({

  render: function () {
    return (
      <div className = "box card">
        {this.props.card.text}
        <a href='#' onClick={this.props.removeCard}><i className='fa fa-close remove-card'></i> </a>
      </div>
    )
  }
});

module.exports = Card;
