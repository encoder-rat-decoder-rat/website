import React from 'react';
import './TextFilters.css';

const TextFilters = () =>{ 
  return (
    <svg id="filters">
      <defs>
        <filter id="threshold">
          <feColorMatrix in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140" />
        </filter>
      </defs>
    </svg>
  )
}

export default TextFilters;