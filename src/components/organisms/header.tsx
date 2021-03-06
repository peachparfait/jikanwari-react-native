import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}><Text>leftbtn</Text></View>
        <View style={styles.center}><Text>week</Text></View>
        <View style={styles.right}><Text>rightbtn</Text></View>
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
    backgroundColor:"#0000ff",
  },
  center: {
    flex:5,
  },
  right: {
    flex:1,
    backgroundColor:"#0000ff",
  },
});