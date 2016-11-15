const React = require('react');
const Card = require('./Card');
const AddCardForm = require('./AddCardForm');
const EditListForm = require('./EditListForm');

const List = React.createClass({
  getInitialState: function () {
    return {
      isEdit: false
    };
  },
  toggleEditName: function () {
    this.setState({
      isEdit: !this.state.isEdit
    }, function () {
      console.log(this.state);
    });
  },
  render: function () {
    return (
      <div className='box list'>
        {this.state.isEdit &&
          <EditListForm
            listName={this.props.list.name}
            editListName={this.props.editListName}
            toggleEditName={this.toggleEditName}
          />
        }

        <a onClick={this.props.removeList}><i className='fa fa-close remove-list'></i></a>

        {!this.state.isEdit && <h1 className='list-name' onClick={this.toggleEditName}>{this.props.list.name}</h1>}

        {
          this.props.list.cards.map((card, i) => {
            return (
              <Card
                key={i}
                card={card}
                removeCard={this.props.removeCard.bind(this, i)}
                editCardText={this.props.editCardText.bind(this, i)}
              />
            );
          })
        }
        <AddCardForm addCard={this.props.addCard} />
      </div>
    );
  }
});

module.exports = List;
