import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/Header';
import Boxes from './src/Boxes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Boxes />
    </View>
  );
}

export default App;
