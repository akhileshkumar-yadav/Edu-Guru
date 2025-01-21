'use client'
import React, { useState } from 'react';

const ReplaceButtonWithDiv = () => {
  const [isReplaced, setIsReplaced] = useState(false); // State to toggle button and div

  const handleButtonClick = () => {
    setIsReplaced(true); // Replace button with div
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {!isReplaced ? (
        <button
          onClick={handleButtonClick}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Click Me
        </button>
      ) : (
        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h3>Button Replaced!</h3>
          <p>
            This is the content that replaces the button. You can customize this as needed.
          </p>
        </div>
      )}
    </div>
  );
};

export default ReplaceButtonWithDiv;
