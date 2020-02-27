import React, { useState } from 'react';
import Counter from '../components/Counter';

function CounterPage() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return <Counter counter={counter} increment={increment} />;
}

export default CounterPage;
