import { useState } from "react";
import "./App.css";
import CalculatorButton from "./components/CalculatorButton";

function App() {
  let [calculationText, SetCalculationText] = useState("");
  let [result, SetResult] = useState(0);
  let [resultFlag, setResultFlag] = useState(false);

  function HandleCalculationText(res: string) {
    SetCalculationText(res);
  }
  function HandleResult(num: number) {
    SetResult(num);
  }
  function HandleResultFlag(flagStatus: boolean) {
    setResultFlag(flagStatus);
  }

  return (
    <>
      <section>
        <div className="bg-light text-center fs-1 fs-bold">
          Standard Calculator
        </div>
        <div className="text-center resultTextStylebg-dark text-white pt-3">
          <p className="bg-success fs-3">{calculationText}</p>
        </div>
        <div className="text-center resultValStyle fs-3 bg-white text-dark pt-2 mx-auto border border-primary mb-4">
          {result}
        </div>
      </section>
      <section className="calculatorBody bg-secondary py-3">
        <div className="text-center mx-auto pb-2">
          <CalculatorButton
            contentText={"Clear"}
            buttonColor="light"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customClearButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
        </div>
        <div className="text-center mx-auto">
          <CalculatorButton
            contentText={"x²"}
            buttonColor="success"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"√x"}
            buttonColor="success"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"Cont."}
            buttonColor="success"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"⌫"}
            buttonColor="danger"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
        </div>
        <div className="text-center mx-auto">
          <CalculatorButton
            contentText={"7"}
            buttonColor="light"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"8"}
            buttonColor="light"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"9"}
            buttonColor="light"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"×"}
            buttonColor="primary"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
        </div>
        <div className="text-center">
          <CalculatorButton
            contentText={"4"}
            buttonColor="light"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"5"}
            buttonColor="light"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"6"}
            buttonColor="light"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"÷"}
            buttonColor="primary"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
        </div>
        <div className="text-center">
          <CalculatorButton
            contentText={"1"}
            buttonColor="light"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"2"}
            buttonColor="light"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"3"}
            buttonColor="light"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"+"}
            buttonColor="primary"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
        </div>
        <div className="text-center">
          <CalculatorButton
            contentText={"."}
            buttonColor="light"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"0"}
            buttonColor="light"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"="}
            buttonColor="info"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
          <CalculatorButton
            contentText={"-"}
            buttonColor="primary"
            resultText={calculationText}
            UpdateText={HandleCalculationText}
            printResult={HandleResult}
            buttonStyle={"customButtonStyle"}
            resFlag={resultFlag}
            UpdateResFlag={HandleResultFlag}
            resultNumber={result}
          />
        </div>
      </section>
    </>
  );
}

export default App;
