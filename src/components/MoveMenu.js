const React = require('react');
const enhanceWithClickOutside = require('react-click-outside');

const MoveMenu = React.createClass({
  render: function () {
    return (
      <div className='our-card move-menu highlighted'>
        <h1> Move Card </h1>
        <select className='select'>
        {
          this.props.lists.map(function (list, i) {
            return (<option key={i} value={list.name}>{list.name}</option>);
          })
        }
        </select>
        <p> Position </p>
        <div className='lightbox'></div>
      </div>
    );
  },
  handleClickOutside: function () {
    this.props.toggleMenu();
  }
});

module.exports = enhanceWithClickOutside(MoveMenu);
