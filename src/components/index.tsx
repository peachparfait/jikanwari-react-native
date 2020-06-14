import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';
import Header from "./organisms/header";
import Nav from "./organisms/nav";
import Tables from "./organisms/table";

export default class Index extends Component {
  render() {
    return (
      <>
        <View style={styles.header}><Header /></View>
        <View style={styles.table}><Tables /></View>
        <View style={styles.nav}><Nav /></View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex:1,
    backgroundColor:"#ff0000",
  },
  table: {
    flex:8,
  },
  nav: {
    flex:2,
    backgroundColor:"#ff0000",
  },
});
