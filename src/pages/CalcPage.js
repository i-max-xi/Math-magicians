import React from "react";
import Calculator from "../Components/Calculator";
import '../Styles/Calculator.css';

const CalcPage = () => {
  return (
    <div className="calcPage">
        <h2>Let's do some Math!</h2>
      <div className="wholeCalc">
        <Calculator />
      </div>
    </div>
  );
};

export default CalcPage;
