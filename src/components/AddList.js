const React = require('react');
const ReactDOM = require('react-dom');

const AddList = React.createClass({

  render: function () {
    return (
      <div className = "box list">
        <button>Add NewList</button>
      </div>
    )
  }
})

module.exports = AddList;
