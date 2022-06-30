import React from 'react';
import Calculator from '../Components/Calculator';
import '../Styles/Calculator.css';

const CalcPage = () => (
  <div className="calcPage">
    <h2>Let&apos;s do some Math!</h2>
    <div className="wholeCalc">
      <Calculator />
    </div>
  </div>
);

export default CalcPage;
