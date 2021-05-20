import Home from './Home'
import '../static/css/content.css';

const Main = () => {
    return (
        <>
          <Home />
          <br />  
          <h2>使い方</h2>
          <br />
          <div className="discription">
            <p>① 生成するジェネレーターを選択する。（左側のバーから選択できます）</p>
            <p>② それぞれ、生成する式の数字の最小値と最大値を入力する。</p>
            <p>③ 「数字を確定」ボタンをクリック</p>
            <p>④ 「PDFを生成」ボタンをクリック</p>
            <p>⑤ 「PDFをダウンロードする」ボタンをクリック</p>
            <br />
          </div>
        </>
    )
}

export default Main
