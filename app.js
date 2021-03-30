import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';
import {Audio}from 'expo-av';
import SoundButton from './components/SoundButton';

export default class App extends Component {
  render() {
    return (
      <View>
      <SoundButton/>
      </View>
    );
  }
}
