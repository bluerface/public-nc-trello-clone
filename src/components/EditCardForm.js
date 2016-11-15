const React = require('react');

const EditCardForm = React.createClass({
  getInitialState: function () {
    return {
      cardText: this.props.cardText
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onSubmit}>
        <textarea name='cardText' value={this.state.cardText} onChange={this.onFieldChange}></textarea><br />
        <button type='submit'>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </form>
    )
  },
  onFieldChange: function (e) {
    var key = e.target.name;
    var newState = {};
    newState[key] = e.target.value;
    this.setState(newState);
  },

  handleCancel: function (event) {
    event.preventDefault();
    this.props.toggleEditCard();
  },

  onSubmit: function (event) {
    event.preventDefault();
    this.props.editCardText(this.state.cardText);
    this.props.toggleEditCard();
  }

});

module.exports = EditCardForm;