import { useState } from "react";
import "./App.css";
import NumberButton from "./components/NumberButton";

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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
          <NumberButton
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
