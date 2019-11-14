import React from 'react';

function Box({ text, bgColor }) {
  return (
    <div style={{padding: '20px', background: bgColor}}>
      {text}
    </div>
  );
}

export default Box;
