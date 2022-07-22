import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";


const CounterContainer = () => {
  const handleConfirm = () => {
   
  };

  const [state, setState] = useState(false);

  const counters = [
    {
      onConfirm: React.useCallback(handleConfirm, []),
      maxQuantity: 10,
    },
    {
      onConfirm: handleConfirm,
      maxQuantity: 15,
    },
    {
      onConfirm: React.useCallback(handleConfirm, []),
      maxQuantity: 3,
    },
  ];
  return (
    <>
      {counters.map((counter, index) => {
        return (
          <ItemCount
            maxQuantity={counter.maxQuantity}
            onConfirm={counter.onConfirm}
            id={index}
            key={index}
          />
        );
      })}
      <button onClick={() => setState(!state)}>Change state</button>
      <h2>El estado está en: {state.toString()}</h2>
    </>
  );
};

export default CounterContainer;
