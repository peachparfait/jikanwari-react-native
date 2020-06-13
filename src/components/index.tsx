import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';
import Header from "./organisms/header";
export default class Index extends Component {
  render() {
    return (
      <>
        <View style={styles.header}><Header /></View>
        <View style={styles.table}><Text>heo</Text></View>
        <View style={styles.buttons}><Text>heo</Text></View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex:1,
  },
  table: {
    flex:8,
    backgroundColor:"#ff0000",
  },
  buttons: {
    flex:2,
  },
});
