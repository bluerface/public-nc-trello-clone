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
        <form onSubmit={this.handleSubmit}>
          <h1> Move Card </h1>
          <p>Move to List:</p>
          <select className='select' name='targetList' onChange={this.handleChange} value={this.state.targetList}>
            {
              this.props.lists.map((list, i) => {
                return (
                  <option key={i} value={i}>
                    {list.name}
                  </option>
                );
              })
            }
          </select>
          <p> Move to position </p>
          <select className='select' name='targetPosition' onChange={this.handleChange} value={this.state.targetPosition}>
            {
              this.props.lists[this.state.targetList].cards.concat(['']).map((_, i) => {
                return (
                  <option key={i} value={i}>
                    {i}
                  </option>
                );
              })
            }
          </select>
          <br />
          <button type='submit' className='button is-success'>Save</button>
        </form>
      </div>
    );
  },
  handleClickOutside: function () {
    this.props.toggleMenu();
  },
  handleChange: function (event) {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.toggleMenu();
    this.props.moveCard(this.props.listIndex, this.props.cardIndex, +this.state.targetList, +this.state.targetPosition);
  }
});

module.exports = enhanceWithClickOutside(MoveMenu);
