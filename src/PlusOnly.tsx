import React from 'react'

import PdfDocument from "./PdfDocument";
import TestDocument from "./TestDocument";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Home from "./Home";

const PlusOnly = () => {
    const { useState } = React;

  const [plusMinState, setPlusMinState] = useState<number>(10);
  const [plusMaxState, setPlusMaxState] = useState<number>(1000);
  const [numDone, setNumDone] = useState(false);
  const [formulaDone, setFormulaDone] = useState(false);
  const [plusData1, setPlusData1] = useState<Array<Number>>([])
  const [plusData2, setPlusData2] = useState<Array<Number>>([])
  const [plusData3, setPlusData3] = useState<Array<Number>>([])
  const [plusFormulaData1, setPlusFormulaData1] = useState<Array<String>>([])
  const [plusFormulaData2, setPlusFormulaData2] = useState<Array<String>>([])
  const [plusFormulaData3, setPlusFormulaData3] = useState<Array<String>>([])
  const [checkNum, setCheckNum] = useState(false)
  const [checkFormula, setCheckFormula] = useState(false)

  const createNum = () => {
    var plusData1 = [];
    var plusData2 = [];
    var plusData3 = [];
    const plusMin = plusMinState;
    const plusMax = plusMaxState ;
    for (let i = 0; i < 300; i++) {
        const random_plus_num1 = Math.floor( Math.random() * (plusMax + 1 - plusMin) ) + plusMin ;
        const random_plus_num2 = Math.floor( Math.random() * (plusMax + 1 - plusMin) ) + plusMin ;
        const random_plus_num3 = Math.floor( Math.random() * (plusMax + 1 - plusMin) ) + plusMin ;
        plusData1.push(random_plus_num1)
        plusData2.push(random_plus_num2)
        plusData3.push(random_plus_num3)
    }
    setPlusData1(plusData1)
    setPlusData2(plusData2)
    setPlusData3(plusData3)

    setCheckNum(true)
    setNumDone(true)
  }

  const createFormula = () => {
    // あとでany修正
    var data1:any = [];
    var data2:any = [];
    var data3:any = [];
    for (let i = 0; i < 60; i+=2) {
        const create_plus_formula1: string = `${plusData1[i]} + ${plusData1[i+1]} =`
        const create_plus_formula2: string = `${plusData2[i]} + ${plusData2[i+1]} =`
        const create_plus_formula3: string = `${plusData3[i]} + ${plusData3[i+1]} =`
        data1.push(create_plus_formula1)
        data2.push(create_plus_formula2)
        data3.push(create_plus_formula3)
    }
    setPlusFormulaData1(data1)
    setPlusFormulaData2(data2)
    setPlusFormulaData3(data3)

    setCheckFormula(true)
    setFormulaDone(true)
  }
    return (
        <>
            <Home />
            <br />
            {checkNum
                ? <h2>数字を生成しました!!</h2>
                :
                <>
                    <br /><br />
                    <h1>足し算だけ</h1><br />
                    <h2>ランダムな数字を生成する</h2>
                    <br />
                    {/* <p>加算最小値</p> */}
                    <TextField id="outlined-basic" label="加算最小値" variant="outlined" type='number' defaultValue={10} onChange={(e:any) => setPlusMinState(e.target.value)} />
                    {/* <p>加算最大値</p> */}
                    <TextField id="outlined-basic" label="加算最大値" variant="outlined" type="number" defaultValue={1000} onChange={(e:any) => setPlusMaxState(e.target.value)} />
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
                    <TestDocument data1={plusFormulaData1} data2={plusFormulaData2} data3={plusFormulaData3} />
                }
            /> : ""}
        </>
    )
}

export default PlusOnly
