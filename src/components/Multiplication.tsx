import React from 'react'
import PdfDocument from "./PdfDocument";
import TestDocument from "./TestDocument";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Home from "./Home";
import '../static/css/content.css';

const Multiplication = () => {
  const { useState } = React;

  const [multiplicationMinState, setMultiplicationMinState] = useState<number>(2);
  const [multiplicationMaxState, setMultiplicationMaxState] = useState<number>(9);
  const [numDone, setNumDone] = useState(false);
  const [formulaDone, setFormulaDone] = useState(false);
  const [multiplicationData1, setMultiplicationData1] = useState<Array<Number>>([])
  const [multiplicationData2, setMultiplicationData2] = useState<Array<Number>>([])
  const [multiplicationData3, setMultiplicationData3] = useState<Array<Number>>([])
  const [multiplicationFormulaData1, setMultiplicationFormulaData1] = useState<Array<String>>([])
  const [multiplicationFormulaData2, setMultiplicationFormulaData2] = useState<Array<String>>([])
  const [multiplicationFormulaData3, setMultiplicationFormulaData3] = useState<Array<String>>([])
  const [checkNum, setCheckNum] = useState(false)
  const [checkFormula, setCheckFormula] = useState(false)

  // 数字を生成
  const createNum = () => {
    var multiplicationData1 = [];
    var multiplicationData2 = [];
    var multiplicationData3 = [];
    const multiplicationMin = multiplicationMinState;
    const multiplicationMax = multiplicationMaxState ;
    for (let i = 0; i < 300; i++) {
      const random_multiplication_num1 = Math.floor( Math.random() * (multiplicationMax + 1 - multiplicationMin) ) + multiplicationMin ;
      const random_multiplication_num2 = Math.floor( Math.random() * (multiplicationMax + 1 - multiplicationMin) ) + multiplicationMin ;
      const random_multiplication_num3 = Math.floor( Math.random() * (multiplicationMax + 1 - multiplicationMin) ) + multiplicationMin ;

      multiplicationData1.push(random_multiplication_num1)
      multiplicationData2.push(random_multiplication_num2)
      multiplicationData3.push(random_multiplication_num3)
    }

    setMultiplicationData1(multiplicationData1)
    setMultiplicationData2(multiplicationData2)
    setMultiplicationData3(multiplicationData3)

    setCheckNum(true)
    setNumDone(true)
  }

  // 式を生成
  const createFormula = () => {
    // あとでany修正
    var data1:any = [];
    var data2:any = [];
    var data3:any = [];
    for (let i = 0; i < 60; i+=2) {
      const create_multiplication_formula1: string = `${multiplicationData1[i]} × ${multiplicationData1[i+1]} =`
      const create_multiplication_formula2: string = `${multiplicationData2[i]} × ${multiplicationData2[i+1]} =`
      const create_multiplication_formula3: string = `${multiplicationData3[i]} × ${multiplicationData3[i+1]} =`

      data1.push(create_multiplication_formula1)
      data2.push(create_multiplication_formula2)
      data3.push(create_multiplication_formula3)
    }

    setMultiplicationFormulaData1(data1)
    setMultiplicationFormulaData2(data2)
    setMultiplicationFormulaData3(data3)

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
            <br /><br />
            <h1>掛け算だけ</h1>
            <br />
            <h2>ランダムな数字を生成する</h2>
            <br />

            {/* <p>乗算最小値</p> */}
            <TextField
              id="outlined-basic"
              label="乗算最小値"
              variant="outlined"
              type='number'
              defaultValue={2}
              onChange={
                (e:any) => setMultiplicationMinState(e.target.value)
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
                (e:any) => setMultiplicationMaxState(e.target.value)
              }
            />
            <br /><br />
            <Button
              variant="contained"
              color="primary"
              type='button'
              onClick={
                () => createNum()
              }
            >
              数字を確定
            </Button>
            <Button
              style={{ margin: 10}}
              type='button'
              variant="contained"
              color="secondary"
              onClick={
                () => window.location.reload()
              }
            >
              リセット
            </Button>
          </>
        }
        <br />
        {numDone
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
            )
          : ""
        }
        <br />
        <br />
        {formulaDone
          ? <PdfDocument
              document={
                <TestDocument
                  data1={multiplicationFormulaData1}
                  data2={multiplicationFormulaData2}
                  data3={multiplicationFormulaData3}
                />
              }
            />
          : ""
        }
      </div>
    </>
  )
}

export default Multiplication
