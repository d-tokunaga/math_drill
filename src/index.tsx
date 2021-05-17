import { render } from "react-dom";
import PDFLink from "./PDFLink";
import PlusOnly from "./PlusOnly";
// import Home from "./Home";
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
          <Route path="/plus-only">
            <PlusOnly />
          </Route>
          <Route path="/mix">
            <PDFLink />
          </Route>
          {/* <Route exact path='/mix' component={PDFLink}/> */}
          <Route path="/">
            <PDFLink />
          </Route>
          {/* <Route exact path='/' component={Home}/> */}
        </Switch>
        </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);