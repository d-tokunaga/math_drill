import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BlobProvider } from "@react-pdf/renderer";
import { faSpinner, faFile } from "@fortawesome/free-solid-svg-icons";
import { PdfDocumentProps } from './interfaces'
import Button from '@material-ui/core/Button';
import '../static/css/content.css'

const PdfDocument: React.FC<PdfDocumentProps> = ({ document }) => {
  const { useState, useEffect } = React;
  const [ready, setReady] = useState(false);

  useEffect(() => {
      setTimeout(() => {
      setReady(true);
      }, 0);
  }, []);

  if (!ready) {
      return null;
  } else {
    return (
    <BlobProvider document={document}>
      {({ url, loading, error }) => {
      if (loading) {
          return (
          <span>
              <FontAwesomeIcon icon={faSpinner} spin />
              generating document...
          </span>
          );
      }
      if (!loading && url) {
        return (
        <Button className="checkButton" variant="contained" color="primary"　type='button'><a href={url} download>PDFをダウンロードする <FontAwesomeIcon icon={faFile} /></a></Button>
        );
      }
      if (error) {
        console.error(error);
        return <p>An error occurred</p>;
      }
      return null;
      }}
    </BlobProvider>
    );
  }
};

export default PdfDocument;
