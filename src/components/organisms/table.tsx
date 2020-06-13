import React, { Component } from 'react';
import { TouchableOpacity,FlatList,StyleSheet,Text, View } from 'react-native';
export default class Table extends Component {
  render() {
    return (
      <View style={styles.margin}>
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
});