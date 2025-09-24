import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, label, key } = config;

  return (
    <button
      className={props.classname}
      onClick={() => selectNextBackground({ background })}
      data-testid={key}
    >
      {label}
    </button>
  );
};

export default ColourSelector;


