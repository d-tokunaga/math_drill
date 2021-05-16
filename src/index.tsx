import * as React from "react";
import { render } from "react-dom";
import PdfDocument from "./PdfDocument";

import PDFLink from "./PDFLink";

import "./styles.css";
import TestDocument from "./TestDocument";

function App() {
  return (
    <div className="App">
      <PDFLink />
      {/* <PdfDocument
          title="Cost Disclosure Document"
          document={<TestDocument />}
        /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);