import React, { Component } from 'react';
import {TouchableOpacity,FlatList,StyleSheet,Text, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
export default class Tables extends Component {

  render() {
    var title = [];
    var body = [];
    var body2 = [];
    var mon = ['a','a','a','a','a'];
    var tue = ['a','a','a','a','a'];
    var wed = ['a','a','a','a','a'];
    var thu = ['a','a','a','a','a'];
    var fri = ['a','a','a','a','a'];
    var sat = ['a','a','a','a','a'];
    var sun = ['a','a','a','a','a'];
    var week = [mon,tue,wed,thu,fri,sat,sun];
    var weekstr = ["","月","火","水","木","金","土","日"];
    var period = Math.max(mon.length,tue.length,wed.length,thu.length,fri.length,sat.length,sun.length)
    var flex = [1,1,1,1,1,1,1];
    var flex2 = [2,1,1,1,1,1,1];
    
    for(var i=0;i<period;i++){
      title.push(i+1);
      for(var j=0;j<7;j++){
        var thisWeek = week[j]
        body2.push(thisWeek[i]);
      }
      body.push(body2);
      body2 = []
    }
    var hei = 400/period;
    return (
      <View style={styles.margin}>
          <Table borderStyle={{borderWidth: 1}}>
            <Row data={weekstr} flexArr={flex} style={styles.head} textStyle={styles.text}/>
            <TableWrapper style={styles.wrapper}>
              <Col data={title} style={styles.title} heightArr={[hei,hei]} textStyle={styles.text} />
              <Rows data={body} flexArr={flex} style={ { height: hei  }}textStyle={styles.text} />
            </TableWrapper>
          </Table>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    flex:1,
    backgroundColor:"#0000ff",
    margin:5,
  },
  margin: {
    flex:1,
    margin:20,
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 30,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  text: { textAlign: 'center' },
});