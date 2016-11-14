const React = require('react');
const styles = {
  margin: 0
};
function Icon (props) {
  return (
    <span className='icon our-icon' style={styles}><i className={`fa fa-${props.icon}`}></i></span>
  );
}

module.exports = Icon;
