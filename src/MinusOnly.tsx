import React from 'react'
import PdfDocument from "./PdfDocument";
import TestDocument from "./TestDocument";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Home from "./Home";
import './static/css/content.css';

function MinusOnly() {
    const { useState } = React;

    const [minusMinState, setMinusMinState] = useState<number>(10);
    const [minusMaxState, setMinusMaxState] = useState<number>(1000);
    const [numDone, setNumDone] = useState(false);
    const [formulaDone, setFormulaDone] = useState(false);
    const [minusData1, setMinusData1] = useState<Array<Number>>([])
    const [minusData2, setMinusData2] = useState<Array<Number>>([])
    const [minusData3, setMinusData3] = useState<Array<Number>>([])
    const [minusFormulaData1, setMinusFormulaData1] = useState<Array<String>>([])
    const [minusFormulaData2, setMinusFormulaData2] = useState<Array<String>>([])
    const [minusFormulaData3, setMinusFormulaData3] = useState<Array<String>>([])
    const [checkNum, setCheckNum] = useState(false)
    const [checkFormula, setCheckFormula] = useState(false)

    const createNum = () => {
      var minusData1 = [];
      var minusData2 = [];
      var minusData3 = [];
      const minusMin = minusMinState;
      const minusMax = minusMaxState ;
      for (let i = 0; i < 300; i++) {
        const random_minus_num1 = Math.floor( Math.random() * (minusMax + 1 - minusMin) ) + minusMin ;
        const random_minus_num2 = Math.floor( Math.random() * (minusMax + 1 - minusMin) ) + minusMin ;
        const random_minus_num3 = Math.floor( Math.random() * (minusMax + 1 - minusMin) ) + minusMin ;
        minusData1.push(random_minus_num1)
        minusData2.push(random_minus_num2)
        minusData3.push(random_minus_num3)
      }
      setMinusData1(minusData1)
      setMinusData2(minusData2)
      setMinusData3(minusData3)
  
      setCheckNum(true)
      setNumDone(true)
    }
  
    const createFormula = () => {
      // あとでany修正
      var data1:any = [];
      var data2:any = [];
      var data3:any = [];

      for (let i = 0; i < 60; i+=2) {
        //  data1
        if (minusData1[i] > minusData1[i+1]) {
            const create_minus_formula1: string = `${minusData1[i]} - ${minusData1[i+1]} =`
            data1.push(create_minus_formula1)
        } else {
            const create_minus_formula1: string = `${minusData1[i+1]} - ${minusData1[i]} =`
            data1.push(create_minus_formula1)
        }
        // data2
        if (minusData2[i] > minusData2[i+1]) {
            const create_minus_formula2: string = `${minusData2[i]} - ${minusData2[i+1]} =`
            data2.push(create_minus_formula2)
        } else {
            const create_minus_formula2: string = `${minusData2[i+1]} - ${minusData2[i]} =`
            data2.push(create_minus_formula2)
        }
        // data3
        if (minusData3[i] > minusData3[i+1]) {
            const create_minus_formula3: string = `${minusData3[i]} - ${minusData3[i+1]} =`
            data3.push(create_minus_formula3)
        } else {
            const create_minus_formula3: string = `${minusData3[i+1]} - ${minusData3[i]} =`
            data3.push(create_minus_formula3)
        }
    }

    setMinusFormulaData1(data1)
    setMinusFormulaData2(data2)
    setMinusFormulaData3(data3)

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
                <h1>引き算だけ</h1><br />
                <h2>ランダムな数字を生成する</h2>
                <br />
                {/* <p>加算最小値</p> */}
                <TextField id="outlined-basic" label="加算最小値" variant="outlined" type='number' defaultValue={10} onChange={(e:any) => setMinusMinState(e.target.value)} />
                {/* <p>加算最大値</p> */}
                <TextField id="outlined-basic" label="加算最大値" variant="outlined" type="number" defaultValue={1000} onChange={(e:any) => setMinusMaxState(e.target.value)} />
                <br />
                <br />
                <Button variant="contained" color="primary" type='button' onClick={() => createNum()}>数字を確定</Button>
                <Button style={{ margin: 10}} type='button' onClick={() => window.location.reload()} variant="contained" color="secondary">リセット</Button>
              </>
          }
          <br />
          {numDone ? (checkFormula ? <h2>PDFを生成しました!!</h2> : <><Button variant="contained" color="primary" type='button' onClick={() => createFormula()}>PDFを生成する</Button></>) : ""}
          <br />
          <br />
          {formulaDone ? <PdfDocument
              document={
                  <TestDocument data1={minusFormulaData1} data2={minusFormulaData2} data3={minusFormulaData3} />
              }
          /> : ""}
        </div>
      </>
    )
}

export default MinusOnly
