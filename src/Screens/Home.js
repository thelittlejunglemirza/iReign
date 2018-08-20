import React from 'react';
import { Image ,StyleSheet, Button, View, Text } from 'react-native';

import Nucleus from '../Components/Nucleus';
import Cell from '../Components/Cell';
import Clock from '../Components/Clock';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../img/logo.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    // headerTitle instead of title
    return{
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
    }
  };

  constructor(props) {
    super(props)
    // Bind the this context to the handler function
    this.handler = this._pressSchedule;
    // Set some state
    this.state = {
        count: 0,
    };
  }

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  _pressSchedule = (event) => {
    this.props.navigation.navigate('Schedule', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
  }

  render() {
    return (
      <View style={styles.container}>
        <Nucleus component={<Clock/>}/>
        <Cell cb={this.handler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
