const React = require('react');
const ReactDOM = require('react-dom');
const Board = require('./components/Board');
const NavBar = require('./components/NavBar');
require('./css/main.css');

const App = React.createClass({
  render: function () {
    return (
      <div className='wrapper'>
        <NavBar />
        <div>
          <Board />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
