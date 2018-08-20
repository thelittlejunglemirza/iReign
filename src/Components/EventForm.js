import React from 'react'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { View, Alert } from 'react-native';

export default class EventForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <View>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={Alert.alert('you did it')}/>
        <FormValidationMessage>{'This field is required'}</FormValidationMessage>
      </View>
    );
  }
}
