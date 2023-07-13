import "../App.css";
interface Probs {
  contentText: string;
  buttonStyle: string;
  buttonColor: string;
  resultText: string;
  resFlag: boolean;
  resultNumber: number;

  UpdateResFlag: (flagStatus: boolean) => void;
  UpdateText: (result: string) => void;
  printResult: (resultVal: number) => void;
}

function NumberButton({
  contentText,
  buttonStyle,
  buttonColor,
  resultText,
  resFlag,
  resultNumber,

  UpdateText,
  printResult,
  UpdateResFlag,
}: Probs) {
  const OperatorCheck = (text: string) => {
    const operatorList = ["+", "-", "×", "÷"];
    return operatorList.includes(text);
  };

  const CalculateResult = (type = "normal") => {
    const tempResult = resultText.replace(/÷/g, `/`);
    const newResult = tempResult.replace(/×/g, `*`);
    const output = parseFloat(eval(newResult));

    if (type == "squared") {
      const finalResult = output * output;
      printResult(finalResult);

      if (!resFlag) {
        UpdateResFlag(true);
      }
    } else if (type == "squareRoot") {
      const finalResult = Math.sqrt(output);
      printResult(finalResult);

      if (!resFlag) {
        UpdateResFlag(true);
      }
    } else {
      printResult(output);
    }
  };
  const DeleteCharacter = () => {
    resultText = resultText.slice(0, -1);
    if (resultText) {
      UpdateText(resultText);
    } else {
      UpdateText("0");
    }
  };
  const ClearCalculations = (flag: boolean) => {
    flag && UpdateResFlag(false);
    UpdateText("0");
    printResult(0);
  };
  function handleClick() {
    if (contentText == "=") {
      try {
        CalculateResult();
        if (!resFlag) {
          UpdateResFlag(true);
        }
      } catch (error) {
        alert("Wrong Math Operation please enter a valid Operation");
      }
    } else if (contentText == "Clear") {
      try {
        ClearCalculations(resFlag);
      } catch (error) {
        console.log(error);
      }
    } else if (contentText == "⌫") {
      try {
        DeleteCharacter();
      } catch (error) {
        console.log(error);
      }
    } else if (contentText == "x²") {
      try {
        CalculateResult("squared");
      } catch (error) {
        alert("Wrong Math Operation please enter a valid Operation");
      }
    } else if (contentText == "√x") {
      try {
        CalculateResult("squareRoot");
      } catch (error) {
        alert("Wrong Math Operation please enter a valid Operation");
      }
    } else if (contentText == "Cont.") {
      resultText = resultNumber.toString();
      UpdateText(resultText);
    } else {
      if (resultText == "0") {
        resultText = contentText;
        UpdateText(resultText);
      } else {
        if (resFlag) {
          if (OperatorCheck(contentText)) {
            if (!Number.isNaN(resultNumber)) {
              resultText = resultNumber.toString() + contentText;
            } else {
              resultText = contentText;
            }
            UpdateText(resultText);
            UpdateResFlag(false);
          } else {
            ClearCalculations(resFlag);
            resultText = contentText;
            UpdateText(resultText);
          }
        } else {
          resultText = resultText + contentText;
          UpdateText(resultText);
        }
      }
    }
  }
  return (
    <button
      className={`btn btn-${buttonColor} border border-dark fs-3 ${buttonStyle}`}
      onClick={handleClick}
    >
      {contentText}
    </button>
  );
}

export default NumberButton;
