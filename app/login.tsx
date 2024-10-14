import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppRouter from './AppRouter';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppRouter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});