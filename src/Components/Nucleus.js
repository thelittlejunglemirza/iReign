import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Nucleus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: this.props.component,
    }
  }

  render() {
      return (
        <View style={styles.circle}>
          {this.state.component}
        </View>
      );
  }
}
 const styles = StyleSheet.create({
   circle: {
    width: 150,
    height: 150,
    borderRadius: 250/2,
    borderColor: 'blue',
    borderWidth: 5,

    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },

 })
