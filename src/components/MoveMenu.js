const React = require('react');
const enhanceWithClickOutside = require('react-click-outside');

const MoveMenu = React.createClass({
  getInitialState: function () {
    return {
      targetList: this.props.listIndex,
      targetPosition: this.props.cardIndex
    };
  },
  render: function () {
    return (
      <div className='our-card move-menu highlighted'>
        <h1> Move Card </h1>
        <p>Move to List:</p>
        <select className='select' name='targetList' onChange={this.handleChange}>
          {
            this.props.lists.map(function (list, i) {
              return (<option key={i} value={i}>{list.name}</option>);
            })
          }
        </select>
        <p> Move to position </p>
        <select className='select' name='targetPosition' onChange={this.handleChange}>
          {
            this.props.cards.map(function (_, i) {
              return (<option key={i} value={i}>{i}</option>);
            })
          }
        </select>
        <br />
        <button type='submit' className='button is-success'>Save</button>
      </div>
    );
  },
  handleClickOutside: function () {
    this.props.toggleMenu();
  },
  handleChange: function (event) {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState, () => {
      console.log(this.state);
    });
  }
});

module.exports = enhanceWithClickOutside(MoveMenu);
