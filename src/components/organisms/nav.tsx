import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';

export default class Nav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}><Text>sharebtn</Text></View>
        <View style={styles.center}><Text>addbtn</Text></View>
        <View style={styles.right}><Text>settingbtn</Text></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"row",
  },
  left: {
    flex:1,
    margin:30,
    backgroundColor:"#0000ff",
  },
  center: {
    flex:2,
    margin:10,
    backgroundColor:"#00ff00",
  },
  right: {
    flex:1,
    margin:30,
    backgroundColor:"#0000ff",
  },
});