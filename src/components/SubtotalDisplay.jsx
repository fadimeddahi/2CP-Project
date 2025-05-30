import React from 'react';

const SubtotalDisplay = ({ amount = 0, message = '' }) => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '20px',
        padding: '10px',
        borderBottom: '1px solid #ddd',
        backgroundColor: '#42FACF',
        borderRadius: '30px',
      }}
    >
      {message}
      <span style={{ marginLeft: '10px' }}>{amount} $</span>
    </div>
  );
};

export default SubtotalDisplay;