import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import image from './assets/tomorrowland.png';

const App = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo - Joshua Tapia!</Text>
      <Image
        style={styles.image}
        source={{uri:'https://store.tomorrowland.com/cdn/shop/files/NOS-Official-Tomorrowland-Flag-TML_0003_180721-210537-TML2018-FilleRoelants-2.jpg?v=1655798550&width=4000'}}
      />
      <TextInput
        style={styles.input}
        placeholder="Escribe aquí"
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <TouchableOpacity
        onPress={() => Alert.alert('Hola Mundo!')}
        style={styles.button} 
      >
        <Text style={styles.buttonText}>Presiona aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 90,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default App;
