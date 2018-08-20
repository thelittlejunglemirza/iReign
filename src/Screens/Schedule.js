import React from 'react';
import { Button, View, Text, Alert, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class Schedule extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
      headerTitle: 'Schedule'
    };
  };

  constructor(props) {
    super(props);
    // this.handler = this._dayPressHandler;
    this.currentDay = '2012-05-01'
  }

  _dayPressHandler = (event) => {
    this.props.navigation.navigate('MyModal')
    // const { navigation } = this.props;
    // /Alert.alert('here again 123');
    // navigation.navigate('MyModal');
  }

  render() {
    const { navigation } = this.props;
    // const itemId = navigation.getParam('itemId', 'NO-ID');
    // const otherParam = navigation.state.params.otherParam;

    return (
        <Calendar
          style={styles.calendar}
          markedDates={{
            '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
            '2012-05-17': {marked: true},
            '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2012-05-19': {disabled: true, disableTouchEvent: true}
          }}
          current={'2012-05-01'}
          minDate={'2012-05-01'}
          maxDate={'2012-05-30'}
          onDayPress={ _ => this._dayPressHandler() }
          onDayLongPress={(day) => {this._dayPressHandler}}
          monthFormat={'yyyy MM'}
          onMonthChange={(month) => {console.log('month changed', month)}}
          hideArrows={false}
          renderArrow={(direction) => (<Text>Arrow</Text>)}
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={1}
          showWeekNumbers={true}
          onPressArrowLeft={substractMonth => substractMonth()}
          onPressArrowRight={addMonth => addMonth()}
        />
    );
  }
}

const styles = StyleSheet.create({
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350,
        width:'90%',
        margin: 20,
    },
    text: {
        textAlign: 'center',
        borderColor: '#bbb',
        padding: 10,
        backgroundColor: '#eee'
    },
    container: {
        flex: 1,
        backgroundColor: 'gray'
    }
});
