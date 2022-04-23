import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
    let [calc, setCalc] = useState("");
    let [result, setResult] = useState("");

    const ops = ['/', '*', '+', '-', '%', '.'];

    const evaluation = (value) => {
      if(eval(calc + value).toString() === 'Infinity'){
        setResult("Can't divide by 0.");
      }
      else if (eval(calc + value).toString() === 'NaN'){
        setResult("Can't find modulo as can't divide by 0.");
      }
      else{
        setResult(eval(calc + value).toString());
      }
    }

    const updateCalc = value => {
      if(ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))){
        return;
      }

      
      if (!ops.includes(value)){
        evaluation(value);
      }

      setCalc(calc + value);
  
    }

    const calculate = () => {
      setCalc('');
      evaluation();
    }

    const clearAll = () => {
      setCalc('');
      setResult('')
    }

    return (
      <div>
        <div className="display-space gray">
          {result ? <span className="result">{result}</span> : ''}
          {calc || "0"}
        </div>

        <div className="calc-space">
          <div className="white-grid">
            <button onClick={clearAll } className="grid-item grid-item-column-1 grid-item-row-1" >AC</button>
            <button onClick={ () => updateCalc('+/-')} className="grid-item grid-item-column-2 grid-item-row-1">+/-</button>
            <button onClick={ () => updateCalc('%')} className="grid-item grid-item-column-3 grid-item-row-1">%</button>
            <button onClick={ () => updateCalc('7')} className="grid-item grid-item-column-1 grid-item-row-2">7</button>
            <button onClick={ () => updateCalc('8')} className="grid-item grid-item-column-2 grid-item-row-2">8</button>
            <button onClick={ () => updateCalc('9')} className="grid-item grid-item-column-3 grid-item-row-2">9</button>
            <button onClick={ () => updateCalc('4')} className="grid-item grid-item-column-1 grid-item-row-3">4</button>
            <button onClick={ () => updateCalc('5')} className="grid-item grid-item-column-2 grid-item-row-3">5</button>
            <button onClick={ () => updateCalc('6')} className="grid-item grid-item-column-3 grid-item-row-3">6</button>
            <button onClick={ () => updateCalc('3')} className="grid-item grid-item-column-1 grid-item-row-4">3</button>
            <button onClick={ () => updateCalc('2')} className="grid-item grid-item-column-2 grid-item-row-4">2</button>
            <button onClick={ () => updateCalc('1')} className="grid-item grid-item-column-3 grid-item-row-4">1</button>
            <button onClick={ () => updateCalc('0')}className="grid-item grid-special-1 grid-item-row-5">0</button>
            <button onClick={ () => updateCalc('.')} className="grid-item grid-item-column-3 grid-item-row-5">.</button>
          </div>
          <div className="orange-flex">
              <div className="orange-flex-item" onClick={ () => updateCalc('+')}>+</div>
              <div className="orange-flex-item" onClick={ () => updateCalc('*')}>*</div>
              <div className="orange-flex-item" onClick={ () => updateCalc('-')}>-</div>
              <div className="orange-flex-item" onClick={ () => updateCalc('/')} >/</div>
              <div className="orange-flex-item" onClick={ calculate }>=</div>
          </div>
        </div>
      </div>
    );

}

export default Calculator;
