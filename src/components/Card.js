const React = require('react');
const EditCardForm = require('./EditCardForm');
const MoveMenu = require('./MoveMenu');

const Card = React.createClass({
  getInitialState: function () {
    return {
      isEdit: false,
      menuOpen: false
    };
  },
  toggleEditCard: function () {
    this.setState({
      isEdit: !this.state.isEdit
    });
  },
  toggleMenu: function () {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  },
  render: function () {
    if (this.state.isEdit) {
      return (
        <div className='our-card'>
          <EditCardForm
            cardText={this.props.card.text}
            toggleEditCard={this.toggleEditCard}
            editCardText={this.props.editCardText}
          />
        </div>
      );
    }
    return (
      <div className={`our-card ${this.state.menuOpen ? 'highlighted' : ''}`}>
        {this.props.card.text}
        <a href='#' onClick={this.props.removeCard}><i className='fa fa-fw fa-close hover-icon'> </i></a>
        <a href="#" onClick={this.toggleEditCard}><i className='fa fa-fw fa-pencil hover-icon'></i></a>
        <a href="#"><i onClick={this.toggleMenu} className='fa fa-fw fa-ellipsis-v hover-icon'></i></a>
        {this.state.menuOpen && <MoveMenu lists={this.props.lists} toggleMenu={this.toggleMenu}/>}
      </div>
    );
  }
});

module.exports = Card;
