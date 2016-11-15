const React = require('react');
const CardObject = require('./CardObject');

const AddCardForm = React.createClass({
  getInitialState: function () {
    return {
      cardText: ''
    };
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className='our-card'>
            <textarea
              placeholder='Add card text'
              name='cardText'
              value={this.state.cardText}
              onChange={this.onFieldChange}
              onKeyPress={this.handleKeyPress}
              >
            </textarea> <br />
          </div>
          <button className='button is-success'>Add</button>
        </form>
      </div>
    );
  },

  onFieldChange: function (e) {
    var key = e.target.name;
    var newState = {};
    newState[key] = e.target.value;
    this.setState(newState);
  },

  handleFormSubmit: function (event) {
    event && event.preventDefault();
    if (this.state.cardText === '') return;
    var text = this.state.cardText;
    var card = new CardObject(text);
    this.props.addCard(card);
    this.setState({cardText: ''});
  },

  handleKeyPress: function (e) {
    if(e.which === 13) {
      this.handleFormSubmit();
    }
  }
});

module.exports = AddCardForm;
