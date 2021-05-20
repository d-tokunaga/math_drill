import * as React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PdfDocument from "./PdfDocument";
import TestDocument from "./TestDocument";
import Home from "./Home";
import '../static/css/content.css';

const Mix: React.FC = () => {

  const { useState } = React;
  const [plusMinState, setPlusMinState] = useState<number>(10);
  const [plusMaxState, setPlusMaxState] = useState<number>(1000);
  const [minusMinState, setMinusMinState] = useState<number>(10);
  const [minusMaxStae, setMinusMaxState] = useState<number>(1000);
  const [multiplicationMinState, setMultiplicationMinState] = useState<number>(2);
  const [multiplicationMaxState, setMultiplicationMaxState] = useState<number>(9);
  const [numDone, setNumDone] = useState(false);
  const [formulaDone, setFormulaDone] = useState(false);
  const [plusData, setPlusData] = useState<Array<Number>>([])
  const [minusData, setMinusData] = useState<Array<Number>>([])
  const [multiplicationData, setMultiplicationData] = useState<Array<Number>>([])
  const [plusFormulaData, setPlusFormulaData] = useState<Array<String>>([])
  const [minusFormulaData, setMinusFormulaData] = useState<Array<String>>([])
  const [multiplicationFormulaData, setMultiplicationFormulaData] = useState<Array<String>>([])
  const [checkNum, setCheckNum] = useState(false)
  const [checkFormula, setCheckFormula] = useState(false)

  // 数字を生成
  const createNum = () => {
    var plusData = [];
    var minusData = [];
    var multiplicationData = [];
    const plusMin:number = plusMinState;
    const plusMax:number = plusMaxState;
    const minusMin:number = minusMinState;
    const minusMax:number = minusMaxStae;
    const multiplicationMin:number = multiplicationMinState;
    const multiplicationMax:number = multiplicationMaxState;

    for (let i = 0; i < 100; i++) {
        const random_plus_num = Math.floor(Math.random() * (plusMax - plusMin) + plusMin);
        const random_minus_num = Math.floor(Math.random() * (minusMax - minusMin) + minusMin);
        const random_multiplication_num = Math.floor(Math.random() * (multiplicationMax - multiplicationMin)  + multiplicationMin) ;

        plusData.push(random_plus_num)
        minusData.push(random_minus_num)
        multiplicationData.push(random_multiplication_num)
    }
    setPlusData(plusData)
    setMinusData(minusData)
    setMultiplicationData(multiplicationData)

    setCheckNum(true)
    setNumDone(true)
  }

  // 式を生成
  const createFormula = () => {
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
    setFormulaDone(true)
  }

  return (
    <>
      <Home />
      <br />
      <div className="main_content">
        {checkNum
          ? <h2>数字を生成しました!!</h2>
          :
          <>
            <br />
            <h1>足し算、引き算、掛け算 MIX</h1><br />
            <h2>ランダムな数字を生成する</h2>
            <br />
            {/* <p>加算最小値</p> */}
            <TextField
              id="outlined-basic"
              label="加算最小値"
              variant="outlined"
              type='number'
              defaultValue={10}
              onChange={
                (e:any) => setPlusMinState(e.target.value)
              }
            />
            {/* <p>加算最大値</p> */}
            <TextField
              id="outlined-basic"
              label="加算最大値"
              variant="outlined"
              type="number"
              defaultValue={1000}
              onChange={
                (e:any) => setPlusMaxState(e.target.value)
              }
              />
            <br />
            <br />
            {/* <p>減算最小値</p> */}
            <TextField
              id="outlined-basic"
              label="減算最小値"
              variant="outlined"
              type="number"
              defaultValue={10}
              onChange={
                (e:any) => setMinusMinState(e.target.value)
              }
            />
            {/* <p>減算最大値</p> */}
            <TextField
              id="outlined-basic"
              label="減算最大値"
              variant="outlined"
              type="number"
              defaultValue={1000}
              onChange={
                (e:any) => setMinusMaxState(e.target.value)
              }
            />
            <br />
            <br />
            {/* <p>乗算最小値</p> */}
            <TextField
              id="outlined-basic"
              label="乗算最小値"
              variant="outlined"
              type="number"
              defaultValue={2}
              onChange={
                (e:any) => setMultiplicationMinState (e.target.value)
              }
            />
            {/* <p>乗算最大値</p> */}
            <TextField
              id="outlined-basic"
              label="乗算最大値"
              variant="outlined"
              type="number"
              defaultValue={9}
              onChange={
                (e:any) => setMultiplicationMaxState (e.target.value)
              }
            />
            <br />
            <br />
            <div className="main_button">
              <Button
                className="checkButton"
                variant="contained"
                color="primary"
                type='button'
                onClick={() => createNum()}
              >
                  数字を確定
              </Button>
              <Button
                style={{ margin: 10}}
                className="checkButton"
                type='button'
                onClick={() => window.location.reload()}
                variant="contained"
                color="secondary"
              >
                リセット
              </Button>
            </div>
          </>
        }
        <br />
        {
          numDone
            ? (
              checkFormula 
                  ? <h2>PDFを生成しました!!</h2>
                  : <>
                      <Button
                        variant="contained"
                        color="primary"
                        type='button'
                        onClick={
                          () => createFormula()
                        }
                      >
                        PDFを生成する
                      </Button>
                    </>
            ) : ""
        }
        
        <br />
        <br />
        {formulaDone
          ? <PdfDocument
              document={
                <TestDocument
                  data1={plusFormulaData}
                  data2={minusFormulaData}
                  data3={multiplicationFormulaData}
                />
              }
            />
          : ""
        }
      </div>
    </>
  );
};

export default Mix;
