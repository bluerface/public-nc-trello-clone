const React = require('react');
const ReactDOM = require('react-dom');
const EditCardForm = require('./EditCardForm')


const Card = React.createClass({
  getInitialState: function () {
    return {
      isEdit: false
    }
  },
  toggleEditCard: function () {
    this.setState({
      isEdit:!this.state.isEdit
    }, () => {
      console.log(this.state);
    })
  },
  render: function () {
    if (this.state.isEdit) {
      return (
        <div className='box card'>
          <EditCardForm
            cardText={this.props.card.text}
            toggleEditCard={this.toggleEditCard}
            editCardText={this.props.editCardText}
          />
        </div>
      )
    }
    return (
      <div className = "box card">
        {this.props.card.text}
        <a href='#' onClick={this.props.removeCard}><i className='fa fa-close remove-card'> </i></a>
        <a href="#" onClick={this.toggleEditCard}><i className='fa fa-pencil edit-card'></i></a>
      </div>
    )
  }
});

module.exports = Card;
