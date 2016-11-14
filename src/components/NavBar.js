const React = require('react');
const Button = require('./Button');

const NavBar = React.createClass({
  render: function () {
    return (
      <nav className='nav our-nav'>
        <div className='nav-left'>
          <div className='nav-item'>
            <Button icon='trello'> Boards</Button>
          </div>
        </div>

        <div className='nav-center'>

        </div>

        <div className='nav-right'>
          <div className='nav-item'>
            <Button icon='info-circle' />
          </div>
          <div className='nav-item'>
            <Button icon='bell' />
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
