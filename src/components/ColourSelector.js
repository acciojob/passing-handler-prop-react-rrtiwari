import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
  const { label, classname, background } = config;

  return (
    <button 
      className={classname} 
      onClick={() => selectNextBackground({ background })}>
      {label}
    </button>
  )
}
export default ColourSelector;

