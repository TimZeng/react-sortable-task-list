import React from 'react';

export const InputGroup = ({ actionText = 'Submit', onChange, onClick, disabled = true }) => (
  <div
    className='input-group'
    style={{...styles.inputGroupStyle, display: `${disabled?'none':'flex'}`}}
  >
    <input style={styles.inputStyle} onChange={onChange} placeholder='Enter task name'/>
    <div className='button' style={styles.buttonStyle} onClick={onClick}>{actionText}</div>
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