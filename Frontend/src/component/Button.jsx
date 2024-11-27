import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ value, id, customstyle, onClick }) {
  return (
    <input
      style={customstyle}
      type='submit'
      value={value}
      onClick={onClick}
    />
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  customstyle: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
