import { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");

  const operations = ["/", "+", "*", "-", "."];

  const inputNum = (e) => {
    let input = e.target.value;

    if (
      (operations.includes(input) && calc === "") ||
      (operations.includes(input) && operations.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + input);

    if (calc.length > 7) setCalc("*ERROR**");
  };

  const clear = () => {
    setCalc("");
  };

  const calculate = () => {
    setCalc(eval(calc).toString().substring(0, 8));
  };

  return (
    <>
      <div className="App">
        <div className="main-container">
          <div className="buttons-container">
            <div className="screen">{calc}</div>
            <div className="numbers-container">
              <span>CASIO FX-83GX</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>UN-SCIENTIFIC CALCULATOR</span>
              <br />
              <button
                className="btn-number-sign"
                onClick={inputNum}
                value={"+"}
              >
                +
              </button>
              <button
                className="btn-number-sign"
                onClick={inputNum}
                value={"/"}
              >
                /
              </button>
              <button
                className="btn-number-sign"
                onClick={inputNum}
                value={"-"}
              >
                -
              </button>
              <button
                className="btn-number-sign"
                onClick={inputNum}
                value={"*"}
              >
                X
              </button>
              <button className="btn-number" onClick={inputNum} value={1}>
                1
              </button>
              <button className="btn-number" onClick={inputNum} value={2}>
                2
              </button>
              <button className="btn-number" onClick={inputNum} value={3}>
                3
              </button>
              <button className="btn-number-sign" onClick={clear} value={"C"}>
                C
              </button>
              <button className="btn-number" onClick={inputNum} value={4}>
                4
              </button>
              <button className="btn-number" onClick={inputNum} value={5}>
                5
              </button>
              <button className="btn-number" onClick={inputNum} value={6}>
                6
              </button>
              <button
                className="btn-number-sign"
                onClick={inputNum}
                value={"%"}
              >
                -/+
              </button>
              <button className="btn-number" onClick={inputNum} value={7}>
                7
              </button>
              <button className="btn-number" onClick={inputNum} value={8}>
                8
              </button>
              <button className="btn-number" onClick={inputNum} value={9}>
                9
              </button>
              <button
                className="btn-number-sign"
                onClick={inputNum}
                value={"."}
              >
                .
              </button>
              <button className="btn-number-large" onClick={inputNum} value={0}>
                0
              </button>
              <button
                className="btn-number-large"
                id="equals"
                onClick={calculate}
                value={"="}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
