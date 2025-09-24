import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
  const { background, label, key } = config;

  return (
    <button
      className={config.classname}
      onClick={() => selectNextBackground(background)}
      data-testid={key}
    >
      {label}
    </button>
  );
};

export default ColourSelector;



