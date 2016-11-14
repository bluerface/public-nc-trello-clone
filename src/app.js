const React = require('react');
const ReactDOM = require('react-dom');
const imgUrl = require('./img/logo.png');
const Board = require('./components/Board')
require('./css/main.css');


const App = React.createClass({
  render: function () {
    return (
      <div className = 'wrapper'>
        <div>
          <h1>Trello Board </h1>
        </div>
        <div>
          <Board />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
