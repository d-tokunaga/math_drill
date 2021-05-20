import {
    Document,
    Page,
    StyleSheet,
    Text,
    View
  } from "@react-pdf/renderer";
  import * as React from "react";
  import { DATA_PROPS } from "./interfaces";
  
  export const styles = StyleSheet.create({
    placement: { margin: 20, flexDirection: 'row'},
    view_placement: {marginRight: 50, marginLeft: 35 },
    text_placement: { marginTop: 3, marginBottom: 3 }
  });
  
  const TestDocument: React.VFC<DATA_PROPS> = ({ data1, data2, data3 }) => {
    if (data1 && data2 && data3) {
      return (
        <Document>
          <Page size="A4">
            <View style={styles.placement} >
              <View
                style={styles.view_placement}
              >
                {
                  data1.map(
                    e => <Text style={styles.text_placement}>{e}</Text>
                  )
                }
              </View>
              <View
                style={styles.view_placement}
              >
                {
                  data2.map(
                    e => <Text style={styles.text_placement}>{e}</Text>
                  )
                }
              </View>
              <View
                style={styles.view_placement}
              >
                {
                  data3.map(
                    e => <Text style={styles.text_placement}>{e}</Text>
                  )
                }
              </View>
            </View>
          </Page>
        </Document>
        );
    } else
      return (
        <Document>
          <Page size="A4">
            <View>
              <Text>This Pdf could not be generated</Text>
            </View>
          </Page>
        </Document>
      );
  };
  
export default TestDocument;
  