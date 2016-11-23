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
      <div className='our-list'>
      {this.state.isEdit &&
        <h1 className='list-name'>
            <EditListForm
              listName={this.props.list.name}
              editListName={this.props.editListName}
              toggleEditName={this.toggleEditName}
            />
        </h1>
      }
        {!this.state.isEdit && <h1 className='list-name' onClick={this.toggleEditName}><span>{this.props.list.name}</span></h1>}

        <a onClick={this.props.removeList}><i className='fa fa-close remove-list'></i></a>

        {
          this.props.list.cards.map((card, i) => {
            return (
              <Card
                key={i}
                card={card}
                removeCard={this.props.removeCard.bind(this, i)}
                editCardText={this.props.editCardText.bind(this, i)}
                lists={this.props.lists}
                cards={this.props.list.cards}
                listIndex={this.props.listIndex}
                cardIndex={i}
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
