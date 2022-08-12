import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { PasswordInput, Text } from 'carbon-react-native';

const styles = StyleSheet.create({
  view: {
    padding: 16,
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingBottom: 64,
  },
});

export default class TestPasswordInput extends React.Component {
  state = {
    value1: '',
    value2: 'Starting item',
    value3: '',
    value4: '',
    value5: '',
    value6: 'Can not change me',
    value7: '',
  };

  private changeText = (field: string, value: string): void => {
    this.setState({[field]: value});
  };

  render(): React.ReactNode {
    const {value1, value2, value3, value4, value5, value6, value7} = this.state;
    const itemStyle = {};

    return (
      <ScrollView keyboardShouldPersistTaps="handled" contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.container} style={styles.view}>
        <Text style={{marginBottom: 16}} type="heading-04" text="Password input" />
        <View style={itemStyle}><PasswordInput label="Text box" value={value1} helperText="I am helper text" onChangeText={value => this.changeText('value1', value)} /></View>
        <View style={itemStyle}><PasswordInput label="Text box with really long label that is probably going to wrap on most screens" value={value2} onChangeText={value => this.changeText('value2', value)} /></View>
        <View style={itemStyle}><PasswordInput label="I should have placeholder text" value={value3} placeholder="I am placeholder text" onChangeText={value => this.changeText('value3', value)} /></View>
        <View style={itemStyle}><PasswordInput label="I should have everything" value={value4} placeholder="I am placeholder text" helperText="I am helper text that is really long explaining how this input should work and stuff" onChangeText={value => this.changeText('value4', value)} /></View>
        <View style={itemStyle}><PasswordInput label="I am required" required={true} value={value5} placeholder="Set me and clear me" onChangeText={value => this.changeText('value5', value)} getErrorText={() => 'Item is required'} /></View>
        <View style={itemStyle}><PasswordInput label="I can be invalid" isInvalid={value => value?.toLowerCase().indexOf('https') !== 0} value={value7} placeholder="I must start with https or will error" onChangeText={value => this.changeText('value7', value)} getErrorText={() => 'Must start with https'} /></View>
        <View style={itemStyle}><PasswordInput label="I am disabled" disabled={true} value={value6} onChangeText={value => this.changeText('value6', value)} /></View>
      </ScrollView>
    );
  }
}
