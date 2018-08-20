import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import EventForm from './EventForm'

export default class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal now!</Text>
        <EventForm />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
