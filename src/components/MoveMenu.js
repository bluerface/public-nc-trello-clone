const React = require('react');
const enhanceWithClickOutside = require('react-click-outside');

const MoveMenu = React.createClass({
  render: function () {
    return (
      <div className='our-card move-menu highlighted'>
        <h1> Move Card </h1>
        <p>Move to Board:</p>
        <select className='select'>
          {
            this.props.lists.map(function (list, i) {
              return (<option key={i} value={list.name}>{list.name}</option>);
            })
          }
        </select>
        <p> Move to position </p>
        <select className='select'>
          {
            this.props.cards.map(function (_, i) {
              return (<option key={i} value={i}>{i}</option>);
            })
          }
        </select>
        <br />
        <button style={{marginTop: '5px'}} type='submit' className='button is-success'>Save</button>
      </div>
    );
  },
  handleClickOutside: function () {
    this.props.toggleMenu();
  }
});

module.exports = enhanceWithClickOutside(MoveMenu);
