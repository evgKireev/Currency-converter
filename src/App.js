import React from 'react';
import { useRef, useEffect, useState } from 'react';

import Block from './components/Block';

function App() {
  const API_URL = 'https://cdn.cur.su/api/latest.json';
  const rates = useRef({});

  const [fromCurrency, setFromCurrency] = useState('RUB');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        rates.current = data.rates;
        onChangeToPrice(1);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const onChangeFromPrice = (value) => {
    const price = value / rates.current[fromCurrency];
    const res = price * rates.current[toCurrency];
    setToPrice(res.toFixed(3));
    setFromPrice(value);
  };

  const onChangeToPrice = (value) => {
    const res =
      (rates.current[fromCurrency] / rates.current[toCurrency]) * value;
    setFromPrice(res.toFixed(3));
    setToPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className="App">
      <Block
        onChangeCurrency={setFromCurrency}
        currency={fromCurrency}
        value={fromPrice}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        onChangeCurrency={setToCurrency}
        currency={toCurrency}
        value={toPrice}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
}

export default App;
