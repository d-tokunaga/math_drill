import { render } from "react-dom";
import Mix from "./components/Mix";
import PlusOnly from "./components/PlusOnly";
import MinusOnly from "./components/MinusOnly";
import MultiplicationOnly from './components/Multiplication';
import Main from "./components/Main";
import "./styles.css";
import "./static/css/global.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
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
          <Mix />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);