import React from 'react';

export const Button = ({ text, divStyle = {}, onClick, disabled = false }) => (
  <div
    className={ `button ${disabled?'disabled':''}` }
    style={{ ...styles.buttonStyle, ...divStyle }}
    onClick={ disabled ? null : onClick }
  >
    { text }
  </div>
);

const styles = {
  buttonStyle: {
    display:'inline-block',
    padding: '8px 15px',
    borderRadius: '5px'
  }
};