import {
    Document,
    Font,
    Page,
    StyleSheet,
    Text,
    View
  } from "@react-pdf/renderer";
  import * as React from "react";
  
  import { DATA_PROPS } from "./interfaces";
  
  export const styles = StyleSheet.create({
    font: { fontFamily: "Oswald" },
    placement: { margin: 20, flexDirection: 'row'},
    view_placement: {marginRight: 50, marginLeft: 35 }
  });
  const fontSrc =
    "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf";
  Font.register({ family: "Oswald", src: fontSrc });
  
  const TestDocument: React.VFC<DATA_PROPS> = ({ data1, data2, data3 }) => {
    return (
        <Document>
            <Page size="A4" style={styles.font}>
            <View style={styles.placement} >
                <View style={styles.view_placement}>{data1.map(e => <Text>{e}</Text>)}</View>
                <View style={styles.view_placement}>{data2.map(e => <Text>{e}</Text>)}</View>
                <View style={styles.view_placement}>{data3.map(e => <Text>{e}</Text>)}</View>
            </View>
          </Page>
        </Document>
      );
    // else
    //   return (
    //     <Document>
    //       <Page size="A4">
    //         <View>
    //           <Text>This Pdf could not be generated</Text>
    //         </View>
    //       </Page>
    //     </Document>
    //   );
  };
  
  export default TestDocument;
  