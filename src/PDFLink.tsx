import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faFile } from "@fortawesome/free-solid-svg-icons";

import PdfDocument from "./PdfDocument";
import TestDocument from "./TestDocument";

const PDFLink: React.FC = () => {

  const { useState } = React;

  const [error, setError] = useState(false);
  const [requesting, setRequesting] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [plusData, setPlusData] = useState<Array<Number>>([])
  const [minusData, setMinusData] = useState<Array<Number>>([])
  const [multiplicationData, setMultiplicationData] = useState<Array<Number>>([])
  const [plusFormulaData, setPlusFormulaData] = useState<Array<String>>([])
  const [minusFormulaData, setMinusFormulaData] = useState<Array<String>>([])
  const [multiplicationFormulaData, setMultiplicationFormulaData] = useState<Array<String>>([])
  const [checkNum, setCheckNum] = useState(false)
  const [checkFormula, setCheckFormula] = useState(false)
 

  const createNum = () => {
    var plusData = [];
    var minusData = [];
    var multiplicationData = [];
    const min = 10 ;
    const max = 1000 ;
    const multiplicationMin = 2;
    const multiplicationMax = 9;
    for (let i = 0; i < 100; i++) {
        const random_plus_num = Math.floor( Math.random() * (max + 1 - min) ) + min ;
        const random_minus_num = Math.floor( Math.random() * (max + 1 - min) ) + min ;
        const random_multiplication_num = Math.floor( Math.random() * (multiplicationMax + 1 - multiplicationMin) ) + multiplicationMin ;
        plusData.push(random_plus_num)
        minusData.push(random_minus_num)
        multiplicationData.push(random_multiplication_num)
    }
    setPlusData(plusData)
    setMinusData(minusData)
    setMultiplicationData(multiplicationData)

    setCheckNum(true)
  }

  const createFormula = () => {
    // あとでany修正
    var data1:any = [];
    var data2:any = [];
    var data3:any = [];
    for (let i = 0; i < 60; i+=2) {
        const create_plus_formula: string = `${plusData[i]} + ${plusData[i+1]} =`
        const create_multiplication_formula: string = `${multiplicationData[i]} × ${multiplicationData[i+1]} =`
        data1.push(create_plus_formula)
        data3.push(create_multiplication_formula)
    }
    setPlusFormulaData(data1)
    setMultiplicationFormulaData(data3)

    for (let i = 0; i < 60; i+=2) {
        if (minusData[i] > minusData[i+1]) {
            const create_minus_formula: string = `${minusData[i]} - ${minusData[i+1]} =`
            data2.push(create_minus_formula)
        } else {
            const create_minus_formula: string = `${minusData[i+1]} - ${minusData[i]} =`
            data2.push(create_minus_formula)
        }
    }
    setMinusFormulaData(data2)

    setCheckFormula(true)
  }

    return (
    <>
        {checkNum
            ? <p>数字を生成しました!!</p>
            :
            <>
                <p>ランダムな数字を生成する：</p><button type='button' onClick={() => createNum()}>Check button</button>
            </>
        }
        <br />
        {checkFormula
            ? <p>式を生成しました!!</p>
            :
            <>
                <p>ランダムな計算を生成する：</p><button type='button' onClick={() => createFormula()}>Check button</button>
            </>
        }
        <br />
        <br />
        <PdfDocument
            document={
                <TestDocument data1={plusFormulaData} data2={minusFormulaData} data3={multiplicationFormulaData} />
            }
        />
        {/* <p>
        {!requesting && !data && !error && (
            <span className="clickable" onClick={() => fetchData()}>
            - Request this document <FontAwesomeIcon icon={faFile} />
            </span>
        )}
        {requesting && (
            <span>
            <FontAwesomeIcon icon={faSpinner} spin /> retrieving document...
            </span>
        )}
        {!requesting && !error && (
            <PdfDocument
            title="Cost Disclosure Document"
            document={<TestDocument data={data} />}
            />
        )}
        {!requesting && error && (
            <>
            <span>There has been an error. </span>
            {attempts < 3 ? (
                <span className="clickable" onClick={() => fetchData()}>
                Please try again.
                </span>
            ) : (
                <span>Please try again later.</span>
            )}
            </>
        )}
        </p> */}
    </>
  );
};

export default PDFLink;

// function useEffect(arg0: () => () => void, arg1: any[]) {
//     throw new Error("Function not implemented.");
// }
