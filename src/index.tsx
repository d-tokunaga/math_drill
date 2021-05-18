import { render } from "react-dom";
import PDFLink from "./PDFLink";
import PlusOnly from "./PlusOnly";
import MinusOnly from "./MinusOnly";
import MultiplicationOnly from './Multiplication';
import Main from "./Main";
import "./styles.css";
import "./static/css/global.module.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
        <Switch>
          <Route path="/multiplication-only">
            <MultiplicationOnly />
          </Route>
          <Route path="/minus-only">
            <MinusOnly />
          </Route>
          <Route path="/plus-only">
            <PlusOnly />
          </Route>
          <Route path="/mix">
            <PDFLink />
          </Route>
          {/* <Route exact path='/mix' component={PDFLink}/> */}
          <Route path="/">
            <Main />
          </Route>
          {/* <Route exact path='/' component={Home}/> */}
        </Switch>
        </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);