import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {

  render() {
    return (
      <div>
        <div className="display-space gray">0</div>
        <div className="calc-space">
          <div className="white-grid">
            <div className="grid-item grid-item-column-1 grid-item-row-1">AC</div>
            <div className="grid-item grid-item-column-2 grid-item-row-1">+/-</div>
            <div className="grid-item grid-item-column-3 grid-item-row-1">%</div>
            <div className="grid-item grid-item-column-1 grid-item-row-2">7</div>
            <div className="grid-item grid-item-column-2 grid-item-row-2">8</div>
            <div className="grid-item grid-item-column-3 grid-item-row-2">9</div>
            <div className="grid-item grid-item-column-1 grid-item-row-3">4</div>
            <div className="grid-item grid-item-column-2 grid-item-row-3">5</div>
            <div className="grid-item grid-item-column-3 grid-item-row-3">6</div>
            <div className="grid-item grid-item-column-1 grid-item-row-4">3</div>
            <div className="grid-item grid-item-column-2 grid-item-row-4">2</div>
            <div className="grid-item grid-item-column-3 grid-item-row-4">1</div>
            <div className="grid-item grid-special-1 grid-item-row-5">0</div>
            <div className="grid-item grid-item-column-3 grid-item-row-5">.</div>


          </div>
          <div className="orange-flex">
              <div className="orange-flex-item">+</div>
              <div className="orange-flex-item">x</div>
              <div className="orange-flex-item">-</div>
              <div className="orange-flex-item">/</div>
              <div className="orange-flex-item">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
