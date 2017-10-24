import React from 'react';

export const InputGroup = ({ actionText = 'Submit', value, onChange, onClick }) => (
  <div
    className='input-group'
    style={ styles.inputGroupStyle }
  >
    <input
      style={ styles.inputStyle }
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder='Enter task name'
      autoFocus
    />
    <div
      className={`button ${value==='' ? 'disabled' : ''}`}
      style={styles.buttonStyle}
      onClick={ value==='' ? null : onClick }>{actionText}
    </div>
  </div>
);

const styles = {
  inputGroupStyle: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: '10px',
    marginBottom: '15px',
    border: '2px solid #78da9f'
  },

  inputStyle: {
    width: '90%'
  },

  buttonStyle: {
    height: '34px',
    backgroundColor: '#78da9f',
    padding: '5px 10px',
    lineHeight: '25px',
    textAlign: 'center',
    borderRadius: '3px',
    color: '#fff'
  }
}