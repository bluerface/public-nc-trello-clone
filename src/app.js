const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello world!</h1>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
