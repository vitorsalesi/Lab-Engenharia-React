import React, { useState } from "react";
import "./styleCalculadora.css";

function Calculadora() {
  const [displayValue, setDisplayValue] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [selectedOperator, setSelectedOperator] = useState(null);

  const handleDigitClick = (digit) => {
    setDisplayValue((prevValue) => prevValue + digit);
  };

  const handleOperatorClick = (operator) => {
    if (selectedOperator !== null) {
      calculate();
    }

    setSelectedOperator(operator);
    setCurrentValue(parseFloat(displayValue));
    setDisplayValue("");
  };

  const handleEqualClick = () => {
    calculate();
    setSelectedOperator(null);
    setCurrentValue(0);
  };

  const calculate = () => {
    const value = parseFloat(displayValue);

    if (selectedOperator === "+") {
      setDisplayValue((prevValue) => (currentValue + value).toString());
    } else if (selectedOperator === "-") {
      setDisplayValue((prevValue) => (currentValue - value).toString());
    } else if (selectedOperator === "*") {
      setDisplayValue((prevValue) => (currentValue * value).toString());
    } else if (selectedOperator === "/") {
      setDisplayValue((prevValue) => (currentValue / value).toString());
    }
  };

  const handleClearClick = () => {
    setDisplayValue("");
    setSelectedOperator(null);
    setCurrentValue(0);
  };

  const handleToggleSign = () => {
    setDisplayValue((prevValue) => (-parseFloat(prevValue)).toString());
  };

  const handlePercentageClick = () => {
    const value = parseFloat(displayValue);
    setDisplayValue((prevValue) => (value / 100).toString());
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{displayValue || "0"}</div>
        <div className="row">
          <button className="button function-button" onClick={handleClearClick}>
            AC
          </button>
          <button className="button function-button" onClick={handleToggleSign}>
            ±
          </button>
          <button className="button function-button" onClick={handlePercentageClick}>
            %
          </button>
          <button className="button operator-button" onClick={() => handleOperatorClick("/")}>
            ÷
          </button>
        </div>
        <div className="row">
          {[7, 8, 9].map((digit) => (
            <button key={digit} className="button" onClick={() => handleDigitClick(digit)}>
              {digit}
            </button>
          ))}
          <button className="button operator-button" onClick={() => handleOperatorClick("*")}>
            ×
          </button>
        </div>
        <div className="row">
          {[4, 5, 6].map((digit) => (
            <button key={digit} className="button" onClick={() => handleDigitClick(digit)}>
              {digit}
            </button>
          ))}
          <button className="button operator-button" onClick={() => handleOperatorClick("-")}>
            −
          </button>
        </div>
        <div className="row">
          {[1, 2, 3].map((digit) => (
            <button key={digit} className="button" onClick={() => handleDigitClick(digit)}>
              {digit}
            </button>
          ))}
          <button className="button operator-button" onClick={() => handleOperatorClick("+")}>
            +
          </button>
        </div>
        <div className="row">
          <button className="button zero-button" onClick={() => handleDigitClick("0")}>
            0
          </button>
          <button className="button" onClick={() => handleDigitClick(".")}>
            .
          </button>
          <button className="button equals-button" onClick={handleEqualClick}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;

