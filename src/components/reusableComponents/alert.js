import React from 'react';

export const Alert = ({ alert, onClose }) => {
  if ( !alert.message ) {
    return null;
  }

  return (
    <div
      className='alert'
      style={{
        ...styles.alertStyle,
        ...styles[`${alert.status===200 ? 'successStyle' : 'errorStyle'}`]
      }}>
      <span>{ alert.message }</span>
      <i style={{lineHeight: '21px'}} onClick={onClose} className="button fa fa-times" />
    </div>
  )
};

const styles = {
  alertStyle: {
    position: 'fixed',
    bottom: '25%',
    right: '5%',
    width: '500px',
    maxWidth: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 15px',
    fontSize: '70%',
    borderRadius: '3px',
    zIndex: '2'
  },

  successStyle: {
    backgroundColor: '#f7fffb',
    color: '#84d9a7',
    border: '1px solid #84d9a7'
  },

  errorStyle: {
    backgroundColor: '#fff7f7',
    color: '#d98484',
    border: '1px solid #d98484'
  }
}