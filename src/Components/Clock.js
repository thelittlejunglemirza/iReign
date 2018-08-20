import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Circle extends React.Component {
  state = {
      curTime: null,
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString().split(',')[1]
      })
    },1000)
  }

  render() {
      return (
        <View style={styles.container}>
          <Text style={styles.black}>{this.state.curTime}</Text>
        </View>
      );
  }
}
 const styles = StyleSheet.create({
   black: {
     color: '#000',
   }
 })
