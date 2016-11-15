const React = require('react');
const enhanceWithClickOutside = require('react-click-outside');

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
        <button type='submit' className='button is-success'>Save</button>
      </form>
    )
  },
  handleClickOutside() {
    this.props.toggleEditCard();
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

module.exports = enhanceWithClickOutside(EditCardForm);
