import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealNavigator from './Navigation/MealNavigator'
import { enableScreens } from 'react-native-screens'
import * as Font from 'expo'
import { AppLoading } from 'expo'

enableScreens();

export default function App() {
  return (
    <MealNavigator />
  );
}

