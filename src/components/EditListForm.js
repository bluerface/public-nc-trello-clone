const React = require('react');

const EditListForm = React.createClass({
  getInitialState: function () {
    return {
      listName: this.props.listName
    };
  },
  render: function () {
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' value={this.state.listName} onChange={this.onFieldChange} name='listName'></input>
      </form>
    );
  },
  onFieldChange: function (e) {
    var key = e.target.name;
    var newState = {};
    newState[key] = e.target.value;
    this.setState(newState);
  },
  onSubmit: function (e) {
    e.preventDefault();
    this.props.editListName(this.state.listName);
    this.props.toggleEditName();
  }
});

module.exports = EditListForm;
