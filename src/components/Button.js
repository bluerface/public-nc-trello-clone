const React = require('react');
const Icon = require('./Icon');

function Button (props) {
  var color = props.color || 'primary';
  var icon = <Icon icon={props.icon} />;
  const children = <span>{props.children}</span>;
  return (
    <a className={`button is-${color}`}>
      {props.icon && icon}
      {props.children && children}
    </a>
  );
}

module.exports = Button;
