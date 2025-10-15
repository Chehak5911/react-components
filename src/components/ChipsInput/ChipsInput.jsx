import React, { useState } from 'react';
import './chipsInput-styles.css';

function ChipsInput() {
  const [chips, setChips] = useState([]);

  function handleKeyDown(e) {
    let val = e.target.value.trim();
    if (e.key === 'Enter' && val !== '') {
      setChips([...chips, val]);
      e.target.value = '';
    }
  }

  function handleClick(i) {
    setChips(chips.filter((chip, index) => index != i));
  }

  return (
    <div className='main-container'>
      <h2>Chips Input</h2>
      <input
        type="text" 
        placeholder="Type a chip and press tag"
        className="input"
        onKeyDown={handleKeyDown}
      />
      <div className="sub-container">
        {
        chips.length > 0 &&
        chips.map((chip, index) => {
          return (
            <div className="chip-container">
              <span> {chip} </span>
              <button
              className="chip-btn"
              onClick={()=>handleClick(index)}
              >
                X </button>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default ChipsInput;