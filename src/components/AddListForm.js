const React = require('react');
const ListObject = require('./ListObject');

const AddListForm = React.createClass({
  getInitialState: function () {
    return {
      listName: ''
    };
  },
  render: function () {
    return (
      <div className='our-list'>
        <form onSubmit={this.handleFormSubmit}>
          <input type='text' placeholder='Add a list' value={this.state.listName} name='listName' onChange={this.onFieldChange}></input>
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  },
  onFieldChange: function (event) {
    var key = event.target.name;

    var newState = {};
    newState[key] = event.target.value;
    this.setState(newState);
  },
  handleFormSubmit: function (event) {
    event.preventDefault();
    if (this.state.listName === '') return;
    var name = this.state.listName;
    var newList = new ListObject(name);
    this.props.addList(newList);
    this.setState({listName: ''});
  }
});

module.exports = AddListForm;
