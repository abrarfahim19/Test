import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './app/components/AppText';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <MaterialCommunityIcons name='bus' size={200} color={'dodgerblue'} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
