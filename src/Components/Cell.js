import React from 'react';
import { View, Image, StyleSheet, Alert,
TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSchedule: false,
    }
  }

  _onLongPressButton() {
    Alert.alert('you long-pressed the button');
  }

  componentDidMount() {
    if(this.state.isSchedule) this.state.route = 'schedule.png';
  }

  render() {
    return(
      <View style={styles.cell}>
        <TouchableHighlight onPress={this.props.cb}
                            onLongPress={this._onLongPressButton}
                            underlayColor="white">
          <Image
            source={require('./../../img/schedule.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    width: 75,
    height: 75,
    borderRadius: 250/2,
    borderColor: 'blue',
    borderWidth: 5,

    position: 'relative',
    top: -200,

    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    position: 'relative',
    top:-12
  }

})
