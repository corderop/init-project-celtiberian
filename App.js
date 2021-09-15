import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/navbar/navbar';

export default function App() {
  return (
    <View>
      <Navbar />
    </View>
  );
}